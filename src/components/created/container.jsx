"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import TodoItem from "./todoitem";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import SkeletonTodoItem from "./skeletonTodoItem";

const Container = () => {
  const [data, setData] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { toast } = useToast();

  const getData = () => {
    setIsLoading(true);
    axios
      .get("https://next-todo-app-alpha.vercel.app/api/gettodos")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      });
  };

  const addData = () => {
    axios
      .post("https://next-todo-app-alpha.vercel.app/api/create", {
        text: taskInput,
        isDone: false,
      })
      .then((res) => {
        toast({
          description: "Your task has been added.",
        });
        setTaskInput("");
        getData();
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-[95%] lg:w-[35%] bg-white rounded-lg py-10 px-5 lg:p-10">
      <h1 className="text-slate-800 text-xl font-bold">To-do List</h1>
      <div className="w-full flex items-center mt-5 h-12 rounded-full bg-slate-200 ps-1">
        <Input
          className="outline-none h-full bg-transparent border-none"
          placeholder="Add your task"
          value={taskInput}
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
        />
        <Button
          variant="lg"
          className="bg-orange-500 text-white hover:bg-orange-500/70 h-full w-[150px] rounded-full"
          onClick={() => addData()}
        >
          Add
        </Button>
      </div>
      <div className="w-full max-h-[400px] overflow-auto scroll-hide">
        {isLoading && (
          <>
            <SkeletonTodoItem />
            <SkeletonTodoItem />
            <SkeletonTodoItem />
            <SkeletonTodoItem />
            <SkeletonTodoItem />
          </>
        )}
        {data.map((todo) => {
          return (
            <TodoItem
              text={todo.text}
              id={todo._id}
              isDone={todo.isDone}
              key={todo._id}
              getData={getData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Container;

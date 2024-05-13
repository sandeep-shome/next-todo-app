"use client";
import axios from "axios";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useToast } from "@/components/ui/use-toast";

const TodoItem = ({ text, id, isDone, getData }) => {
  const { toast } = useToast();

  const removeData = () => {
    axios
      .delete("https://next-todo-app-alpha.vercel.app/api/delete", {
        params: {
          id: id,
        },
      })
      .then(() => {
        toast({
          description: "Your task has been removed.",
        });
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

  const updateData = () => {
    axios
      .put(
        "https://next-todo-app-alpha.vercel.app/api/update",
        {
          isDone: !isDone,
        },
        {
          params: {
            id: id,
          },
        }
      )
      .then(() => {
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

  return (
    <div className="w-full flex items-center justify-between py-5 px-2">
      <input
        type="checkbox"
        className="w-4 h-4 accent-orange-500"
        defaultChecked={isDone}
        onClick={() => updateData()}
      />
      <p className={`text-slate-700 ${isDone && "line-through"}`}>{text}</p>
      <IoClose
        className="text-2xl cursor-pointer text-red-500"
        onClick={() => removeData()}
      />
    </div>
  );
};

export default TodoItem;

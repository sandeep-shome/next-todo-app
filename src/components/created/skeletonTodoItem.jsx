import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonTodoItem = () => {
  return (
    <div className="w-full flex items-center justify-between py-5 px-2">
      <Skeleton className="h-4 w-4 bg-slate-300" />
      <Skeleton className="h-4 w-[250px] bg-slate-300" />
      <Skeleton className="h-4 w-4 bg-slate-300" />
    </div>
  );
};

export default SkeletonTodoItem;

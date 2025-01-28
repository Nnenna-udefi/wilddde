import React from "react";

interface style {
  text: string;
  className?: string;
}

export const CustomButton = ({ text, className }: style) => {
  return (
    <div>
      <button className={`rounded-full px-4 py-2 ${className}`}>{text}</button>
    </div>
  );
};

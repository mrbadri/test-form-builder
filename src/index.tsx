// src/index.tsx
import React from "react";
import { Button } from "@mui/material";

interface MyButtonProps {
  text: string;
  onClick: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

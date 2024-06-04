import React from "react";
import { WrapperProps } from "../types";

const Wrapper: React.FC<{
  children?: React.ReactNode;
  className?: string;
  i?: number;
}> = ({ children, className, i }: WrapperProps) => {
  return (
    <div className={className} key={i}>
      {children}
    </div>
  );
};

export default Wrapper;

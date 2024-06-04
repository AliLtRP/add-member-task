import React from "react";
import { CustomButtonProps } from "../types";
import CustomTitle from "./CustomTitle";
import { AiOutlineCheck } from "react-icons/ai";

const CustomButton: React.FC<{
  children?: React.ReactNode;
  className?: string;
  type?: string;
  title?: string;
  flag?: boolean;
  handleClick?: () => void;
}> = ({
  children,
  className,
  type,
  title,
  handleClick,
  flag,
}: {
  children?: React.ReactNode;
  type?: keyof CustomButtonProps;
  className?: keyof CustomButtonProps;
  title?: keyof CustomButtonProps;
  handleClick?: keyof CustomButtonProps;
  flag?: boolean;
}) => {
  return (
    <button
      className={className}
      type={"submit" || type}
      onClick={() => handleClick()}
    >
      <CustomTitle
        title={title!}
        className="text-[#2D9CDB] opacity-100 roboto-regular"
      />

      {children}
      {flag && <AiOutlineCheck size={12} className="text-[#7A7E80]" />}
    </button>
  );
};

export default CustomButton;

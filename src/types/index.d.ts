import React from "react";

export interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
  i?: number;
}

export interface CustomTitleProps {
  title: string;
  className?: string;
  handleClick?: () => void;
}

export interface CustomInputProps {
  type?: string;
  value?: string;
  placeHolder?: string;
  className?: string;
  ref?: any;
  handleChange?: (e) => void;
}

export interface CustomButtonProps {
  handleClick?: (e) => void;
  title?: string;
  type?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface InputAndButtonProps {
  handleLen?: (e) => void;
  handleAdd?: (e) => void;
  inputRef: any;
}

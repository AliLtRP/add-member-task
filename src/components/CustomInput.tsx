import { CustomInputProps } from "../types";

const CustomInput = (props: CustomInputProps) => {
  return (
    <input
      // ref={props.ref}
      value={props.value}
      placeholder={props.placeHolder || "meow"}
      onChange={(e) => {
        props.handleChange!(e.target.value);
      }}
      type={props.type || "text"}
      className={props.className}
    />
  );
};

export default CustomInput;

import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import Wrapper from "./Wrapper";

const InputAndButtonField = ({ onAdd }: { onAdd: (value: string) => void }) => {
  const [value, setValue] = useState<string>("");

  const handleAddButton = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <Wrapper className="w-[90%] pt-8 pl-6 flex justify-start gap-8 items-end">
      <CustomInput
        className="w-full pl-2 h-10 border-b-2 basis-[90%] text-xl placeholder-gray-400 outline-none"
        placeHolder="Enter member name"
        handleChange={setValue}
        value={value}
      />
      <CustomButton
        title="ADD"
        className="bg-[#c4c4c41c] basis-[15%] h-12 rounded-lg"
        handleClick={handleAddButton}
      />
    </Wrapper>
  );
};

export default InputAndButtonField;

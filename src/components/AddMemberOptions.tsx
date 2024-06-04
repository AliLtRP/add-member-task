import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomTitle from "./CustomTitle";
import Wrapper from "./Wrapper";

const AddMemberOptions = () => {
  const [click, setClick] = useState<boolean>(false);
  const [click1, setClick1] = useState<boolean>(false);
  const [click2, setClick2] = useState<boolean>(false);

  return (
    <Wrapper className="flex justify-start pl-6 pt-4 pb-6">
      <Wrapper className="flex justify-start items-center gap-1 basis-[24%]">
        <CustomButton
          className="w-4 h-4 border-[1px] border-[#B2E3FF] bg-[#F4FBFF]"
          flag={click}
          handleClick={() => setClick(!click)}
        />
        <CustomTitle title="Edit" className="font-extralight" />
      </Wrapper>
      <Wrapper className="flex justify-start items-center gap-1 basis-[30%]">
        <CustomButton
          className="w-4 h-4 flex justify-center items-center border-[1px] border-[#B2E3FF] bg-[#F4FBFF]"
          flag={click1}
          handleClick={() => setClick1(!click1)}
        />
        <CustomTitle title="Comment" className="font-extralight" />
      </Wrapper>
      <Wrapper className="flex justify-start items-center gap-1 basis-[30%]">
        <CustomButton
          className="w-4 h-4 border-[1px] border-[#B2E3FF] bg-[#F4FBFF]"
          flag={click2}
          handleClick={() => setClick2(!click2)}
        />
        <CustomTitle title="Add members" className="font-extralight" />
      </Wrapper>
    </Wrapper>
  );
};

export default AddMemberOptions;

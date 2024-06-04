import { AiOutlineClose } from "react-icons/ai";
import Wrapper from "./Wrapper";

const CloseComponent = () => {
  return (
    <Wrapper className="w-full flex justify-end px-4 py-4">
      <AiOutlineClose size={23} className=" opacity-25" />
    </Wrapper>
  );
};

export default CloseComponent;

import { AiOutlineClose } from "react-icons/ai";
import CustomTitle from "./CustomTitle";
import Wrapper from "./Wrapper";

const AddedMembers = ({
  name,
  handleDelete,
}: {
  name: string[];
  handleDelete: (i: number) => void;
}) => {
  return (
    <Wrapper className="w-[80%] flex pt-2 pl-6 gap-2 flex-wrap">
      {name &&
        name.map((v, i) => (
          <Wrapper
            className="flex items-center gap-2 h-12 w-42 border-[1px] bg-[#2acccc0f] border-[#B2E3FF] rounded-lg p-2 shadow-md shadow-[#b2e3ff78]"
            i={i}
          >
            <CustomTitle
              title={v}
              className="text-sm roboto-regular text-[#545353]"
            />
            <AiOutlineClose
              size={15}
              className="opacity-30"
              onClick={() => handleDelete(i)}
            />
          </Wrapper>
        ))}
    </Wrapper>
  );
};

export default AddedMembers;

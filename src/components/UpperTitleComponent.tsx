import CustomTitle from "./CustomTitle";
import Wrapper from "./Wrapper";

const UpperTitleComponent = () => {
  return (
    <Wrapper className="w-full flex justify-start">
      <CustomTitle
        title="Add members"
        className="text-2xl pl-6 font-bold text-[#505050] roboto-bold"
      />
    </Wrapper>
  );
};

export default UpperTitleComponent;

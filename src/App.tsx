import "./App.css";
import CloseComponent from "./components/CloseComponent";
import CustomTitle from "./components/CustomTitle";
import InputAndButtonField from "./components/InputAndButtonField";
import UpperTitleComponent from "./components/UpperTitleComponent";
import Wrapper from "./components/Wrapper";
import AddedMembers from "./components/AddedMembers";
import AddMemberOptions from "./components/AddMemberOptions";
import { useEffect, useState } from "react";

function App() {
  const [add, setAdd] = useState<string[]>("");
  const [del, setdel] = useState<number>();

  const handleAdd = (newName: string) => {
    setAdd((init) => [...init, newName]);
  };

  useEffect(() => {
    if (add) {
      const a = add.filter((v, i) => {
        return i !== del;
      });

      setAdd(a);
    }
    console.log(del);
  }, [del]);

  console.log(add);

  return (
    <Wrapper className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#2ACCCC]">
      <Wrapper className="min-h-[60%] h-auto w-[42%] bg-white shadow-lg">
        <Wrapper className="pl-4 flex flex-col gap-0">
          <CloseComponent />

          <UpperTitleComponent />

          <InputAndButtonField onAdd={handleAdd} />

          <AddedMembers name={add} handleDelete={setdel} />

          <Wrapper className="flex flex-col pt-10 my-[-10px] pb-8">
            <CustomTitle
              title="Allow members to"
              className="text-2xl pl-6 pt-10 font-bold text-[#505050] roboto-bold"
            />

            <AddMemberOptions />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default App;

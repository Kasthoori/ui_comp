import type { FC } from "react";
import ButtonComponent from "./components/Buttons/ButtonComponent";

const App:FC = () => {
  return(
    <>
    <div>
      <h1>Hello Button!</h1>
    </div>
    <div>
      <ButtonComponent label={"Button"} />
    </div>
    </>
  );
}

export default App;
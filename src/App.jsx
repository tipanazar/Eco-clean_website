import { FifthPart } from "./Modules/FifthPart/FifthPart";
import { FirstPart } from "./Modules/FirstPart/FirstPart";
import { FourthPart } from "./Modules/FourthPart/FourthPart";
import { Header } from "./Modules/Header/Header";
import { SecondPart } from "./Modules/SecondPart/SecondPart";
import { ThirdPart } from "./Modules/ThirdPart/ThirdPart";

function App() {
  return (
    <>
      <Header />
      <main>
        <FirstPart />
        <SecondPart />
        <ThirdPart />
        <FourthPart />
        <FifthPart />
      </main>
    </>
  );
}

export default App;

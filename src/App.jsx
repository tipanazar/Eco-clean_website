import { Header } from "./Modules/Header/Header";
import { FirstPart } from "./Modules/FirstPart/FirstPart";
import { SecondPart } from "./Modules/SecondPart/SecondPart";
import { ThirdPart } from "./Modules/ThirdPart/ThirdPart";
import { FourthPart } from "./Modules/FourthPart/FourthPart";
import { FifthPart } from "./Modules/FifthPart/FifthPart";
import { Footer } from "./Modules/Footer/Footer";

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
        <Footer />
      </main>
    </>
  );
}

export default App;

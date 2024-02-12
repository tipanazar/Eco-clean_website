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
        <h1>Підключити фото для посилань перед деплоєм коли буде домен!</h1>
        {/* <FirstPart />
        <SecondPart />
        <ThirdPart />
        <FourthPart />
        <FifthPart /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;

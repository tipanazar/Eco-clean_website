import { FirstPart } from "./Modules/FirstPart/FirstPart";
import { Header } from "./Modules/Header/Header";
import { SecondPart } from "./Modules/SecondPart/SecondPart";

function App() {
  return (
    <>
      <Header />
      <main>
        <FirstPart />
        <SecondPart />
      </main>
    </>
  );
}

export default App;

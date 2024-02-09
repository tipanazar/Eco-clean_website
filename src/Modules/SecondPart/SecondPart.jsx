import { SectionTitle } from "../../shared/Components/SectionTitle/SectionTitle";
import s from "./secondPart.module.scss";

export const SecondPart = () => {
  return (
    <section className={s.wrapper}>
      <SectionTitle text="Nasze usługi" />
    </section>
  );
};

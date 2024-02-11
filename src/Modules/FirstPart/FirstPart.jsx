import { Img } from "../../shared/Components/Img";

import backgroundImage from "../../images/others/firstBackground.jpg";

import s from "./firstPart.module.scss";

export const FirstPart = () => {
  return (
    <section className={s.wrapper}>
        <Img
          className={s.backgroundImage}
          src={backgroundImage}
          alt="background image"
        />
      <div className={s.contentWrapper}>
        <p className={s.summary}>
          WYBIERZ USLUGE DOSTOSOWANA DO TWOICH POTRZEB
        </p>
        <h1 className={s.title}>
          PROFESJONALNE SPRZATANIE TA PRANIE TAPICERKI MEBLOWEJ BYDGOSZCZ
        </h1>
        <a className={s.link} href="#services">
          Nasze usługi
        </a>
        <ul className={s.list}>
          <li className={s.listItem}>- PROFESJONALNY SPRZET I SRODKI</li>
          <li className={s.listItem}>
            - ZADOWOLENIE KLIENTA NA PIERWSZYM MIEJSCU
          </li>
          <li className={s.listItem}>
            - ELASTYCZNOSC I DOSTOSOWANIE DO TWOJEGO HARMONOGRAMU
          </li>
        </ul>
      </div>
    </section>
  );
};

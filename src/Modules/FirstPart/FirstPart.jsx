import s from "./firstPart.module.scss";

export const FirstPart = () => {
  return (
    <section className={s.wrapper}>
      <p className={s.summary}>WYBIERZ USLUGE DOSTOSOWANA DO TWOICH POTRZEB</p>
      <h1 className={s.title}>Welcome to the world of</h1>
      <a className={s.link} href="#services">
        Nasze usługi
      </a>
      <ul>
        <li>- PROFESJONALNY SPRZET I SRODKI</li>
        <li>- ZADOWOLENIE KLIENTA NA PIERWSZYM MIEJSCU</li>
        <li>- ELASTYCZNOSC I DOSTOSOWANIE DO TWOJEGO HARMONOGRAMU</li>
      </ul>
    </section>
  );
};

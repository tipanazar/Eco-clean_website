import { SiteSection } from "../../shared/Components/SiteSection/SiteSection";
import { ServicesCard } from "../../shared/Components/ServicesCard/ServicesCard";

import { services5 } from "../../images";

import s from "./secondPart.module.scss";

export const SecondPart = () => {
  return (
    <SiteSection className={s.wrapper} title="Nasze usługi" id="services">
      <ul className={s.list}>
        <ServicesCard
          title="Czyszczenie tapicerki"
          price={30}
          iconId="services-1"
        >
          <p>
            Usunięcie niektórych plam oraz przywrócenie tapicerowanych mebli do
            ich poprzedniego wyglądu możliwe jest jedynie dzięki wysokiej
            jakości czyszczeniu tapicerki.
            <br />
            <br />
            Czy myjesz zęby dwa razy dziennie? Twoje meble, według naszych
            ekspertów, również muszą być czyszczone przynajmniej dwa razy w
            roku. Czyszczenie tapicerki to niezbędna higiena Twojej przestrzeni!{" "}
            <br />
            <br />
            Używamy wysokiej jakości, dobrze przetestowanych produktów do
            czyszczenia mebli przy użyciu profesjonalnej technologii.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Usługa</td>
                <td>Cena</td>
              </tr>
              <tr>
                <td>Krzesło.</td>
                <td>40-50 zł.</td>
              </tr>
              <tr>
                <td>Fotel.</td>
                <td>90 zł.</td>
              </tr>
              <tr>
                <td>Pufa.</td>
                <td>50 zł.</td>
              </tr>
              <tr>
                <td>Materac jednoosobowy.</td>
                <td>110 zł.</td>
              </tr>
              <tr>
                <td>Materac jednoosobowy dwustronnie.</td>
                <td>190 zł.</td>
              </tr>
              <tr>
                <td>Materac dwuosobowy.</td>
                <td>140 zł.</td>
              </tr>
              <tr>
                <td>Materac dwuosobowy dwustronnie.</td>
                <td>240 zł.</td>
              </tr>
              <tr>
                <td>Sofa dwuosobowa* (100-120 cm).</td>
                <td>130 zł.</td>
              </tr>
              <tr>
                <td>Sofa trzyosobowa*.</td>
                <td>160 zł.</td>
              </tr>
              <tr>
                <td>Narożnik*.</td>
                <td>od 190 zł.</td>
              </tr>
              <tr>
                <td>Zagłówek do łóżka.</td>
                <td>85 zł.</td>
              </tr>
              <tr>
                <td>Dywan.</td>
                <td>25-28 zł/m2.</td>
              </tr>
            </tbody>
          </table>
          <p>
            * Poduszki 10-20 zł.
            <br />
            ** Funkcja spania 30 zł.
            <br />
            *** Minimalne zamówienie 150 zł
          </p>
        </ServicesCard>
        <ServicesCard
          title="Sprzątanie standardowe"
          price={290}
          iconId="services-2"
        />
        <ServicesCard
          title="Sprzątanie generalne"
          price={420}
          iconId="services-3"
        />
        <ServicesCard
          title="Sprzątanie po budowie"
          price={11}
          iconId="services-4"
          m2={true}
        />
        <ServicesCard
          title="Sprzątanie standardowe"
          price={11}
          iconId={services5}
          m2={true}
          isPng={true}
        />
      </ul>
    </SiteSection>
  );
};

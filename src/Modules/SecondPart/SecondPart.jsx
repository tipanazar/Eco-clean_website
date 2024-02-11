import { SiteSection } from "../../shared/Components/SiteSection/SiteSection";
import { ServicesCard } from "./ServicesCard/ServicesCard";

import { services5 } from "../../images";

import s from "./secondPart.module.scss";

export const SecondPart = () => {
  return (
    <SiteSection className={s.wrapper} title="Nasze usługi" id="services">
      <ul className={s.list}>
        <ServicesCard
          title="Czyszczenie tapicerki"
          modalTitle="Czyszczenie tapicerki"
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
                <td>25-28 zł/m².</td>
              </tr>
            </tbody>
          </table>
          <p>
            * Poduszki 10-20 zł.
            <br />
            ** Funkcja spania 30 zł.
            <br />
            *** Minimalne zamówienie 150 zł.
          </p>
        </ServicesCard>
        <ServicesCard
          title="Sprzątanie standardowe"
          modalTitle="Sprzątanie generalne standartowe"
          price={290}
          iconId="services-2"
        >
          <p>
            Сo obejmuje sprzątanie generalne? We wszystkich pokojach mycie
            wszystkich powierzchni, frontów meblowych, blatów, drzwi i parapetów
            mycie grzejników mycie powierzchni szklanych, żyrandoli i lamp
            dezynfekcja wyłączników, klamek i gniazdek odkurzenie dywanów mycie
            i odkurzanie podłogi, wynoszenie śmieci.
            <br /> <br />
            W kuchni:
            <br />
            Mycie wszystkich szafek na zewnątrz czyszczenie kuchenki,
            zlewozmywaka czyszczenie sprzętu AGD z zewnątrz mycie stołu i
            krzeseł zmiana worka na śmieci.
            <br /> <br />
            W łazience i toalecie:
            <br />
            Mycie kabiny prysznicowej / wanny mycie płytki (ściany kabiny /
            wanny) składanie rzeczy i kosmetyków mycie umywalki, brodziku
            prysznicowego, bidetu i WC zmiana worka na śmieci.
            <br />
            <br />
            10-12 zl/m²
            <br />
            <br />
            *cena zależy od stopnia zabrudzenia.
          </p>
        </ServicesCard>
        <ServicesCard
          title="Sprzątanie generalne"
          modalTitle="Sprzątanie generalne MAXI"
          price={420}
          iconId="services-3"
        >
          <p>
            Сo obejmuje sprzątanie generalne?
            <br />
            <br />
            We wszystkich pokojach:
            <br />
            Mycie wszystkich powierzchni, frontów meblowych, blatów, drzwi i
            parapetów mycie grzejników mycie powierzchni szklanych, żyrandoli i
            lamp dezynfekcja wyłączników, klamek i gniazdek zmiana pościeli w
            sypialni odkurzenie dywanów mycie i odkurzanie podłogi wynoszenie
            śmieci.
            <br />
            <br />
            W kuchni:
            <br />
            Mycie wszystkich szafek od wewnątrz i na zewnątrz czyszczenie
            kuchenki, zlewozmywaka. czyszczenie sprzętu AGD od wewnątrz i na
            zewnątrz mycie stołu i krzeseł zmiana worka na śmieci.
            <br />
            <br />
            W łazience i toalecie:
            <br />
            Mycie kabiny prysznicowej / wanny mycie płytki (ściany kabiny /
            wanny) składanie rzeczy i kosmetyków mycie umywalki, brodziku
            prysznicowego, bidetu i WC zmiana worka na śmieci
            <br />
            <br />
            Mycie wszystkich okien
            <br />
            <br />
            15-17zl/m²
            <br />
            <br />
            *cena zależy od stopnia zabrudzenia.
          </p>
        </ServicesCard>
        <ServicesCard
          title="Sprzątanie po budowie"
          modalTitle="Sprzątanie po budowie"
          price={11}
          iconId="services-4"
          m2={true}
        >
          <p>Сo obejmuje sprzątanie po budowie?</p>
          <ul>
            <li>mycie wszystkich okien</li>
            <li>usuwanie kurzu ze ścian i sufitów</li>
            <li>mycie wszystkich powierzchni i frontów meblowych</li>
            <li>usuwanie lokalnych zanieczyszczeń budowlanych</li>
            <li>mycie drzwi i parapetów</li>
            <li>mycie listew przypodłogowych i grzejników</li>
            <li>mycie powierzchni szklanych, luster i lamp</li>
            <li>mycie kuchenki, zlewozmywaka</li>
            <li>mycie mikrofalówki, piekarnika, kratki wentylacyjnej</li>
            <li>mycie wanny, kabiny prysznicowej</li>
            <li>mycie umywalki, WC i bidetu</li>
            <li>odkurzanie dywanów i tapicerki</li>
            <li>mycie i odkurzanie podłóg</li>
          </ul>
          <p>17 zl /m².</p>
        </ServicesCard>
        <ServicesCard
          title={
            <span>
              Сzyszczenie <br /> okien
            </span>
          }
          modalTitle="Сzyszczenie okien"
          price={11}
          iconId={services5}
          m2={true}
          isPng={true}
        >
          <p>
            Usunięcie niektórych plam oraz przywrócenie tapicerowanych mebli do
            ich poprzedniego wyglądu możliwe jest jedynie dzięki wysokiej
            jakości czyszczeniu tapicerki.
            <br />
            <br />
            Czy myjesz zęby dwa razy dziennie? Twoje meble, według naszych
            ekspertów, również muszą być czyszczone przynajmniej dwa razy w
            roku. Czyszczenie tapicerki to niezbędna higiena Twojej przestrzeni!
            <br />
            <br />
            Używamy wysokiej jakości, dobrze przetestowanych produktów do
            czyszczenia mebli przy użyciu profesjonalnej technologii.
            <br />
            <br />
          </p>
          <table>
            <tbody>
              <tr>
                <td>Krzesło</td>
                <td>40-50 zł</td>
              </tr>
              <tr>
                <td>Fotel</td>
                <td>90 zł</td>
              </tr>
              <tr>
                <td>Pufa</td>
                <td>50 zł</td>
              </tr>
              <tr>
                <td>Materac jednoosobowy</td>
                <td>110 zł</td>
              </tr>
              <tr>
                <td>Materac jednoosobowy dwustronnie</td>
                <td>190 zł</td>
              </tr>
              <tr>
                <td>Materac dwuosobowy</td>
                <td>140 zł</td>
              </tr>
              <tr>
                <td>Materac dwuosobowy dwustronnie</td>
                <td>240 zł</td>
              </tr>
              <tr>
                <td>Sofa dwuosobowa* (100-120 cm)</td>
                <td>130 zł</td>
              </tr>
              <tr>
                <td>Sofa trzyosobowa*</td>
                <td>160 zł</td>
              </tr>
              <tr>
                <td>Narożnik*</td>
                <td>od 190 zł</td>
              </tr>
              <tr>
                <td>Zagłówek do łóżka</td>
                <td>85 zł</td>
              </tr>
              <tr>
                <td>Dywan</td>
                <td>25-28 zł/m²</td>
              </tr>
            </tbody>
          </table>
          <p>
            * Poduszki 10-20 zł.
            <br />
            ** Funkcja spania 30 zł.
            <br />
            *** Minimalne zamówienie 150 zł.
          </p>
        </ServicesCard>
      </ul>
    </SiteSection>
  );
};

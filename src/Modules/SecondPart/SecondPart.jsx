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
          price="od 50 zł"
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
          price="10-12 zł/m²"
          iconId="services-2"
        >
          <p>Сo obejmuje sprzątanie generalne?</p>
          <ul aria-label="We wszystkich pokojach:">
            <li>Mycie wszystkich powierzchni.</li>
            <li>Frontów meblowych.</li>
            <li>Blatów.</li>
            <li>Drzwi i parapetów.</li>
            <li>Mycie grzejników.</li>
            <li>Mycie powierzchni szklanych.</li>
            <li>Żyrandoli i lamp.</li>
            <li>Dezynfekcja wyłączników.</li>
            <li>Klamek i gniazdek.</li>
            <li>Odkurzenie dywanów.</li>
            <li>Mycie i odkurzanie podłogi.</li>
            <li>Wynoszenie śmieci.</li>
          </ul>
          <ul aria-label="W kuchni:">
            <li>Mycie wszystkich szafek na zewnątrz.</li>
            <li>Czyszczenie kuchenki.</li>
            <li>Złewozmywaka czyszczenie.</li>
            <li>Sprzętu AGD z zewnątrz.</li>
            <li>Mycie stołu i krzeseł.</li>
            <li>Zmiana worka na śmieci.</li>
          </ul>
          <ul aria-label="W łazience i toalecie:">
            <li>Mycie kabiny prysznicowej / wanny.</li>
            <li>Mycie płytki (ściany kabiny / wanny).</li>
            <li>Składanie rzeczy i kosmetyków.</li>
            <li>Mycie umywalki.</li>
            <li>Brodziku prysznicowego.</li>
            <li>Bidetu i WC.</li>
            <li>Zmiana worka na śmieci.</li>
          </ul>
          <p>10-12 zł/m².</p>
          <p>* Cena zależy od stopnia zabrudzenia.</p>
        </ServicesCard>
        <ServicesCard
          title="Sprzątanie generalne"
          modalTitle="Sprzątanie generalne MAXI"
          price="15-17 zł/m²"
          iconId="services-3"
        >
          <p>Сo obejmuje sprzątanie generalne?</p>
          <ul aria-label="We wszystkich pokojach:">
            <li>Mycie wszystkich powierzchni.</li>
            <li>Frontów meblowych.</li>
            <li>Blatów.</li>
            <li>Drzwi i parapetów.</li>
            <li>Mycie grzejników.</li>
            <li>Mycie powierzchni szklanych.</li>
            <li>Żyrandoli i lamp.</li>
            <li>Dezynfekcja wyłączników, klamek i gniazdek.</li>
            <li>Zmiana pościeli w sypialni.</li>
            <li>Odkurzenie dywanów.</li>
            <li>Mycie i odkurzanie podłogi.</li>
            <li>Wynoszenie śmieci.</li>
          </ul>
          <ul aria-label="W kuchni:">
            <li>Mycie wszystkich szafek od wewnątrz i na zewnątrz.</li>
            <li>Czyszczenie kuchenki.</li>
            <li>
              Złewozmywaka czyszczenie sprzętu AGD od wewnątrz i na zewnątrz.
            </li>
            <li>Mycie stołu i krzeseł.</li>
            <li>Zmiana worka na śmieci.</li>
          </ul>
          <ul aria-label="W łazience i toalecie:">
            <li>Mycie kabiny prysznicowej / wanny.</li>
            <li>Mycie płytki (ściany kabiny / wanny).</li>
            <li>Składanie rzeczy i kosmetyków.</li>
            <li>Mycie umywalki.</li>
            <li>Brodziku prysznicowego.</li>
            <li>Bidetu i WC.</li>
            <li>Zmiana worka na śmieci.</li>
          </ul>
          <p>+ Mycie wszystkich okien.</p>
          <p>15-17 zł/m².</p>
          <p>* Cena zależy od stopnia zabrudzenia.</p>
        </ServicesCard>
        <ServicesCard
          title="Sprzątanie po budowie"
          modalTitle="Sprzątanie po budowie"
          price="17 zł/m²"
          iconId="services-4"
          m2={true}
        >
          <p>Сo obejmuje sprzątanie po budowie?</p>
          <ul>
            <li>Mycie wszystkich okien.</li>
            <li>Usuwanie kurzu ze ścian i sufitów.</li>
            <li>Mycie wszystkich powierzchni i frontów meblowych.</li>
            <li>Usuwanie lokalnych zanieczyszczeń budowlanych.</li>
            <li>Mycie drzwi i parapetów.</li>
            <li>Mycie listew przypodłogowych i grzejników.</li>
            <li>Mycie powierzchni szklanych, luster i lamp.</li>
            <li>Mycie kuchenki, złewozmywaka.</li>
            <li>Mycie mikrofalówki, piekarnika, kratki wentylacyjnej.</li>
            <li>Mycie wanny, kabiny prysznicowej.</li>
            <li>Mycie umywalki, WC i bidetu.</li>
            <li>Odkurzanie dywanów i tapicerki.</li>
            <li>Mycie i odkurzanie podłóg.</li>
          </ul>
          <p>17 zł /m².</p>
        </ServicesCard>
        <ServicesCard
          title={
            <span>
              Сzyszczenie
              <br />
              okien
            </span>
          }
          modalTitle="Сzyszczenie okien"
          price="od 15 zł/m²"
          iconId={services5}
          m2={true}
          isPng={true}
        >
          <table>
            <tbody>
              <tr>
                <td>Sezonowe mycie okien</td>
                <td>15 zł/m²</td>
              </tr>
              <tr>
                <td>Mycie okien po remoncie</td>
                <td>20-25 zł/m²</td>
              </tr>
              <tr>
                <td>Mycie rolet zewnętrznych antywłamaniowych</td>
                <td>do uzgodnienia</td>
              </tr>
              <tr>
                <td>Mycie reklam itp</td>
                <td>do uzgodnienia</td>
              </tr>
            </tbody>
          </table>
          <p>* Minimalny koszt usługi wynosi 200 zł.</p>
        </ServicesCard>
      </ul>
    </SiteSection>
  );
};

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
        />
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

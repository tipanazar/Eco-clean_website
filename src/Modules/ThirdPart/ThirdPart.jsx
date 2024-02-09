import { ExamplesCard } from "../../shared/Components/ExamplesCard/ExamplesCard";
import { SiteSection } from "../../shared/Components/SiteSection/SiteSection";

import {
  examples1,
  examples2,
  examples3,
  examples4,
  examples5,
  examples6,
} from "../../images";

import s from "./thirdPart.module.scss";

export const ThirdPart = () => {
  return (
    <SiteSection title="Efekty naszej pracy" id="examples">
      <ul className={s.list}>
        <ExamplesCard isBefore={true} imgSrc={examples1} />
        <ExamplesCard isBefore={false} imgSrc={examples2} />
        <ExamplesCard isBefore={true} imgSrc={examples3} />
        <ExamplesCard isBefore={false} imgSrc={examples4} />
        <ExamplesCard isBefore={true} imgSrc={examples5} />
        <ExamplesCard isBefore={false} imgSrc={examples6} />
      </ul>
    </SiteSection>
  );
};

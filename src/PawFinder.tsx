import { CaseStudyTitle } from "./reusable/Titles/CaseStudyTitle";
import { TextColorEnum } from "./reusable/Titles/types";

export const PawFinder = () => (
  <>
    <CaseStudyTitle
      title='Paw Finder'
      subtitle="Pet adoption, now easier than ever"
      textColor={TextColorEnum.dark}
    />
  </>
);

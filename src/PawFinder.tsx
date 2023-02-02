import { CaseStudyTitle } from "./reusable/Titles/CaseStudyTitle";
import { WhoWhatWhen } from "./reusable/WhoWhatWhen/WhoWhatWhen";
import { DisplayCategories } from "./reusable/Categories/DisplayCategories";
import { TextColorEnum } from "./reusable/Titles/types";
import { ThemesEnum } from "./reusable/Categories/types";
import { pawFinderData } from "./data/PawFinder";
import "./PawFinder.css";
import { TypeTwoText } from "./reusable/Text/TypeTwoText";
import { ColoredSection } from "./reusable/ColoredSection";
import { MarketResearchPF } from "./PawFinder/MarketResearchPF";

export const PawFinder = () => {
  const data = pawFinderData;
  const {whatWhereWhy, categories, caseStudyTitle, caseStudySubtitle} = data.caseStudyStart;

  return (
  <>
    <div className="banner_TEST">Banner</div>
    <div className="title_categories_case_study_and_www_container">
      <CaseStudyTitle
          title={caseStudyTitle}
          subtitle={caseStudySubtitle}
          textColor={TextColorEnum.dark}
      />
      <div className="categories_www_and_case_study_container">
        <div className="paw_finder_categories_container">
          <DisplayCategories
            categoryList={categories}
            theme={ThemesEnum.pf}
          />
      </div>
      <div className="paw_finder_line"></div>
      <div className="www_and_case_study_container">
        <WhoWhatWhen theme={TextColorEnum.dark} data={whatWhereWhy}/>
        <section>
          <TypeTwoText
            title={data.whyThisProduct.title}
            desc={data.whyThisProduct.desc}
            textColor={TextColorEnum.dark}
            image={data.whyThisProduct.image}
            atl="green cartoon with binoculars"
          />
        </section>
        <section>
          <ColoredSection theme={ThemesEnum.pf}>
            {/* must have position relative */}
            <MarketResearchPF
              image={data.marketResearch.image}
              textData={data.marketResearch.desc}
              title={data.marketResearch.title}
              textColor={TextColorEnum.dark}

            />
          </ColoredSection>
        </section>
        <section>
          <h1>TEST</h1>
        </section>
      </div>
    </div>
  </div>
</>)
};

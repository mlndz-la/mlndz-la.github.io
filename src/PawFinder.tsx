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
import { CompetitiveAnalysisPF } from "./PawFinder/CompetitiveAnalysisPF"

export const PawFinder = () => {
  const data = pawFinderData;
  const themeColor = ThemesEnum.pf;
  const themeText = TextColorEnum.dark;
  const {whatWhereWhy, categories, caseStudyTitle, caseStudySubtitle} = data.caseStudyStart;

  return (
  <>
    <div className="banner_TEST">Banner</div>
    <div className="title_categories_case_study_and_www_container">
      <CaseStudyTitle
          title={caseStudyTitle}
          subtitle={caseStudySubtitle}
          textColor={themeText}
      />
      <div className="categories_www_and_case_study_container">
        <div className="paw_finder_categories_container">
          <DisplayCategories
            categoryList={categories}
            theme={themeColor}
          />
      </div>
      <div className="paw_finder_line"></div>
      <div className="www_and_case_study_container">
        <WhoWhatWhen theme={themeText} data={whatWhereWhy}/>
        <section>
          <TypeTwoText
            title={data.whyThisProduct.title}
            desc={data.whyThisProduct.desc}
            textColor={themeText}
            image={data.whyThisProduct.image}
            atl="green cartoon with binoculars"
          />
        </section>
        <section>
          <ColoredSection theme={themeColor}>
            {/* must have position relative */}
            <MarketResearchPF
              image={data.marketResearch.image}
              textData={data.marketResearch.desc}
              title={data.marketResearch.title}
              textColor={themeText}
            />
          </ColoredSection>
        </section>
        <section>
          <CompetitiveAnalysisPF
            textColor={themeText}
            mainData={data.competitiveAnalysis.main}
            orgsData={data.competitiveAnalysis.orgsData}
            badGoodData={data.competitiveAnalysis.badGood}
          />
        </section>
        </div>
      </div>
    </div>
  </>
)};


// const test = () => {

// return (
//   <>
//     <div className="banner_TEST">Banner</div>
//       <div className="title_categories_case_study_and_www_container">
//         <div className="categories_www_and_case_study_container">
//           <div className="CASE_STUDY_categories_container">
            
//           </div>
//           <div className="CASE_STUDY_line"></div>
//           <div className="www_and_case_study_container">
//             <section>

//             </section>
//             <section>

//             </section>
//             <section>

//             </section>
//         </div>
//       </div>
//     </div>
//   </>
// )}
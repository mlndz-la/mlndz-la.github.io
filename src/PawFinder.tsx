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
import { NotableComments } from "./PawFinder/NotableComments";
import { ResearchSoFar } from "./PawFinder/ResearchSoFar";
import { Personas } from "./PawFinder/Personas";
import { Banner } from "./reusable/Banner";

export const PawFinder = () => {
  const data = pawFinderData;
  const themeColor = ThemesEnum.pf;
  const themeText = TextColorEnum.dark;

  return (
    <div>
      <Banner
        imgSrc={pawFinderData.mockUpImageTopDesktop}
        endpoint="pawfinder"
      />
      <div className="title_categories_case_study_and_www_container">
        <CaseStudyTitle
          title={data.caseStudyStart.caseStudyTitle}
          subtitle={data.caseStudyStart.caseStudySubtitle}
          textColor={themeText}
        />
        <div className="categories_www_and_case_study_container">
          <div className="paw_finder_categories_container">
            <DisplayCategories
              categoryList={data.caseStudyStart.categories}
              theme={themeColor}
            />
          </div>
          <div className="paw_finder_line"></div>
          <div className="www_and_case_study_container">
            <WhoWhatWhen
              theme={themeText}
              data={data.caseStudyStart.whatWhereWhy}
            />
            <TypeTwoText
              title={data.whyThisProduct.title}
              desc={data.whyThisProduct.desc}
              textColor={themeText}
              image={data.whyThisProduct.image}
              atl="green cartoon with binoculars"
            />
            <ColoredSection theme={themeColor}>
              {/* must have position relative */}
              <MarketResearchPF
                image={data.marketResearch.image}
                textData={data.marketResearch.desc}
                title={data.marketResearch.title}
                textColor={themeText}
                elementId={data.marketResearch.elementId}
              />
            </ColoredSection>
            <CompetitiveAnalysisPF
              textColor={themeText}
              mainData={data.competitiveAnalysis.main}
              orgsData={data.competitiveAnalysis.orgsData}
              badGoodData={data.competitiveAnalysis.badGood}
              elementId={data.competitiveAnalysis.elementId}
            />
            <ColoredSection theme={themeColor}>
              <NotableComments
                data={data.notableComments}
                theme={"comment_light"}
              />
            </ColoredSection>
            <ResearchSoFar
              data={data.researchSoFar}
              textColor={themeText}
            />
            <Personas
              title={data.personas.title}
              desc={data.personas.desc}
              personaOne={data.personas.topImage}
              personaTwo={data.personas.bottomImage}
              textColor={themeText}
              elementId={data.personas.elementId}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

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
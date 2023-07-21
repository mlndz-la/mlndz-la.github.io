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
import { TimeToStartDesign } from "./PawFinder/TimeToStartDesign";
import { FlowDiagram } from "./PawFinder/FlowDiagram";
import { PaperWireframe } from "./PawFinder/PaperWireframe";
import { Testing } from "./PawFinder/Testing";
import { LowFidelity } from "./PawFinder/LowFidelity";
import { HighFidelityPF } from "./PawFinder/HighFidelityPF";
import { TwentyNineDesigns } from "./PawFinder/TwentyNineDesigns";
import { HighFidPrototypePF } from "./PawFinder/HighFidPrototypePF";
import { UsabilityStudyPF } from "./PawFinder/UsabilityStudyPF";
import { FutureConsiderationsPF } from "./PawFinder/FutureConsiderationsPF";
import { AccessibilityCheckPF } from "./PawFinder/AccessibilityCheckPF";
import { ProductSummaryPF } from "./PawFinder/ProductSummaryPF";
import { MockUpBottomImagePF } from "./PawFinder/MockUpBottomImagePF";

export const PawFinder = () => {
  const {
    mockUpImageTopDesktop,
    caseStudyStart,
    whyThisProduct,
    marketResearch,
    competitiveAnalysis,
    notableComments,
    researchSoFar,
    personas,
    timeToStartDesign,
    flowDiagram,
    paperWireframe,
    testing,
    lowFidelityUIDesign,
    highFidelityUIDesign,
    highFidelityDesign,
    highFidelityPrototype,
    usability,
    studyResults,
    futureConsideration,
    accessibilityCheck,
    productOverview,
    mockUpImageBottom,
  } = pawFinderData;
  const themeColor = ThemesEnum.pf;
  const themeText = TextColorEnum.dark;

  return (
    <div>
      <Banner
        imgSrc={mockUpImageTopDesktop}
        endpoint="pawfinder"
      />
      <div className="title_categories_case_study_and_www_container">
        <CaseStudyTitle
          title={caseStudyStart.caseStudyTitle}
          subtitle={caseStudyStart.caseStudySubtitle}
          textColor={themeText}
        />
        <div className="categories_www_and_case_study_container">
          <div className="paw_finder_categories_container">
            <DisplayCategories
              categoryList={caseStudyStart.categories}
              theme={themeColor}
            />
          </div>
          <div className="paw_finder_line"></div>
          <div className="www_and_case_study_container">
            <WhoWhatWhen
              theme={themeText}
              data={caseStudyStart.whatWhereWhy}
            />
            <TypeTwoText
              title={whyThisProduct.title}
              desc={whyThisProduct.desc}
              textColor={themeText}
              image={whyThisProduct.image}
              atl="green cartoon with binoculars"
            />
            <ColoredSection theme={themeColor}>
              {/* must have position relative */}
              <MarketResearchPF
                image={marketResearch.image}
                textData={marketResearch.desc}
                title={marketResearch.title}
                textColor={themeText}
                elementId={marketResearch.elementId}
              />
            </ColoredSection>
            <CompetitiveAnalysisPF
              textColor={themeText}
              mainData={competitiveAnalysis.main}
              orgsData={competitiveAnalysis.orgsData}
              badGoodData={competitiveAnalysis.badGood}
              elementId={competitiveAnalysis.elementId}
            />
            <ColoredSection theme={themeColor}>
              <NotableComments
                data={notableComments}
                theme={"comment_light"}
              />
            </ColoredSection>
            <ResearchSoFar
              data={researchSoFar}
              textColor={themeText}
            />
            <Personas
              title={personas.title}
              desc={personas.desc}
              personaOne={personas.topImage}
              personaTwo={personas.bottomImage}
              textColor={themeText}
              elementId={personas.elementId}
            />
            <TimeToStartDesign
              title={timeToStartDesign.title}
              desc={timeToStartDesign.desc}
              image={timeToStartDesign.image}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <FlowDiagram
                title={flowDiagram.title}
                desc={flowDiagram.desc}
                imageTitle={flowDiagram.imageTitle}
                image={flowDiagram.image}
                elementId={flowDiagram.elementId}
                textColor={themeText}
              />
            </ColoredSection>
            <PaperWireframe
              title={paperWireframe.title}
              desc={paperWireframe.desc}
              image={paperWireframe.image}
              imageDesc={paperWireframe.imageDesc}
              elementId={paperWireframe.elementId}
              textColor={themeText}
            />
            <Testing
              title={testing.title}
              desc={testing.desc}
              image={testing.image}
              textColor={themeText}
            />
            <LowFidelity
              title={lowFidelityUIDesign.title}
              desc={lowFidelityUIDesign.desc}
              image={lowFidelityUIDesign.image}
              elementId={lowFidelityUIDesign.elementId}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <HighFidelityPF
                data={highFidelityUIDesign}
                textColor={themeText}
                elementId={highFidelityUIDesign.elementId}
              />
            </ColoredSection>
            <TwentyNineDesigns
              data={highFidelityDesign}
              textColor={themeText}
            />
            <HighFidPrototypePF
              data={highFidelityPrototype}
              textColor={themeText}
            />
            <UsabilityStudyPF
              data={{usability, studyResults}}
              textColor={themeText}
            />
            <FutureConsiderationsPF
              data={futureConsideration}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <AccessibilityCheckPF
                data={accessibilityCheck}
                textColor={themeText}
              />
            </ColoredSection>
            <ProductSummaryPF
              data={productOverview}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <MockUpBottomImagePF
                image={mockUpImageBottom}
              />
            </ColoredSection>
            {/* Recommendations are added here */}
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
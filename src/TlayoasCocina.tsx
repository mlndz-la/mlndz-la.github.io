import { Banner } from "./reusable/Banner";
import { tlayoaCosinaData } from "./data/TlayoaCosina";
import { ThemesEnum } from "./reusable/Categories/types";
import { TextColorEnum } from "./reusable/Titles/types";
import { CaseStudyTitle } from "./reusable/Titles/CaseStudyTitle";
import { DisplayCategories } from "./reusable/Categories/DisplayCategories";
import { ColoredLine } from "./reusable/ColoredLine";
import { WhoWhatWhen } from "./reusable/WhoWhatWhen/WhoWhatWhen";
import { WhyThisProductTC } from "./TlayoasCosina/WhyThisProductTC";
import { MarketResearchTC } from "./TlayoasCosina/MarketResearchTC";
import { ColoredSection } from "./reusable/ColoredSection";
import { CompetitiveAnalysisTC } from "./TlayoasCosina/CompetitiveAnalysisTC";
import { UserSurveyTC } from "./TlayoasCosina/UserSurveyTC";
import { InitialResearchTC } from "./TlayoasCosina/InitialResearchTC";
import { PersonaTC } from "./TlayoasCosina/PersonaTC";
import { StartDesignTC } from "./TlayoasCosina/StartDesignTC";
import { FlowDiagramTC } from "./TlayoasCosina/FlowDiagramTC";
import { LowFidUITC } from "./TlayoasCosina/LowFidUITC";
import { HighFidUITC } from "./TlayoasCosina/HighFidUITC";
import { HighFidDesignTC } from "./TlayoasCosina/HighFidDesignTC";
import { PrototypeTC } from "./TlayoasCosina/PrototypeTC";
import { UsabilityTC } from "./TlayoasCosina/UsabilityTC";
import { StudyResultsTC } from "./TlayoasCosina/StudyResultsTC";
import { FutureConsiderationTC } from "./TlayoasCosina/FutureConsiderationTC";
import { AccessibilityTC } from "./TlayoasCosina/AccessibilityTC";
import { ProductSummaryTC } from "./TlayoasCosina/ProductSummaryTC";
import { FinalMockupTC } from "./TlayoasCosina/FinalMockupTC";
import { PagesFooter } from "./reusable/PagesFooter/PagesFooter";
import { useEffect } from "react";

export const TlayoasCocina = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const themeColor = ThemesEnum.tc;
  const themeText = TextColorEnum.dark;
  const themeName = ThemesEnum.tc;
  const lastCSS = "last_ele_bottom_margin_zero";
  const {
    mockUpImageTopDesktop,
    mockUpImageTopMobile,
    caseStudyStart,
    whyThisProduct,
    marketResearch,
    competitiveAnalysis,
    userSurvey,
    researchSoFar,
    personas,
    timeToStartDesign,
    flowDiagram,
    lowFidelityUIDesign,
    highFidelityUIDesign,
    highFidelityDesign,
    highFidelityPrototype,
    usabilityStudy,
    studyResults,
    futureConsiderations,
    accessibilityCheck,
    productOverview,
    mockUpImageBottom,
  } = tlayoaCosinaData;

  return (
    <div>
      <Banner imgSrc={mockUpImageTopDesktop} endpoint={"tlayoas-cocina"} />
      <div className="title_categories_case_study_and_www_container">
        <CaseStudyTitle
          title={caseStudyStart.caseStudyTitle}
          subtitle={caseStudyStart.caseStudySubtitle}
          textColor={themeText}
        />
        <div className="categories_www_and_case_study_container">
          <div className="categories_container">
            <DisplayCategories
              categoryList={caseStudyStart.categories}
              theme={themeColor}
            />
          </div>
          <ColoredLine themeName={themeName} />
          <div className="www_and_case_study_container">
            <WhoWhatWhen
              theme={themeText}
              data={caseStudyStart.whatWhereWhy}
              themeName={themeName}
            />
            <WhyThisProductTC
              data={whyThisProduct}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <MarketResearchTC
                data={marketResearch}
                textColor={themeText}
              />
            </ColoredSection>
            <CompetitiveAnalysisTC
              data={competitiveAnalysis}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <UserSurveyTC
                data={userSurvey}
                textColor={themeText}
              />
            </ColoredSection>
            <InitialResearchTC
              data={researchSoFar}
              textColor={themeText}
            />
            <PersonaTC
              data={personas}
              textColor={themeText}
            />
            <StartDesignTC
              data={timeToStartDesign}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <FlowDiagramTC
                data={flowDiagram}
                textColor={themeText}
              />
            </ColoredSection>
            <LowFidUITC
              data={lowFidelityUIDesign}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <HighFidUITC
                data={highFidelityUIDesign}
                textColor={themeText}
              />
            </ColoredSection>
            <HighFidDesignTC
              data={highFidelityDesign}
              textColor={themeText}
            />
            <PrototypeTC
              data={highFidelityPrototype}
              textColor={themeText}
            />
            <UsabilityTC
              data={usabilityStudy}
              textColor={themeText}
            />
            <StudyResultsTC
              data={studyResults}
              textColor={themeText}
            />
            <FutureConsiderationTC
              data={futureConsiderations}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <AccessibilityTC
                data={accessibilityCheck}
                textColor={themeText}
              />
            </ColoredSection>
            <ProductSummaryTC
              data={productOverview}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor} isLast={lastCSS}>
              <FinalMockupTC
                data={mockUpImageBottom}
              />
            </ColoredSection>
          </div>
        </div>
      </div>
      <PagesFooter />
    </div>
  );
};
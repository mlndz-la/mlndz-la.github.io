import { TextColorEnum } from "./reusable/Titles/types";
import { ThemesEnum } from "./reusable/Categories/types";
import { cosmicKitchenData } from "./data/CosmicKitchen";
import "./CosmicKitchen.css";
import { Banner } from "./reusable/Banner";
import { CaseStudyTitle } from "./reusable/Titles/CaseStudyTitle";
import { DisplayCategories } from "./reusable/Categories/DisplayCategories";
import { ColoredLine } from "./reusable/ColoredLine";
import { WhoWhatWhen } from "./reusable/WhoWhatWhen/WhoWhatWhen";
import { WhyThisProduct } from "./CosmicKitchen/WhyThisProduct";
import { ResearchAndAnalysisCK } from "./CosmicKitchen/ResearchAndAnalysisCK";
import { ColoredSection } from "./reusable/ColoredSection";
import { GlobalMarketResearchCK } from "./CosmicKitchen/GlobalMarketResearchCK";
import { PainPointsCK } from "./CosmicKitchen/PainPointsCK";
import { SolutionsCK } from "./CosmicKitchen/SolutionsCK";
import { ResearchSoFarCK } from "./CosmicKitchen/ResearchSoFarCK";
import { PersonaCK } from "./CosmicKitchen/PersonaCK";
import { TimeToStartDesignCK } from "./CosmicKitchen/TimeToStartDesignCK";
import { InformationArchitectureCK } from "./CosmicKitchen/InformationArchitectureCK";
import { LowFidCK } from "./CosmicKitchen/LowFidCK";
import { HighFidCK } from "./CosmicKitchen/HighFidCK";
import { HighFidelityDesignCK } from "./CosmicKitchen/HighFidelityDesignCK";
import { HighFidPrototypeCK } from "./CosmicKitchen/HighFidPrototypeCK";
import { UsabilityCK } from "./CosmicKitchen/UsabilityCK";
import { StudyResultsCK } from "./CosmicKitchen/StudyResultsCK";
import { FutureConsiderationCK } from "./CosmicKitchen/FutureConsiderationCK";
import { AccessibilityCheckCK } from "./CosmicKitchen/AccessibilityCheckCK";
import { ProductOverviewCK } from "./CosmicKitchen/ProductOverviewCK";
import { BottomImageCK } from "./CosmicKitchen/BottomImageCK";
import { PagesFooter } from "./reusable/PagesFooter/PagesFooter";

export const CosmicKitchen = () => {
  const themeColor = ThemesEnum.ck;
  const themeText = TextColorEnum.light;
  const themeName = ThemesEnum.ck;
  const lastCSS = "last_ele_bottom_margin_zero";
  const {
    caseStudyStart,
    whyThisProduct,
    researchAndAnalysis,
    globalMarketResearch,
    targetAudience,
    users,
    painPoints,
    solutions,
    researchSoFar,
    personas,
    timeToStartDesign,
    informationArchitecture,
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
  } = cosmicKitchenData;

  return (
    <div>
      <Banner endpoint={"cosmic-kitchen"} />
      <div className="title_categories_case_study_and_www_container ck_background_color">
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
          <ColoredLine themeName={themeName}/>
          <div className="www_and_case_study_container">
            <WhoWhatWhen
              theme={themeText}
              data={caseStudyStart.whatWhereWhy}
              themeName={themeName}
            />
            <WhyThisProduct
              data={whyThisProduct}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <ResearchAndAnalysisCK
                data={researchAndAnalysis}
                textColor={themeText}
              />
            </ColoredSection>
            <GlobalMarketResearchCK
              globalMarketResearchData={globalMarketResearch}
              targetAudienceData={targetAudience}
              usersData={users}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <PainPointsCK
                data={painPoints}
                textColor={themeText}
              />
              <SolutionsCK 
                data={solutions}
                textColor={themeText}
              />
            </ColoredSection>
            <ResearchSoFarCK
              data={researchSoFar}
              textColor={themeText}
            />
            <PersonaCK
              data={personas}
              textColor={themeText}
            />
            <TimeToStartDesignCK
              data={timeToStartDesign}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <InformationArchitectureCK
                data={informationArchitecture}
                textColor ={themeText}
              />
            </ColoredSection>
            <LowFidCK
              data={lowFidelityUIDesign}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <HighFidCK
                data={highFidelityUIDesign}
                textColor={themeText}
              />
            </ColoredSection>
            <HighFidelityDesignCK
              data={highFidelityDesign}
              textColor={themeText}
            />
            <HighFidPrototypeCK
              data={highFidelityPrototype}
              textColor={themeText}
            />
            <UsabilityCK
              data={usability}
              textColor={themeText}
            />
            <StudyResultsCK
              data={studyResults}
              textColor={themeText}
            />
            <FutureConsiderationCK
              data={futureConsideration}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor}>
              <AccessibilityCheckCK
                data={accessibilityCheck}
                textColor={themeText}
              />
            </ColoredSection>
            <ProductOverviewCK
              data={productOverview}
              textColor={themeText}
            />
            <ColoredSection theme={themeColor} isLast={lastCSS}>
              <BottomImageCK
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

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

export const CosmicKitchen = () => {
  const themeColor = ThemesEnum.ck;
  const themeText = TextColorEnum.light;
  const themeName = ThemesEnum.ck;
  const {
    caseStudyStart,
    whyThisProduct,
    researchAndAnalysis,
    globalMarketResearch,
    targetAudience,
    users,
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
          </div>
        </div>
      </div>
    </div>
  );
};

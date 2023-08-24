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

export const TlayoasCocina = () => {
  const themeColor = ThemesEnum.tc;
  const themeText = TextColorEnum.dark;
  const themeName = ThemesEnum.tc;
  const {
    mockUpImageTopDesktop,
    mockUpImageTopMobile,
    caseStudyStart,
    whyThisProduct,
    marketResearch,
    competitiveAnalysis,
    userSurvey,
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
          </div>
        </div>
      </div>
    </div>
  );
};

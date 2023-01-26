import { CaseStudyTitle } from "./reusable/Titles/CaseStudyTitle";
import { DisplayCategories } from "./reusable/Categories/DisplayCategories";
import { TextColorEnum } from "./reusable/Titles/types";
import { ThemesEnum } from "./reusable/Categories/types";
import "./PawFinder.css";

// * TEST DATA
const list = ["Market Research", "Competitive Analysis", "Personas", "Flow Diagram", "Paper Wireframes", "Low-fidelity UI", "High-fidelity UI", "Prototype", "Usability Study", "Accessibility Evaluation",]

export const PawFinder = () => (
  <>
    <div className="banner_TEST">Banner</div>
    <div className="title_categories_case_study_and_www_container">
        <CaseStudyTitle
            title='Paw Finder'
            subtitle="Pet adoption, now easier than ever"
            textColor={TextColorEnum.dark}
        />
        <div className="categories_www_and_case_study_container">
          <div className="paw_finder_categories_container">
            <DisplayCategories
              categoryList={list}
              theme={ThemesEnum.pf}
            />
          </div>
          <div className="paw_finder_line"></div>
          <div className="www_and_case_study_container">
            <div className="www_TEST">WWW</div>
            <div>TheRestOfTheCaseStudy</div>
        </div>
      </div>
    </div>
  </>
);

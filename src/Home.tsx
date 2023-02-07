import { CaseStudyPreview, CaseStudyUrlEnum } from "./components/CaseStudyPreview/";
import { caseStudiesData } from './data/CaseStudies';
import './Home.css';
import { GetInTouch } from "./reusable/GetInTouch/";



export const Home = () => {
  const { caseStudies } = caseStudiesData;

  const getCaseStudyUrl = (caseStudyTitle: string): CaseStudyUrlEnum => {
    switch (caseStudyTitle) {
      case "Tlayoa's Cosina": {
        return CaseStudyUrlEnum.tlayoasCocina;
      }
      case "Paw Finder": {
        return CaseStudyUrlEnum.pawFinder;
      }
      case "Cosmic Kitchen": {
        return CaseStudyUrlEnum.cosmicKitchen;
      }
    }
  }

  return (
    <div className="home_page">
      <h2 className="home_page__title">My Work</h2>
      <div className="home_page__case_study_container">
        {
          caseStudies.map(({ imagePreview, title, description }) => {
            return (
              <CaseStudyPreview imagePreview={imagePreview} title={title} subtitle={description} caseStudyUrl={getCaseStudyUrl(title)} />
            );
          })
        }
      </div>
      <GetInTouch />
    </div>
  );

}
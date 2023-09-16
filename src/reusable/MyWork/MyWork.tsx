import { CaseStudyPreview, CaseStudyUrlEnum } from "../../components/CaseStudyPreview";
import { MyWorkProps } from './types';
import './MyWork.css';

export const MyWork = ({ caseStudies }: MyWorkProps) => {
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
    <div className="my_work__container">
      <h2 className="my_work__title">My Work</h2>
      <div className="case_study__container">
        {
          caseStudies.map(({ imagePreview, title, description }, key) => {
            return (
              <CaseStudyPreview imagePreview={imagePreview} title={title} subtitle={description} caseStudyUrl={getCaseStudyUrl(title)} key={key}/>
            );
          })
        }
      </div>
    </div>
  );
};

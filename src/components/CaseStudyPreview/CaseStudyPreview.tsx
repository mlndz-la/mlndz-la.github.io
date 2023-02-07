import { useNavigate } from "react-router-dom";
import { ICaseStudyPreviewProps } from "./types";
import './CaseStudyPreview.css';

export const CaseStudyPreview = ({ imagePreview, title, subtitle, caseStudyUrl }: ICaseStudyPreviewProps) => {
  const navigate = useNavigate();

  const goToCaseStudy = () => navigate(caseStudyUrl);

  return (
    <div className="case_study_preview__container" >
      <img className="case_study_preview__img" src={imagePreview} onClick={goToCaseStudy} />
      <h3 className="case_study_preview__title" >{title}</h3>
      <p className="case_study_preview__subtitle" >{subtitle}</p>
      <h4 className="case_study_preview__link" onClick={goToCaseStudy}>Read Case Study</h4>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { ICaseStudyPreviewProps } from "./types";
import './CaseStudyPreview.css';

export const CaseStudyPreview = ({ imagePreview, title, subtitle, caseStudyUrl }: ICaseStudyPreviewProps) => {
  const navigate = useNavigate();

  const goToCaseStudy = () => navigate(caseStudyUrl);

  return (
    <div className="case_study_preview_container" >
      <img className="case_study_preview_container__img" src={imagePreview} />
      <h3 className="case_study_preview_container__title" >{title}</h3>
      <p className="case_study_preview_container__subtitle" >{subtitle}</p>
      <h4 className="case_study_preview_container__link" onClick={goToCaseStudy}>Read Case Study</h4>
    </div>
  );
}

import { ICaseStudyTitleProps } from "./types"
import "./CaseStudyTitle.css";

export const CaseStudyTitle = ({title, subtitle, textColor}: ICaseStudyTitleProps) => {
  return (
    <div className="case_study_title_container">
      <h1 className={`case_study_title ${textColor}`}>{title}</h1>
      <h2 className={`case_study_subtitle ${textColor}65`}>{subtitle}</h2>
    </div>
  )
}
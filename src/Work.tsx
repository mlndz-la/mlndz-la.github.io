import { caseStudiesData } from "./data/CaseStudies";
import { MyWork } from "./reusable/MyWork";
import './Work.css';

export const Work = () => {
  const { caseStudies } = caseStudiesData;

  return (
    <div className="work_page__container">
      <MyWork caseStudies={caseStudies} />
    </div>
  )
}

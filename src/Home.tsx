import { caseStudiesData } from './data/CaseStudies';
import { GetInTouch } from "./reusable/GetInTouch";
import { MyWork } from './reusable/MyWork';
import './Home.css';



export const Home = () => {
  const { caseStudies } = caseStudiesData;

  return (
    <div className="home_page">
      <MyWork caseStudies={caseStudies} />
      <GetInTouch />
    </div>
  );

}
import { useMemo, useState } from 'react';
import { caseStudiesData } from './data/CaseStudies';
import { GetInTouch } from "./reusable/GetInTouch";
import { MyWork } from './reusable/MyWork';
import './Home.css';



export const Home = () => {
  const { caseStudies } = caseStudiesData;

  const [visibleCaseStudies, setVisibleCaseStudies] = useState(caseStudies.slice(0, 4));

  const showViewMore = useMemo(() => !(visibleCaseStudies.length === caseStudies.length), [visibleCaseStudies]);


  const viewMore = () => {
    const currentViewIndex = visibleCaseStudies.length + 1
    const newViewIndex = currentViewIndex + 4;

    setVisibleCaseStudies(caseStudies.slice(0, newViewIndex));
  }

  return (
    <div className="home_page__container">
      <MyWork caseStudies={visibleCaseStudies} />
      {showViewMore && <h3 className='home_page__button' onClick={viewMore}>View More</h3>}
      <GetInTouch />
    </div>
  );

}
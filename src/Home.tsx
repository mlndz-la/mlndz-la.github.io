import { useMemo, useState } from 'react';
import { caseStudiesData } from './data/CaseStudies';
import { GetInTouch } from "./reusable/GetInTouch";
import { MyWork } from './reusable/MyWork';
import './Home.css';



export const Home = () => {
  const { caseStudies } = caseStudiesData;

  const [displayedCaseStudies, setDisplayedCaseStudies] = useState(caseStudies.slice(0, 4));

  const showViewMore = useMemo(() => !(displayedCaseStudies.length === caseStudies.length), [displayedCaseStudies]);


  const viewMore = () => {
    const currentViewIndex = displayedCaseStudies.length + 1
    const newViewIndex = currentViewIndex + 4;

    setDisplayedCaseStudies(caseStudies.slice(0, newViewIndex));
  }

  return (
    <div className="home_page__container">
      <MyWork caseStudies={displayedCaseStudies} />
      {showViewMore && <h3 className='home_page__button' onClick={viewMore}>View More</h3>}
      <GetInTouch />
    </div>
  );

}
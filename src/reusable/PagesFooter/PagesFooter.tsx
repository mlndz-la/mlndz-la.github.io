import { useLocation, useNavigate } from 'react-router-dom';
import {caseStudiesData} from '../../data/CaseStudies'
import './PagesFooter.css';
import { useEffect, useState } from 'react';
import { CaseStudyPreview, CaseStudyUrlEnum } from '../../components/CaseStudyPreview';
import { GetInTouch } from '../GetInTouch';

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

const getTitleFromUrl = (endpoint: string): string => {
  switch (endpoint) {
    case `/${CaseStudyUrlEnum.tlayoasCocina}`: {
      return "Tlayoa's Cosina";
    }
    case `/${CaseStudyUrlEnum.pawFinder}`: {
      return "Paw Finder";
    }
    case `/${CaseStudyUrlEnum.cosmicKitchen}`: {
      return "Cosmic Kitchen";
    }
  }
}

const reduceArraySize = (array: any[], reduceSize: number, reducedArray: any[] = [], usedIndexes: any = {}): any[] => {
  const randomIndex = Math.floor(array.length * Math.random());
  // if the array has been reduced to the desired size, return the reduced array
  if (reducedArray.length === reduceSize) return reducedArray;
  // if an index has already been used, retry for a new number
  if (usedIndexes[randomIndex]) return reduceArraySize(array, reduceSize, reducedArray, usedIndexes)
  // save value and index
  reducedArray.push(array[randomIndex]);
  usedIndexes[randomIndex] = true;
  // recurse
  return reduceArraySize(array, reduceSize, reducedArray, usedIndexes)
}

export const PagesFooter = () => {
  const { pathname } = useLocation();
  const [ displayedCaseStudies, setDisplayedCaseStudies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const { caseStudies } = caseStudiesData;
    const currentPageTitle = getTitleFromUrl(pathname);
    // filter out the current page and any "under construction" pages
    const filteredCaseStudies = caseStudies.filter(({ title }) => title !== currentPageTitle && title !== 'Under Construction');
    // reduce array to size 2
    const reducedArray = reduceArraySize(filteredCaseStudies, 2);
    setDisplayedCaseStudies(reducedArray);
  }, [])

  const goToWorkPage = () => navigate('/work')

  return (
    <div className="pages-footer__container">
      <div className="more_work__container">
        <h2 className="more_work__title">More Work</h2>
        <p className="more_work__subtitle font_size_desc">Case Studies, Redesigns and more</p>
        <div className="more_work__case_study__container">
          {
            displayedCaseStudies.map(({ imagePreview, title, description }) => {
              return (
                <CaseStudyPreview imagePreview={imagePreview} title={title} subtitle={description} caseStudyUrl={getCaseStudyUrl(title)} />
              );
            })
          }
        </div>
      </div>
      <h3 className='home_page__button' onClick={goToWorkPage}>View More</h3>
      <GetInTouch />
    </div>
  );
};
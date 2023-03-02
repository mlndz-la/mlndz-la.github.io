import { BannerProps } from './types';
import './Banner.css';


export const Banner = ({ imgSrc, endpoint }: BannerProps) => (
  <div className="banner" style={{ backgroundImage: `url(${imgSrc})`, backgroundColor: getBackgroundColor(endpoint) }} />
);

const getBackgroundColor = (endpoint: BannerProps["endpoint"]) => {
  switch (endpoint) {
    case 'tlayoas-cocina': {
      return '#FFF5EB';
    }
    case 'pawfinder': {
      return '#EFF5F1';
    }
    case 'cosmic-kitchen': {
      return '#2E2E2E';
    }
  }
}
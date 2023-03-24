import { BannerProps } from './types';
import './Banner.css';


export const Banner = ({ imgSrc, endpoint }: BannerProps) => (
  <div
    className={`banner ${endpoint}`}
    style={{ backgroundImage: imgSrc ? `url(${imgSrc})` : undefined }}
  />
);

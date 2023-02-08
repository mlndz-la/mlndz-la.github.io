import { BannerProps } from './types';
import './Banner.css';

export const Banner = ({ imgSrc }: BannerProps) => (<img className="banner" src={imgSrc} />)

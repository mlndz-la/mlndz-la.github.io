import { ICategoryProps } from './types';
import "./Categories.css";

export const Category = ({title, theme}: ICategoryProps) => {

  return (
    <div className="testing_center_div">
      <button className={`category_container category_${theme}`}>
        <h1 className={`category_title category_${theme}`}>{title}</h1>
      </button>
    </div>
  )
};
import { ICategoryProps } from './types';
import "./Categories.css";

export const Category = ({title, theme, elementId}: ICategoryProps) => {
  const handleView = () => {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'auto', block: 'start' })
  };

  return (
    <div className={`test_width`}>
      <button
        className={`category_container category_${theme} category_${theme}_button`}
        onClick={handleView}
      >
        <h1 className={`category_title`}>{title}</h1>
      </button>
    </div>
  )
};
import { Category } from "./Categories";

export const DisplayCategories = ({categoryList, theme}: any) => {
  const displayList = categoryList.map(({title, elementId}: any, i: any) => <Category title={title} theme={theme} elementId={elementId} key={i}/>);
  
  return (
    <>
      {displayList}
    </>
  )
};
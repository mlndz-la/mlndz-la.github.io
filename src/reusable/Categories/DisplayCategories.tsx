import { Category } from "./Categories";

export const DisplayCategories = ({categoryList, theme}: any) => {
  const displayList = categoryList.map((string: any, i: any) => <Category title={string} theme={theme} key={i}/>);
  
  return (
    <>
      {displayList}
    </>
  )
};
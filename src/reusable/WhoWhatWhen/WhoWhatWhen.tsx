import { WhoWhatWhenCard } from "./WhoWhatWhenCard";
import "./WhoWhatWhen.css";

export const WhoWhatWhen = ({ data, theme, themeName }: any) => {
  // const displayWhoWhatWhen = data.map((obj: any, i: any) => {
  //   return (
  //     <WhoWhatWhenCard
  //       key={i}
  //       theme={theme}
  //       title={obj.title}
  //       subtitle={obj.subtitle}
  //       themeName={themeName}
  //     />
  //   );
  // });

  const whoWhatWhenCreator = (strOne: any, strTwo: any) => {
    return data.map((obj: any, i: any) => {
      if (strOne === obj.title || strTwo === obj.title) {
        return (
          <WhoWhatWhenCard
            key={i}
            theme={theme}
            title={obj.title}
            subtitle={obj.subtitle}
            themeName={themeName}
          />
        );
      } else {
        return;
      }
    });
  };

  const displayCardWhereRole = whoWhatWhenCreator("Where", "Role");
  const displayCardWhatCategory = whoWhatWhenCreator("What", "Category");
  const displayCardWhyWhen = whoWhatWhenCreator("Why", "When");

  return (
    <div className="WhoWhatWhen_container">
      {/* {displayWhoWhatWhen} */}
      <div>{displayCardWhereRole}</div>
      <div>{displayCardWhatCategory}</div>
      <div>{displayCardWhyWhen}</div>
    </div>
  );
};

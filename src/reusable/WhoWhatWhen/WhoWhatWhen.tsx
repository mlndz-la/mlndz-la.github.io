import { WhoWhatWhenCard } from "./WhoWhatWhenCard";
import "./WhoWhatWhen.css";

export const WhoWhatWhen = ({ data, theme, themeName }: any) => {
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
      <div className="www_data_container_tc">{displayCardWhereRole}</div>
      <div className="www_data_container_tc">{displayCardWhatCategory}</div>
      <div className="www_data_container_tc">{displayCardWhyWhen}</div>
    </div>
  );
};

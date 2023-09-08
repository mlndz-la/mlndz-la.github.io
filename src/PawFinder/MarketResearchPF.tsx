import "./MarketResearchPF.css";

export const MarketResearchPF = ({
  image,
  title,
  textData,
  textColor,
  elementId,
}: any) => {
  const displayDesc = textData.map((textData: any, i: any) => {
    return (
      <article className="market_research_PF_desc_container" key={i}>
        <h1 className={`font_size_title mr_title_pf ${textColor}50`}>
          {textData.title}
        </h1>
        <p className={`market_research_PF_desc font_size_desc ${textColor}`}>
          {textData.desc}
        </p>
      </article>
    );
  });

  return (
    <div
      id={elementId}
      className="market_research_PF_container position_relative"
    >
      <h1 className="font_size_main_title mr_main_title_pf">{title}</h1>
      <div className="market_research_PF_flex_column">
        <div className="market_research_PF_text_container">{displayDesc}</div>
        <div className="mr_image_container_pf">
          <img className="market_research_PF_img" src={image} alt="pie chart" />
        </div>
      </div>
    </div>
  );
};

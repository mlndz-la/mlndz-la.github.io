import "./MarketResearchPF.css";

export const MarketResearchPF = ({image, title, textData, textColor, elementId}:any) => {
  const displayDesc = textData.map((textData:any, i:any) => {
    return (
      <article className="market_research_PF_desc_container" key={i}>
        <h1 className={`market_research_PF_desc_title ${textColor}50`}>{textData.title}</h1>
        <p className={`market_research_PF_desc font_size_desc ${textColor}`}>{textData.desc}</p>
      </article>
    )
  })
  return (
    <div id={elementId} className="market_research_PF_container position_relative">
      <h1 className="market_research_PF_title">{title}</h1>
      <div className="market_research_PF_flex_column">
        <div className="market_research_PF_text_container">
          {displayDesc}
        </div>
        <img className="market_research_PF_img" src={image} alt="pie chart" />
      </div>
    </div>
  )
};
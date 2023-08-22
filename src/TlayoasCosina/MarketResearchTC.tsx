import "./MarketResearchTC.css";

export const MarketResearchTC = ({ data, textColor }: any) => {
  const { title, image, theClaim, theProblem, elementId } = data;

  return (
    <div className="mr_container_tc" id={elementId}>
      <h1 className={`mr_main_title_tc font_size_main_title ${textColor}`}>
        {title}
      </h1>
      <div className="mr_content_container_tc">
        <div className="mr_text_container_tc">
          <div className="mr_the_claim_container_tc">
            <h1 className={`font_size_title ${textColor}50`}>
              {theClaim.title}
            </h1>
            <p className={`font_size_desc ${textColor}`}>{theClaim.desc}</p>
          </div>
          <div className="mr_the_problem_container_tc">
            <h1 className={`font_size_title ${textColor}50`}>
              {theProblem.title}
            </h1>
            <p className={`font_size_desc ${textColor}`}>{theProblem.desc}</p>
          </div>
        </div>
        <div className="mr_image_container_tc">
          <img className="mr_image_tc" src={image} alt="chart" />
        </div>
      </div>
    </div>
  );
};

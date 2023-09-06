import "./CompetitiveAnalysisPF.css";

export const CompetitiveAnalysisPF = ({
  textColor,
  mainData,
  orgsData,
  badGoodData,
  elementId,
}: any) => {
  const displayLogos = orgsData.map((data: any, i: any) => {
    return (
      <div key={i}>
        <div className="competitive_analysis_PF_logo_content">
          <img
            className={`competitive_analysis_PF_logo ${data.title}`}
            src={data.logo}
            alt={`${data.title} logo`}
          />
        </div>
        <h2 className={`competitive_analysis_PF_logo_title ${textColor}65`}>
          {data.title}
        </h2>
      </div>
    );
  });

  const displayGoodBad = badGoodData.map((data: any, i: any) => {
    return (
      <div className={`competitive_analysis_PF_good_bad_content`} key={i}>
        <h2 className={`font_size_title ${textColor}65`}>{data.title}</h2>
        <p className={`competitive_analysis_PF_good_bad_desc font_size_desc`}>
          {data.desc}
        </p>
      </div>
    );
  });

  const displayScreenshot = orgsData.map((data: any, i: any) => {
    return (
      <div key={i} className="competitive_analysis_PF_screenshot_content">
        <div className="competitive_analysis_PF_image_container">
          <img
            className="competitive_analysis_PF_screenshot"
            src={data.screenshot1}
            alt={`${data.title} screenshot 1`}
          />
          <img
            className="competitive_analysis_PF_screenshot"
            src={data.screenshot2}
            alt={`${data.title} screenshot 2`}
          />
        </div>
        <h2
          className={`competitive_analysis_PF_screenshot_title ${textColor}65`}
        >
          {data.title}
        </h2>
      </div>
    );
  });

  return (
    <div className="white_content_border" id={elementId}>
      <div className="competitive_analysis_PF_intro_container">
        <h1 className={`font_size_title ${textColor}`}>{mainData.title}</h1>
        <p className={`font_size_desc ${textColor}65`}>{mainData.desc}</p>
      </div>
      {/* Good / Bad & Logo Container */}
      <article className="competitive_analysis_PF_companies_container">
        <div className="competitive_analysis_PF_logo_title_container">
          {/* Logo & Header */}
          {displayLogos}
        </div>
        {/* The Good & Bad */}
        <div
          className={`competitive_analysis_PF_good_bad_container ${textColor}`}
        >
          {displayGoodBad}
        </div>
      </article>
      {/* Screenshots - Desktop */}
      <div className="competitive_analysis_PF_screenshot_container">
        {displayScreenshot}
      </div>
    </div>
  );
};

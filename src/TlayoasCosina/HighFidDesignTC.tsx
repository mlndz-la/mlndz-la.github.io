import "./HighFidDesignTC.css";

export const HighFidDesignTC = ({ data, textColor }: any) => {
  const { title, desc, screenshots, imageDesc, elementId } = data;

  const displayScreenshots = screenshots.map((screenshot: any, i: any) => {
    return <img className="hf_design_screenshot_PF" src={screenshot} key={i} />;
  });

  return (
    <div className="hfd_container_tc" id={elementId}>
      <div className="hfd_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="show_case_designs_module">{displayScreenshots}</div>
      <div className="hfd_image_desc_text_container_tc">
        <p className={`font_size_desc ${textColor}65`}>{imageDesc}</p>
      </div>
    </div>
  );
};

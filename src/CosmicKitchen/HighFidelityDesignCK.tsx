import "./HighFidelityDesignCK.css";

export const HighFidelityDesignCK = ({ data, textColor }: any) => {
  const { title, desc, screenshots, imageDesc, elementId } = data;

  const displayScreenshots = screenshots.map((screenshot: any, i: any) => {
    return <img className="hf_design_screenshot_PF" src={screenshot} key={i} />;
  });

  return (
    <div className="hfd_container_ck" id={elementId}>
      <div className="hfd_text_container">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="show_case_designs_module">{displayScreenshots}</div>
      <div className="hfd_image_desc_container_ck">
        <p className={`font_size_desc ${textColor}50`}>{imageDesc}</p>
      </div>
    </div>
  );
};

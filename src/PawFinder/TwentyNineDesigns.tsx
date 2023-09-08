import "./TwentyNineDesigns.css";

export const TwentyNineDesigns = ({ data, textColor }: any) => {
  const { title, desc, screenshots, imageDesc, elementId } = data;

  const displayScreenshots = screenshots.map((screenshot: any, i: any) => {
    return <img className="hf_design_screenshot_PF" src={screenshot} key={i} />;
  });

  return (
    <div className="hf_designs_section_PF" id={elementId}>
      <div className="hf_design_text_container_PF">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div>
        <div className="show_case_designs_module">{displayScreenshots}</div>
        <div className="hf_design_image_desc_container_PF">
          <p className={`font_size_desc ${textColor}65`}>{imageDesc}</p>
        </div>
      </div>
    </div>
  );
};

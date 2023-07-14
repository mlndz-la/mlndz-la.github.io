import "./TwentyNineDesigns.css";

export const TwentyNineDesigns = ({data, textColor}: any) => {
  const {
    title,
    desc,
    screenshots,
    imageDesc,
    elementId,
  } = data;

  const displayScreenshots = screenshots.map((screenshot:any, i:any) => {
    return <img className="hf_design_screenshot_PF" src={screenshot} key={i}/>
  })

  return (
    <div className="hf_designs_section_PF" id={elementId}>
      <div className="hf_design_text_container_PF">
        <h1 className="hf_design_title_PF">{title}</h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div>
        <div className="hf_design_screenshot_container_PF">
          {displayScreenshots}
        </div>
        <div className="hf_design_image_desc_container_PF">
          <p className={`hf_design_image_desc_PF font_size_desc ${textColor}65`}>{imageDesc}</p>
        </div>
      </div>
    </div>
  )
}
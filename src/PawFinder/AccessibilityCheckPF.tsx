import "./AccessibilityCheckPF.css";

export const AccessibilityCheckPF = ({data, textColor}: any) => {
  const {
    title,
    desc1,
    desc2,
    image,
    elementId,
  } = data;
  return (
    <div id={elementId} className="ac_container_PF">
      <div className="ac_text_container_PF">
        <h1 className="ac_title_PF">{title}</h1>
        <p className={`${textColor}65 font_size_desc`}>{desc1}</p>
        <br></br>
        <p className={`${textColor}65 font_size_desc`}>{desc2}</p>
      </div>
      <div className="ac_image_container_PF">
        <img className="ac_image_PF" src={image}/>
      </div>
    </div>
  )
};
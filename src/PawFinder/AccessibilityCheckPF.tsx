import "./AccessibilityCheckPF.css";

export const AccessibilityCheckPF = ({ data, textColor }: any) => {
  const { title, desc1, desc2, image, elementId } = data;
  return (
    <div id={elementId} className="ac_container_PF">
      <div className="ac_text_container_PF">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc1}</p>
        <br></br>
        <p className={`font_size_desc ${textColor}65`}>{desc2}</p>
      </div>
      <div className="ac_image_container_PF">
        <img className="ac_image_PF" src={image} />
      </div>
    </div>
  );
};

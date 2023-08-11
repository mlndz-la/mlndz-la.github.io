import "./AccessibilityCheckCK.css";

export const AccessibilityCheckCK = ({ data, textColor }: any) => {
  const { title, desc1, desc2, image, elementId } = data;

  return (
    <div className="ac_container_ck" id={elementId}>
      <div className="ac_text_container_ck">
        <h1 className={`font_size_main_title margin_bottom_main_title ${textColor}`}>{title}</h1>
        <p className={`font_size_desc ${textColor}50`}>{desc1}</p>
        <br />
        <p className={`font_size_desc ${textColor}50`}>{desc2}</p>
      </div>
      <div className="ac_image_container_ck">
        <img className="ac_image_ck" src={image} />
      </div>
    </div>
  );
};

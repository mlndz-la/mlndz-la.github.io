import "./AccessibilityTC.css";

export const AccessibilityTC = ({ data, textColor }: any) => {
  const { title, desc1, desc2, image, elementId } = data;

  return (
    <div className="a_container_tc" id={elementId}>
      <div className="a_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc1}</p>
        <br />
        <p className={`font_size_desc ${textColor}65`}>{desc2}</p>
      </div>
      <div className="a_image_container_tc">
        <img className="a_image_tc" src={image} />
      </div>
    </div>
  );
};

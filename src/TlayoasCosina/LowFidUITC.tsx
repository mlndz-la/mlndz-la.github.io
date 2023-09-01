import "./LowFidUITC.css";

export const LowFidUITC = ({ data, textColor }: any) => {
  const { title, desc, image, elementId } = data;

  return (
    <div className="lfui_container_tc" id={elementId}>
      <div className="lfui_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="lfui_image_container_tc">
        <img className="lfui_image_tc" src={image} alt="low fidelity ui" />
      </div>
    </div>
  );
};

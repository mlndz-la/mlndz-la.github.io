import "./PersonaTC.css";

export const PersonaTC = ({ data, textColor }: any) => {
  const { title, desc, topImage, bottomImage, elementId } = data;

  return (
    <div className="persona_container_tc" id={elementId}>
      <div className="persona_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="persona_image_container_tc">
        <img className="p_persona_image_tc image_one_persona_tc" src={topImage} alt="persona" />
        <img className="p_persona_image_tc" src={bottomImage} alt="persona" />
      </div>
    </div>
  );
};

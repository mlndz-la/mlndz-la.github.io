import "./PersonaCK.css";

export const PersonaCK = ({ data, textColor }: any) => {
  const { title, desc, topImage, bottomImage } = data;

  return (
    <div className="persona_container_ck">
      <div className="persona_text_container_ck">
        <h1  className={`font_size_main_title margin_bottom_main_title ${textColor}`}>{title}</h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="persona_image_container_ck">
        <img className="persona_image_top" src={topImage} />
        <img className="persona_image_bottom" src={bottomImage} />
      </div>
    </div>
  );
};

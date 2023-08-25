import "./InitialResearchTC.css";

export const InitialResearchTC = ({ data, textColor }: any) => {
  const { title, desc, image } = data;
  return (
    <div className="ir_container_tc">
      <div className="ir_text_container_tc">
        <h1 className="font_size_title ">{title}</h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="ir_image_container_tc">
        <img className="ir_image_tc" src={image} alt="cartoon" />
      </div>
      <div className="ir_line"/>
    </div>
  );
};

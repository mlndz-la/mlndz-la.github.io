import "./InformationArchitectureCK.css";

export const InformationArchitectureCK = ({ data, textColor }: any) => {
  const { title, desc, image, imageTitle, elementId } = data;

  return (
    <div id={elementId} className="ia_container_ck">
      <div className="ia_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="ia_image_container_ck">
        <img className="ia_image_ck" src={image} />
      </div>
    </div>
  );
};

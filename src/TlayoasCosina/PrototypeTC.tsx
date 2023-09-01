import "./PrototypeTC.css";

export const PrototypeTC = ({ data, textColor }: any) => {
  const { title, desc, image, imageDesc, link } = data;
  const linkText = "[ link ]";

  return (
    <div className="p_container_tc">
      <div className="p_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <img className="p_image_tc" src={image} alt="prototype preview" />
      <p className={`p_text_image_tc font_size_desc ${textColor}65`}>
        {imageDesc}{" "}
        <a className="hf_prototype_link_tc" href={link}>
          {linkText}
        </a>
      </p>
    </div>
  );
};

import "./HighFidPrototypePF.css";

export const HighFidPrototypePF = ({ data, textColor }: any) => {
  const { title, desc, image, imageDesc, link } = data;
  const linkText = "[ link ]";
  return (
    <div className="hf_prototype_container_PF">
      <div className="hf_prototype_text_container_PF">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="hf_prototype_image_container_PF">
        <img className="hf_prototype_image_PF" src={image} />
      </div>
      <p className={`${textColor}65 font_size_desc hf_prototype_text_link_PF`}>
        {imageDesc}
        <a className="hf_prototype_link_PF" href={link}>
          {linkText}
        </a>
      </p>
    </div>
  );
};

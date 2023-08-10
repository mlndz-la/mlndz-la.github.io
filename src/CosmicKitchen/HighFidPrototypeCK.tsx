import "./HighFidPrototypeCK.css";

export const HighFidPrototypeCK = ({ data, textColor }: any) => {
  const { title, desc, image, imageDesc, link } = data;
  const linkText = "[ Link ]";
  return (
    <div className="hfp_container_ck">
      <div className="hfp_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="hfp_image_container_ck">
        <img className="hfp_image_ck" src={image} />
      </div>
      <p className={`${textColor}50 font_size_desc hfp_link_ck`}>
        {imageDesc}
        <a className="hfp_link_text_ck" href={link}>
          {linkText}
        </a>
      </p>
    </div>
  );
};

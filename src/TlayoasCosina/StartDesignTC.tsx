import "./StartDesignTC.css";

export const StartDesignTC = ({ data, textColor }: any) => {
  const { title, desc, image } = data;

  return (
    <div className="sd_container_tc">
      <div className="sd_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <img className="sd_image_tc" src={image} alt="" />
    </div>
  );
};

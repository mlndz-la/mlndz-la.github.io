import "./FutureConsiderationCK.css";

export const FutureConsiderationCK = ({ data, textColor }: any) => {
  const { title, desc, image } = data;

  return (
    <div className="fc_container_ck">
      <div className="fc_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="fc_image_container_ck">
        <img className="fc_image_ck" src={image} />
      </div>
    </div>
  );
};

import "./FutureConsiderationTC.css";

export const FutureConsiderationTC = ({ data, textColor }: any) => {
  const { title, desc, image } = data;

  return (
    <div className="fc_container_tc">
      <div className="fc_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="fd_image_container_tc">
        <img className="fd_image_tc" src={image} />
      </div>
    </div>
  );
};

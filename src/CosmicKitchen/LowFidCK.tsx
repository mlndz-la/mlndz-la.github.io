import "./LowFidCK.css";

export const LowFidCK = ({ data, textColor }: any) => {
  const { title, desc, image, elementId } = data;
  return (
    <div className="lf_container_ck" id={elementId}>
      <div className="lf_text_container">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="lf_image_container_ck">
        <img className="lf_image_ck" src={image} />
      </div>
    </div>
  );
};

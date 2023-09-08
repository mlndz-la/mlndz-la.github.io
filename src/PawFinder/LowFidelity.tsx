import "./LowFidelity.css";

export const LowFidelity = ({
  title,
  desc,
  image,
  elementId,
  textColor,
}: any) => {
  return (
    <div id={elementId}>
      <div className="low_fidelity_text_container_PF">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="low_fidelity_image_container_PF">
        <img className="low_fidelity_image_PF" src={image} />
      </div>
    </div>
  );
};

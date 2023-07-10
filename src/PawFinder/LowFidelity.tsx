import "./LowFidelity.css";

export const LowFidelity = ({ title, desc, image, elementId, textColor }: any) => {
  return (
    <div id={elementId}>
      <div className="low_fidelity_text_container_PF">
        <h1 className="low_fidelity_title_PF">{title}</h1>
        <p className={`${textColor}65 font_size_desc`}>{desc}</p>
      </div>
      <div className="low_fidelity_image_container_PF">
        <img className="low_fidelity_image_PF" src={image} />
      </div>
    </div>
  )
};

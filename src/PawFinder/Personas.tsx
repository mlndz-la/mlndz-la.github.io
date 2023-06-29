import "./Personas.css";

export const Personas = ({title, desc, personaOne, personaTwo, textColor, elementId}:any) => {
  return (
    <div className="personas_content white_content_border test" id={elementId}>
      <div className="personas_text_container">
        <h1 className={`personas_title ${textColor}`}>{title}</h1>
        <p className={`personas_desc font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="personas_image_container">
        <img className="personas_image personas_image_one" src={personaOne} alt="persona one" />
        <img className="personas_image personas_image_two" src={personaTwo} alt="persona two" />
      </div>
    </div>
  )
};
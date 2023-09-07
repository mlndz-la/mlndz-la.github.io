import "./Personas.css";

export const Personas = ({title, desc, personaOne, personaTwo, textColor, elementId}:any) => {
  return (
    <div className="personas_content_PF white_content_border test" id={elementId}>
      <div className="personas_text_container_PF">
        <h1 className={`font_size_main_title ${textColor}`}>{title}</h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="personas_image_container_PF">
        <img className="personas_image_PF personas_image_one_PF" src={personaOne} alt="persona one" />
        <img className="personas_image_PF personas_image_two_PF" src={personaTwo} alt="persona two" />
      </div>
    </div>
  )
};
import "./TimeToStartDesign.css";

export const TimeToStartDesign = ({title, desc, image, textColor}: any) => {
  return (
    <div className="time_to_design_container">
      <div className="time_to_design_text_container">
        <h1 className="time_to_design_title">{title}</h1>
        <p
          className={`time_to_design_desc font_size_desc ${textColor}65`}>
        {desc}</p>
      </div>
      <img className="time_to_design_image" src={image} alt="cartoon holding website" />
    </div>
  )
}
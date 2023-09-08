import "./ResearchSoFar.css";

export const ResearchSoFar = ({data, textColor}:any) => {
  const {title, image, desc} = data;
  return (
    <div className="research_so_far_title_content">
      <div className="research_so_far_text_container">
        <h2 className="font_size_title">{title}</h2>
        <p className={`research_so_far_desc font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="research_so_far_image_container">
        <img className="research_so_far_image" src={image} alt="cartoon holding website" />
      </div>
    </div>
  )
}
import "./Testing.css";

export const Testing = ({title, desc, image, textColor}: any) => {
  return (
    <div>
      <div className="testing_text_container_PF">
        <h1 className="testing_title_PF">{title}</h1>
        <p className={`testing_desc_PF font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="testing_image_container_PF">
        <img src={image} className="testing_image_PF"/>
      </div>
    </div>
  )
};
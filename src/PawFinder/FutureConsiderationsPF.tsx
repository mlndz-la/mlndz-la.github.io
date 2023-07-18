import "./FutureConsiderationsPF.css";

export const FutureConsiderationsPF = ({data, textColor}:any) => {
  const {
    title,
    desc,
    image
  } = data;
  return (
    <div className="future_consideration_container_PF">
      <div className="future_consideration_text_container_PF">
        <h1 className="future_consideration_title_PF">{title}</h1>
        <p className={`${textColor}65 font_size_desc`}>{desc}</p>
      </div>
      <div className="future_consideration_image_container_PF">
        <img className="future_consideration_image_PF" src={image}/>
      </div>
    </div>
  )
}
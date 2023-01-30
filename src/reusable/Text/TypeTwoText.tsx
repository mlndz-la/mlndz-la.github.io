import "./TypeTwoText.css";

export const TypeTwoText = ({title, desc, textColor, image, alt}:any) => {
  return (
    <section className="type_two_container">
      <div className="type_two_text_container">
        <h1 className={`type_two_title ${textColor}`}>{title}</h1>
        <p className={`type_two_paragraph ${textColor}50`}>{desc}</p>
      </div>
      <img className="type_two_text_image" src={image} alt={alt} />
    </section>
  )
};
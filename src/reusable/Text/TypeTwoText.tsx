import "./TypeTwoText.css";

export const TypeTwoText = ({title, desc, textColor, image, alt}:any) => {
  return (
    <section className="type_two_container">
      <div className="type_two_text_container">
        <h1 className={`font_size_title ${textColor}`}>{title}</h1>
        <p className={`font_size_desc font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <img className="type_two_text_image" src={image} alt={alt} />
    </section>
  )
};
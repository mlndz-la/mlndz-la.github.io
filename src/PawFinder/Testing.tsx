import "./Testing.css";

export const Testing = ({ title, desc, image, textColor }: any) => {
  return (
    <div>
      <div className="testing_text_container_PF">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="testing_image_container_PF">
        <img src={image} className="testing_image_PF" />
      </div>
    </div>
  );
};

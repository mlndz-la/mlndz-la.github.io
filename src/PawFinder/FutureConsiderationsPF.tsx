import "./FutureConsiderationsPF.css";

export const FutureConsiderationsPF = ({ data, textColor }: any) => {
  const { title, desc, image } = data;
  return (
    <div className="future_consideration_container_PF">
      <div className="future_consideration_text_container_PF">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="future_consideration_image_container_PF">
        <img className="future_consideration_image_PF" src={image} />
      </div>
    </div>
  );
};

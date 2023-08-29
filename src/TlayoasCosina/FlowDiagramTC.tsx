import "./FlowDiagramTC.css";

export const FlowDiagramTC = ({ data, textColor }: any) => {
  const { title, desc, image, imageTitle, elementId } = data;

  return (
    <div className="fd_container_tc" id={elementId}>
      <div className="fd_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="fd_image_container_tc">
        <img className="fd_image_tc" src={image} alt="flow diagram" />
      </div>
    </div>
  );
};

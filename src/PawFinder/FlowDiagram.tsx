import "./FlowDiagram.css";

export const FlowDiagram = ({
  title,
  desc,
  imageTitle,
  image,
  elementId,
  textColor,
}: any) => {
  return (
    <div id={elementId} className="flow_diagram_container_PF">
      <div className="flow_diagram_text_container_PF">
        <h1 className="font_size_main_title margin_bottom_main_title dark">
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="flow_diagram_image_container_PF">
        <img
          className="flow_diagram_image_PF"
          alt="flow chart diagram"
          src={image}
        />
      </div>
    </div>
  );
};

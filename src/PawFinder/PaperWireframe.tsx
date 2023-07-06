import "./PaperWireframe.css"

export const PaperWireframe = ({
  title,
  desc,
  image,
  imageDesc,
  elementId,
  textColor,
}: any) => {
  return (
    <div id={elementId} className="white_content_border">
      <div className="paper_wireframe_text_container_PF">
        <h1 className="paper_wireframe_title_PF font_size_title">{title}</h1>
        <p className={`paper_wireframe_desc_PF font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="paper_wireframe_image_container_PF">
        <img
          className="paper_wireframe_image_PF"
          src={image}
          alt="sketch of wireframe"
        />
      </div>
      <p className={`paper_wireframe_image_desc_PF font_size_desc ${textColor}65`}>{imageDesc}</p>
    </div>
  );
};

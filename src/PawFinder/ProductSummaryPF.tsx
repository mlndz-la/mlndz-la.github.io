import "./ProductSummaryPF.css";

export const ProductSummaryPF = ({ data, textColor }: any) => {
  const { title, desc, image } = data;

  return (
    <div className="ps_container_PF">
      <div className="ps_text_container_PF">
        <h1
          className={`font_size_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <img className="ps_image_PF" src={image} />
    </div>
  );
};

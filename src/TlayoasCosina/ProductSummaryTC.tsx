import "./ProductSummaryTC.css";

export const ProductSummaryTC = ({ data, textColor }: any) => {
  const { title, desc, image } = data;

  return (
    <div className="ps_container_tc">
      <div className="ps_text_container_tc">
        <h1 className={`font_size_title ${textColor}`}>{title}</h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="ps_image_container_tc">
        <img className="ps_image_tc" src={image} />
      </div>
    </div>
  );
};

import "./ProductOverviewCK.css";

export const ProductOverviewCK = ({ data, textColor }: any) => {
  const { title, desc } = data;

  return (
    <div className="po_container_ck">
      <div className="po_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
    </div>
  );
};

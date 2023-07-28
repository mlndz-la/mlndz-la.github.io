import "./WhyThisProduct.css";

export const WhyThisProduct = ({data, textColor}: any) => {
  const {
    title,
    desc,
  } = data;
  return (
    <div className="wtp_container_ck">
      <div>
        <h1 className={`font_size_title ${textColor}`}>{title}</h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
    </div>
  )
};
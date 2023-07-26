import "./WhyThisProduct.css";

export const WhyThisProduct = ({data, textColor}: any) => {
  const {
    title,
    desc,
  } = data;
  return (
    <div className="wtp_container_ck">
      <h1 className={`font_size_title ${textColor}50`}>{title}</h1>
      <p className={`font_size_desc ${textColor}`}>{desc}</p>
    </div>
  )
};
import "./WhyThisProductTC.css";

export const WhyThisProductTC = ({ data, textColor }: any) => {
  const { title, desc, image } = data;

  return (
    <div className="wtp_container_tc">
      <div className="wtp_text_container_tc">
        <h1
          className={`font_size_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <img className="wtp_image_tc" src={image} alt="crocodile cartoon" />
    </div>
  );
};

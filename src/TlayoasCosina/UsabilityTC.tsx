import "./UsabilityTC.css";

export const UsabilityTC = ({ data, textColor }: any) => {
  const { title, desc1, desc2, elementId } = data;

  return (
    <div className="u_container_tc" id={elementId}>
      <h1
        className={`font_size_main_title margin_bottom_main_title ${textColor}`}
      >
        {title}
      </h1>
      <p className={`font_size_desc ${textColor}65`}>{desc1}</p>
      <br />
      <p className={`font_size_desc ${textColor}65`}>{desc2}</p>
    </div>
  );
};

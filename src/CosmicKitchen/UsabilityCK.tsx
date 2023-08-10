import "./UsabilityCK.css";

export const UsabilityCK = ({ data, textColor }: any) => {
  const { title, desc1, desc2 } = data;

  return (
    <div className="u_container_ck">
      <div className="u_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc1}</p>
        <br />
        <p className={`font_size_desc ${textColor}50`}>{desc2}</p>
      </div>
    </div>
  );
};

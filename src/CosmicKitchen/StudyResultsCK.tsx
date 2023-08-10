import "./StudyResultsCK.css";

export const StudyResultsCK = ({ data, textColor }: any) => {
  const { title, desc } = data;

  return (
    <div className="sr_container_ck">
      <div className="sr_text_container_ck">
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

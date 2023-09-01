import "./StudyResultsTC.css";

export const StudyResultsTC = ({ data, textColor }: any) => {
  const { title, desc } = data;

  return (
    <div className="sr_container_tc">
      <h1
        className={`font_size_main_title margin_bottom_main_title ${textColor}`}
      >
        {title}
      </h1>
      <p className={`font_size_desc ${textColor}65`}>{desc}</p>
    </div>
  );
};

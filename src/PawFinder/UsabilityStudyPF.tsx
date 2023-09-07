import "./UsabilityStudyPF.css";

export const UsabilityStudyPF = ({ data, textColor }: any) => {
  const { usability, studyResults } = data;

  return (
    <div id={usability.elementId} className="usability_container_PF">
      <div>
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {usability.title}
        </h1>
        <p className={`${textColor}65 font_size_desc`}>{usability.desc1}</p>
        <br />
        <p className={`${textColor}65 font_size_desc`}>{usability.desc2}</p>
      </div>
      <br />
      <div className="study_results_text_container_PF">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {studyResults.title}
        </h1>
        <p className={`${textColor}65 font_size_desc`}>{studyResults.desc}</p>
      </div>
    </div>
  );
};

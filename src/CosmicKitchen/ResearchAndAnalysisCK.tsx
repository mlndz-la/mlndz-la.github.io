import "./ResearchAndAnalysisCK.css";

export const ResearchAndAnalysisCK = ({ data, textColor }: any) => {
  const {
    title,
    image,
    industryLeader,
    refrigeratorType,
    elementId,
  } = data;

  const displayList = ({title, list}: any) => {
    return (
      <>
        <h2 className={`font_size_title ${textColor}50`}>{title}</h2>
        {
          list.map((string: string, i: number) => (
            <p className={`font_size_desc ${textColor}`} key={i}>{string}</p>
          ))
        }
      </>
    )
  }

  const displayLeaders = displayList(industryLeader);
  const displayRefrigerator = displayList(refrigeratorType);
  
  return (
    <div className="raa_container_ck" id={elementId}>
      <div className="raa_text_container_ck">
        <h1 className={`font_size_main_title raa_text_title_ck ${textColor}`}>{title}</h1>
        <div className="raa_leaders_list_ck">{displayLeaders}</div>
        <div className="raa_refrigerator_list_ck">{displayRefrigerator}</div>
      </div>
      <div className="raa_image_container_ck">
        <img src={image} className="raa_image_ck"/>
      </div>
    </div>
  );
};

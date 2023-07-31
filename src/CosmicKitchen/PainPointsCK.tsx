import "./PainPointsCK.css";

export const PainPointsCK = ({ data, textColor }: any) => {
  const { title, desc, painPointList, elementId } = data;

  const displayPainPoints = painPointList.map((str: string, key: number) => (
    <li className={`font_size_desc user_list_item_ck ${textColor}`} key={key}>
      {str}
    </li>
  ));

  return (
    <div id={elementId} className="pp_container_ck">
      <div className="pp_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="pp_list_container_ck">
        <ul>{displayPainPoints}</ul>
      </div>
    </div>
  );
};

import "./SolutionsCK.css";

export const SolutionsCK = ({ data, textColor }: any) => {
  const { title, desc, solutionsList } = data;
  const displaySolutions = solutionsList.map((str: string, key: number) => (
    <li className={`font_size_desc user_list_item_ck ${textColor}`} key={key}>{str}</li>
  ));

  return (
    <div className="s_container_ck">
      <div className="s_text_container_ck">
        <h1 className={`font_size_main_title margin_bottom_main_title ${textColor}`}>{title}</h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="s_list_container_ck">
        <ul>{displaySolutions}</ul>
      </div>
    </div>
  );
};

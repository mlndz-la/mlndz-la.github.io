import "./ResearchSoFarCK.css";

export const ResearchSoFarCK = ({data, textColor}: any) => {
  const { title, desc } = data;
  
  return (
    <div>
      <div className="rsf_container_ck">
        <div className="rsf_text_container_ck">
          <h1 className={`font_size_title ${textColor}`}>{title}</h1>
          <p className={`font_size_desc ${textColor}50`}>{desc}</p>
        </div>
      </div>
      <div className="rsf_line"/>
    </div>
  )
}
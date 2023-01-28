import "./WhoWhatWhen.css";

export const WhoWhatWhenCard = ({title, subtitle, theme}: any) => {
  return (
    <div className="WhoWhatWhen_Card">
      <div className="WhoWhatWhen_line_pf"></div>
      <div className="WhoWhatWhen_text_container">
        <h2 className={`WhoWhatWhen_title ${theme}50`}>{title}</h2>
        <h1 className="WhoWhatWhen_subtitle">{subtitle}</h1>
      </div>
    </div>
  )
}
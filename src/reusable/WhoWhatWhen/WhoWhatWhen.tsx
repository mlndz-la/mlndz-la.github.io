import { WhoWhatWhenCard } from "./WhoWhatWhenCard";
import "./WhoWhatWhen.css";

export const WhoWhatWhen = ({data, theme, themeName}:any) => {
  const displayWhoWhatWhen = data.map((obj:any, i:any) => {
    return <WhoWhatWhenCard key={i} theme={theme} title={obj.title} subtitle={obj.subtitle} themeName={themeName}/>
  })

  return (
    <div className="WhoWhatWhen_container">
      {displayWhoWhatWhen}
    </div>
  )
}
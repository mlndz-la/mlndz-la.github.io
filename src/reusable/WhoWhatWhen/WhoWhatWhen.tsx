import { WhoWhatWhenCard } from "./WhoWhatWhenCard";
import "./WhoWhatWhen.css";

export const WhoWhatWhen = ({data, theme}:any) => {
  const displayWhoWhatWhen = data.map((obj:any, i:any) => {
    return <WhoWhatWhenCard key={i} theme={theme} title={obj.title} subtitle={obj.subtitle}/>
  })

  return (
    <div className="WhoWhatWhen_container www_TEST">
      {displayWhoWhatWhen}
    </div>
  )
}
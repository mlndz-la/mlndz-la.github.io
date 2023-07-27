import "./ColoredLine.css";

export const ColoredLine = ({themeName}: any) => {
  return (
    <div className={`colored_line ${themeName}_color_line`}/>
  )
}
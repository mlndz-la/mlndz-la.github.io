import "./ColoredSection.css";

export const ColoredSection = ({theme, children }:any) => {
  return (
    <div className={`colored_section_container theme_section_${theme}`}>
      <div className={`colored_section_right theme_section_${theme}`}></div>
      <div className={`colored_section_left theme_section_${theme}`}></div>
      {children}
    </div>
  )
}
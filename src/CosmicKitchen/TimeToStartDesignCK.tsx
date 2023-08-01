import "./TimeToStartDesignCK.css";

export const TimeToStartDesignCK = ({ data, textColor }: any) => {
  const { title, desc } = data;

  return (
    <div className="ttsd_container_ck">
      <div className="ttsd_text_container_ck">
        <h1 className={`font_size_title ${textColor}`}>{title}</h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
    </div>
  );
};

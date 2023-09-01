import "./HighFidUITC.css";

export const HighFidUITC = ({ data, textColor }: any) => {
  const { title, desc, color, font, look, elementId } = data;

  return (
    <div className="hfui_container_tc" id={elementId}>
      <div className="hfui_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="hfui_color_font_container_tc">
        <div className="hfui_color_container_tc">
          <p className={`font_size_desc margin-bottom-four ${textColor}65`}>
            {color.title}
          </p>
          <h1 className={`font_size_main_title ${textColor}`}>{color.desc}</h1>
          <div className="hfui_color_circles_container_tc">
            <div className="circle first_tc" />
            <div className="circle second_tc" />
            <div className="circle third_tc" />
            <div className="circle fourth_tc" />
            <div className="circle fifth_tc" />
          </div>
        </div>
        <div className="hfui_font_container_tc">
          <p className={`font_size_desc margin-bottom-four ${textColor}65`}>
            {font.title}
          </p>
          <h1 className={`font_size_main_title ${textColor}`}>{font.desc}</h1>
          <h1 className="hf_text_alphabet_tc">{font.alphabet}</h1>
        </div>
      </div>
      <div className="hfui_feel_visuals_container">
        <div className="hfui_feel_container_tc">
          <p className={`font_size_desc margin-bottom-four ${textColor}65`}>
            {look.title}
          </p>
          <h1 className={`font_size_main_title ${textColor}`}>{look.desc}</h1>
        </div>
        <div className="hfui_visuals_container_tc">
          <div className="hfui_button_container_tc">
            <div className="hfui_button_tc hfui_dark_button_tc">
              <h1 className="hfui_dark_button_text_tc">Shop</h1>
            </div>
            <div className="hfui_button_tc hfui_light_button_tc">
              <h1 className="hfui_light_button_text_tc">+ Add</h1>
            </div>
          </div>
          <h1 className="hfui_visuals_title_tc">Tlayoa's Cosina</h1>
        </div>
      </div>
    </div>
  );
};

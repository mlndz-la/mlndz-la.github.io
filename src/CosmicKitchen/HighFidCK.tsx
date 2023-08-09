import "./HighFidCK.css";

export const HighFidCK = ({ data, textColor }: any) => {
  const { title, desc, alphabet, color, font, look, icons, elementId } = data;

  return (
    <div id={elementId} className="hf_container_ck">
      <div className="hf_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>{desc}</p>
      </div>
      <div className="hf_content_container_ck">
        <div className="hf_font_and_color_container_ck">
          <div className="hf_color_palette_container_ck">
            <div className="hf_color_text_container_ck">
              <p className={`font_size_desc margin-bottom-four ${textColor}50`}>
                {color.title}
              </p>
              <h1 className={`font_size_main_title ${textColor}`}>
                {color.desc}
              </h1>
            </div>
            <div className="hf_color_circles_container_ck">
              <div className="circle first_ck" />
              <div className="circle second_ck" />
              <div className="circle third_ck" />
              <div className="circle fourth_ck" />
              <div className="circle fifth_ck" />
            </div>
          </div>
          <div className="hf_font_container_ck">
            <div className="hf_font_text_container_ck">
              <p className={`font_size_desc margin-bottom-four ${textColor}50`}>
                {font.title}
              </p>
              <h1 className={`font_size_main_title light ${textColor}`}>
                {font.desc}
              </h1>
              <h1 className={`hf_text_alphabet_PF ${textColor}`}>{alphabet}</h1>
            </div>
          </div>
        </div>
        <div className="hf_feel_and_imagery_container_ck">
          <div className="hf_feel_container_ck">
            <p className={`font_size_desc margin-bottom-four ${textColor}50`}>
              {look.title}
            </p>
            <h1 className={`hf_feel_text_ck font_size_title ${textColor}`}>
              {look.desc}
            </h1>
          </div>
          <div className="hf_imagery_container_ck">
            <div className="hf_button_container_ck">
              <div className="hf_button_ck hf_dark_button_ck">
                <h1 className="hf_dark_button_text_ck">Cart</h1>
              </div>
              <div className="hf_button_ck hf_light_button_ck">
                <h1 className="hf_light_button_text_ck">View</h1>
              </div>
            </div>
            <div className="hf_icons_container_ck">
              <img className="hf_icon_ck" src={icons[0]} />
              <img className="hf_icon_ck hf_icon_ck_one" src={icons[1]} />
              <img className="hf_icon_ck" src={icons[2]} />
              <img className="hf_icon_ck hf_icon_ck_three" src={icons[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

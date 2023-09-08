import "./HighFidelityPF.css";

export const HighFidelityPF = ({ data, textColor, elementId }: any) => {
  const { title, desc, alphabet, color, font, look, icons } = data;
  return (
    <div id={elementId} className="high_fidelity_section_PF">
      <div className="hf_text_container_PF">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="hf_main_content_PF">
        <div className="hf_font_and_color_container_PF">
          <div className="hf_color_palette_container_PF">
            <p className={`font_size_desc margin-bottom-four ${textColor}65`}>
              {color.title}
            </p>
            <h1 className="font_size_main_title dark">{color.desc}</h1>
            <div className="hf_color_circles_container_PF">
              <div className="circle first_PF" />
              <div className="circle second_PF" />
              <div className="circle third_PF" />
              <div className="circle fourth_PF" />
              <div className="circle fifth_PF" />
            </div>
          </div>
          <div className="hf_font_container_PF">
            <p className={`font_size_desc margin-bottom-four ${textColor}65`}>
              {font.title}
            </p>
            <h1 className="font_size_main_title dark">{font.desc}</h1>
            <h1 className="hf_text_alphabet_pf">{alphabet}</h1>
          </div>
        </div>
        <div className="hf_feel_and_imagery_container_PF">
          <div className="hf_look_and_feel_container_PF">
            <p className={`font_size_desc margin-bottom-four ${textColor}65`}>
              {look.title}
            </p>
            <h1
              className={`hf_feel_text_ck font_size_title ${textColor}`}
            >
              {look.desc}
            </h1>
          </div>
          <div className="hf_imagery_container_PF">
            <div className="hf_button_container_PF">
              <div className="hf_button_PF hf_dark_button_PF">
                <h1 className="hf_dark_button_text_PF">Dog</h1>
              </div>
              <div className="hf_button_PF hf_light_button_PF">
                <h1 className="hf_light_button_text_PF">Cat</h1>
              </div>
            </div>
            <div className="hf_icons_container_PF">
              <img className="hf_icon_PF" src={icons[0]} />
              <img className="hf_icon_PF" src={icons[1]} />
              <img className="hf_icon_PF" src={icons[2]} />
              <img className="hf_icon_PF" src={icons[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

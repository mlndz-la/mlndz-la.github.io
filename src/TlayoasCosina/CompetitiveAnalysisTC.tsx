import { CommentBox } from "../reusable/CommentBox";
import "./CompetitiveAnalysisTC.css";

export const CompetitiveAnalysisTC = ({ data, textColor, theme }: any) => {
  const {
    title,
    desc,
    chickenItza,
    LAIndianaTamales,
    tamalesLosAngeles,
    theGood,
    theBad,
    comments,
    elementId,
  } = data;

  const displayComments = comments.map(
    ({ name, profilePic, comment }: any, i: any) => {
      return (
        <CommentBox
          comment={comment}
          link={profilePic}
          name={name}
          theme={theme}
          key={i}
        />
      );
    }
  );

  return (
    <div className="ca_container_tc" id={elementId}>
      <div className="ca_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="ca_logo_container_tc">
        <div className="ca_logo_card_tc ca_logo_card_v1_tc">
          <div className="ca_image_container_tc">
            <img className="ca_logo_tc" src={chickenItza.logo} alt="logo" />
          </div>
          <h1 className={`ca_title_logo_tc font_size_title ${textColor}50`}>
            {chickenItza.title}
          </h1>
        </div>
        <div className="ca_logo_card_tc ca_logo_card_v2_tc">
          <div className="ca_image_container_tc">
            <img
              className="ca_logo_tc"
              src={LAIndianaTamales.logo}
              alt="logo"
            />
          </div>
          <h1 className={`ca_title_logo_tc font_size_title ${textColor}50`}>
            {LAIndianaTamales.title}
          </h1>
        </div>
        <div className="ca_logo_card_tc">
          <div className="ca_image_container_tc">
            <img
              className="ca_logo_tc"
              src={tamalesLosAngeles.logo}
              alt="logo"
            />
          </div>
          <h1 className={`ca_title_logo_tc font_size_title ${textColor}50`}>
            {tamalesLosAngeles.title}
          </h1>
        </div>
      </div>
      <div className="ca_text_container_good_bad_tc">
        <div className="ca_text_container_good_tc">
          <h1
            className={`font_size_main_title margin_bottom_main_title ${textColor}50`}
          >
            {theGood.title}
          </h1>
          <p className={`font_size_desc ${textColor}`}>{theGood.desc}</p>
        </div>
        <div className="ca_text_container_bad_tc">
          <h1
            className={`font_size_main_title margin_bottom_main_title ${textColor}50`}
          >
            {theBad.title}
          </h1>
          <p className={`font_size_desc ${textColor}`}>{theBad.desc}</p>
        </div>
      </div>
      <div className="ca_comments_container_tc">
        <div className="notable_comments_comment_box_container">
          {displayComments}
        </div>
      </div>
    </div>
  );
};

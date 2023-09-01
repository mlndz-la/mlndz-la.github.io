import { CommentBox } from "../reusable/CommentBox";
import "./UserSurveyTC.css";

export const UserSurveyTC = ({ data, textColor }: any) => {
  const { title, desc, elementId, redditInfoGraphic } = data;

  const displayComments = redditInfoGraphic.notableComments.map(
    ({ name, profilePic, comment }: any, i: any) => {
      return (
        <CommentBox
          comment={comment}
          link={profilePic}
          name={name}
          theme={"comment_light"}
          key={i}
        />
      );
    }
  );

  const displaySurveyResults = redditInfoGraphic.surveyCategories.map(
    ({ title, percent, css }: any, i: number) => {
      return (
        <div key={i}>
          <div className="us_reddit_display_data_text_container_tc">
            <h1 className={`font_size_desc ${textColor}65`}>{title}</h1>
            <h1 className={`font_size_desc ${textColor}65`}>{percent}</h1>
          </div>
          <div className={`us_reddit_display_data_line_tc`}>
            <div className={`us_percent_bar_tc us_percent_${css}_tc`}></div>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="us_container_tc" id={elementId}>
      <div className="us_text_container_tc">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {title}
        </h1>
        <p className={`font_size_desc ${textColor}65`}>{desc}</p>
      </div>
      <div className="us_reddit_survey_container_tc">
        <div>
          <h1
            className={`font_size_main_title margin_bottom_main_title ${textColor}`}
          >
            {redditInfoGraphic.title}
          </h1>
          <div className="us_reddit_survey_subtitle_container">
            <img
              className="us_reddit_image_tc"
              src={redditInfoGraphic.redditLogo}
              alt="reddit logo"
            />
            <h2 className={`font_size_desc ${textColor}65`}>
              {redditInfoGraphic.subtitle}
            </h2>
          </div>
        </div>
      </div>
      <div className="us_reddit_display_data_container_tc">
        {displaySurveyResults}
      </div>
      <div className="us_reddit_comments_container_tc">
        <div className="us_reddit_text_container_tc">
          <h1 className="font_size_main_title">Notable Comments</h1>
        </div>
        <div className="us_comments_container_tc">
          <div className="notable_comments_comment_box_container">
            {displayComments}
          </div>
        </div>
      </div>
    </div>
  );
};

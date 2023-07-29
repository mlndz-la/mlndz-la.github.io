import "./GlobalMarketResearchCK.css";

export const GlobalMarketResearchCK = ({
  globalMarketResearchData,
  targetAudienceData,
  usersData,
  textColor,
}: any) => {
  const userList = usersData.userList.map((string: string, i: number) => (
    <li className={`font_size_desc user_list_item_ck ${textColor}`} key={i}>
      {string}
    </li>
  ));

  return (
    <div className="gmr_and_ta_container_ck">
      <div id={globalMarketResearchData.elementId} className="gmr_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {globalMarketResearchData.title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>
          {globalMarketResearchData.desc}
        </p>
      </div>
      <div className="gmr_image_container_ck">
        <img className="gmr_image_ck" src={globalMarketResearchData.image} />
      </div>

      <div id={targetAudienceData.elementId} className="ta_text_container_ck">
        <h1
          className={`font_size_main_title margin_bottom_main_title ${textColor}`}
        >
          {targetAudienceData.title}
        </h1>
        <p className={`font_size_desc ${textColor}50`}>
          {targetAudienceData.desc}
        </p>
      </div>
      <div className="ta_image_container_ck">
        <img className="ta_image_ck" src={targetAudienceData.image} />
        <p className={`ta_image_desc_ck font_size_desc ${textColor}50`}>{targetAudienceData.imageDesc}</p>
      </div>

      <div className="users_text_container_ck">
        <h1 className={`font_size_main_title ${textColor}50`}>
          {usersData.title}
        </h1>
        <ul className="user_list_container_ck">{userList}</ul>
      </div>
    </div>
  );
};

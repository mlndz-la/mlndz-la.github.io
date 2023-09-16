import { GetInTouch } from "./reusable/GetInTouch";
import { websiteAssets } from "./data/WebsiteAssets";
import "./Contact.css";

export const Contact = () => {
  const { profilePic } = websiteAssets;
  return (
    <div className="contact_page__container">
      <h2 className="contact_page__title">Contact</h2>
      <div className="contact_info__container">
        <div className="contact_info_text__container">
          <h2 className="contact_info_text__title">About Me</h2>
          <p className="contact_info_text__p">
            I'm Erick Melendez, a seasoned UI/UX Designer with five years of
            experience and a foundation in Computer Science. I transitioned from
            Frontend Software Engineering to specialize in UI/UX design, merging
            technical expertise with a strong design sensibility.
          </p>
          <br />
          <h2 className="contact_info_text__title">Experience</h2>
          <p className="contact_info_text__p">
            At Wunderman Thompson, I excelled as a UI Designer, prioritizing
            user personas and research, utilizing Figma for collaborative
            prototyping, streamlining complex menus, and contributing to
            innovative design sprints. My iterative design approach, fueled by
            user feedback, consistently improved usability and functionality.
          </p>
          <br />
          <p className="contact_info_text__p">
            Centerfield saw me as an A/B testing strategist, managing end-to-end
            design, and delivering a remarkable 77% sales boost through a major
            website redesign. I harnessed data-driven insights from tools like
            Google Analytics, Similar Web, and Spyfu to make informed design
            decisions.
          </p>
          <br />
          <p className="contact_info_text__p">
            {" "}
            Healthy Spot allowed me to implement React features, ensuring
            functionality through rigorous testing. I also advocated for
            inclusivity by providing research-backed feedback, resulting in
            improved readability for a broader user demographic. My proficiency
            in SASS streamlined CSS, enhancing code clarity and maintainability.
          </p>
          <br />
          <h2 className="contact_info_text__title">Skills</h2>
          <p className="contact_info_text__p">
            My toolkit includes Figma, Adobe Suite, Zeplin, Sketch, Invision,
            Miro, and JavaScript for web development. I bring strong soft skills
            to the table, including communication, adaptability, feedback
            receptiveness, attention to detail, and empathy.
          </p>
          <br />
          <p className="contact_info_text__p">
            Outside work, I'm an avid board gamer, a museum volunteer at NHMLA
            and LATP, and a sailing enthusiast. Let's collaborate and create
            exceptional digital experiences together!
          </p>
        </div>
        <img className="contact_info__img" src={profilePic} />
      </div>
      <GetInTouch />
    </div>
  );
};

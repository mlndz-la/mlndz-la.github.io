import { CommentBox } from "../reusable/CommentBox";
import "./NotableComments.css";

export const NotableComments = ({data, theme}: any) => {
  const displayComments = data.map(({name, profilePic, comment}: any, i:any) => {
    return (
      <CommentBox comment={comment} link={profilePic} name={name} theme={theme} key={i}/>
    )
  })
  return (
    <div className="notable_comments_content position_relative">
      <h1 className="notable_comments_title">Notable Comments</h1>
      <div className="notable_comments_comment_box_container">
        {displayComments}
      </div>
    </div>
  )
}
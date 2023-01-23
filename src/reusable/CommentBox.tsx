import './CommentBox.css';

export const commentBox = (comment: string, name: string, profilePic: string) => {

  return (
    <div className='comment_box_container'>
      <div className='comment_box_image_and_comment_container'>
        <img 
          className='comment_box_image'
          src={profilePic} alt="Profile Picture"
        />
        <div className='comment_box_comment_title_container'>
          <p className='comment_box_comment'>{comment}</p>
          <h2 className='comment_box_title'>{name}</h2>
        </div>
      </div>
    </div>
  )
};
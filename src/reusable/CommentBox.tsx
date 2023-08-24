import './CommentBox.css';

interface Props {
  comment: string,
  name: string,
  link: string,
  theme: string
}

export const CommentBox = (props: Props) => {
  const {comment, name, link, theme} = props;

  return (
    <div className={`comment_box_container ${theme}`}>
      <div className='comment_box_image_and_comment_container'>
        <img 
          className='comment_box_image'
          src={link} alt="Profile Picture"
        />
        <div className='comment_box_comment_title_container'>
          <p className='comment_box_comment'>{comment}</p>
          <h2 className='comment_box_title'>{name}</h2>
        </div>
      </div>
    </div>
  )
};
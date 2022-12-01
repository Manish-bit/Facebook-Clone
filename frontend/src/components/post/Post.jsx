import { MoreVert } from '@mui/icons-material'
import './Post.css'
import { Users } from '../../dummyData'
import { useState } from 'react'

const Post = ({post}) => {

    const [like,setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const user = Users.filter(u=> u.id === 1);
    console.log(user)

    const likeHandler = ()=>{
       if(isLiked)
       {
        setLike(like-1)
        setIsLiked(false)
       }
       else{
        setLike(like+1)
        setIsLiked(true)
       }

    }

  return (
    <>
    <div className='postContainer'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" className='postProfileImg'/>
                    <span className='postUsername'>{Users.filter(u=>u.id === post.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc} </span>
                <img src={post.photo} alt='' className='postImg'/>
                
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" alt="" onClick={likeHandler}/>
                    <img  className='likeIcon'src="assets/heart.png" alt="" onClick={likeHandler}/>
                    <span className="likeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comment</span>
                </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Post
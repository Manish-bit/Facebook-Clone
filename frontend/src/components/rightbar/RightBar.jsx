import './RightBar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'





const RightBar = ({profile}) => {


  const ProfileRightBar = ()=>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">City:</span>
         <span className="rightbarInfoValue">Kathmandu</span>
       </div>
       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">From:</span>
         <span className="rightbarInfoValue">Sydney</span>
       </div>
       <div className="rightbarInfoItem">
         <span className="rightbarInfoKey">Relationship:</span>
         <span className="rightbarInfoValue">Single</span>
       </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
       <div className="rightbarFollowing">
         <img src="assets/person/1.jpeg" alt="" className="rightbarfollowingImg" />
         <span className="rightbarFollowingName">Manish Aryal</span>
       </div>
       <div className="rightbarFollowing">
         <img src="assets/person/2.jpeg" alt="" className="rightbarfollowingImg" />
         <span className="rightbarFollowingName">Manish Aryal</span>
       </div>
       <div className="rightbarFollowing">
         <img src="assets/person/3.jpeg" alt="" className="rightbarfollowingImg" />
         <span className="rightbarFollowingName">Manish Aryal</span>
       </div>
       <div className="rightbarFollowing">
         <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingImg" />
         <span className="rightbarFollowingName">Manish Aryal</span>
       </div>
       <div className="rightbarFollowing">
         <img src="assets/person/5.jpeg" alt="" className="rightbarfollowingImg" />
         <span className="rightbarFollowingName">Manish Aryal</span>
       </div>
       <div className="rightbarFollowing">
         <img src="assets/person/6.jpeg" alt="" className="rightbarfollowingImg" />
         <span className="rightbarFollowingName">Manish Aryal</span>
       </div>
      </div>
      
      </>
    )
  }

  const HomeRightbar = ()=>{
    return(
      <>
         <div className="birthdayContainer">
            <img src='/assets/gift.png' className='birthdayImg' alt=''/>
            <span className='birthdayText'><b>Suman</b> and <b> 3 other friends</b> have birthday today</span>
          </div>
          <img src='assets/ad.png' className='rightbarAd' alt=""/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u =>(

              <Online key={u.id} user={u}/>

            ))}
          </ul>
      </>
    )
  }

  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
         {
          profile ?  <ProfileRightBar/> :<HomeRightbar/>
         }
        </div>
    </div>
  )
}

export default RightBar
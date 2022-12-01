import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import SideBar from '../../components/sidebar/SideBar'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'

const Profile = () => {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <SideBar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src='assets/post/3.jpeg' className='profileCoverImg'
            alt=''/>
            <img src='assets/person/7.jpeg' className='profileUserImg'
            alt=''/>
            </div>

            <div className="profileInfo">
                <h4 className='profileInfoName'>Manish Aryal</h4>
                <span className='profileInfoDesc'>I am a developer</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <RightBar profile/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Profile
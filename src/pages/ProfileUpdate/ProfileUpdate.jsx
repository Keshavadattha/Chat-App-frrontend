import React from 'react'
import assets from '../../assets/assets'
import './ProfileUpdate.css'
const ProfileUpdate = () => {
  return (
    <div className="profile">
    <div className="profile-container">
      <form>
        <h3>Profile Details </h3>
       
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="avatar" accept=".png , .jpg , .jpeg hidden"/>
    <img src={assets.avatar_icon} alt="" />
    upload profile image
          
       <input type="text" placeholder="your name " required />
       <textarea placeholder= "Write profile Bio" required ></textarea>
      
    <button type="submit">Save</button>
    <label htmlFor="avatar">
    <img className="profile-pic" src={assets.logo_icon} alt="" />
    </label>
    </form>
    </div>
        </div>
  )
}

export default ProfileUpdate


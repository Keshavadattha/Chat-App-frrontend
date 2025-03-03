import React from 'react'
import './leftside.css'
import assets from '../../assets/assets'
const leftside = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
<img src={assets.logo} className='logo' alt="" />
<div className="menu">
<img src={assets.menu_icon} alt="" />
<div className="submenu">
  <p>Edit profile</p>
  <hr/>
</div>
</div>
        </div>
        <div className="ls-search">
<img src={assets.search_icon} alt="" />
<input type="text" placeholder='Search'/>


        </div>
        </div>
<div className='ls-list'>
{Array(3).fill("").map((item,index)=>(
  <div key={index}className="friends">
  <img src={assets.profile_img} alt="" />
<div>
<p>ravi</p>
<span>Hello, How are you?</span>
</div>
</div>
))}
    </div>
    </div>
  )
}

export default leftside

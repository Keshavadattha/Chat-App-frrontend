import React from 'react'
import './rightside.css'
import assets from '../../assets/assets'

const rightside = () => {
  return (
    <div className="rs">
        <div className="rs-pro">
            <img src={assets.profile_img}alt="" />
            <h3>Ravi <img src={assets.green_dot} alt="" /></h3>
           
            <p>TaggedeLe</p>
            
            </div>
            <hr/>
          <div className="rs-media">
            <p>Media</p>
            <div>
                <img src={assets.pic1}alt="" />
                <img src={assets.pic2}alt="" />
                <img src={assets.pic3}alt="" />
            </div>
            </div>
            <button>Logout</button>
            </div>
            
      
  )
}

export default rightside

import React from 'react'
import './chatbox.css'
import assets from '../../assets/assets'
const chatbox = () => {
  return (
    <div className='chatbox'>
<div className="chat-user">
      <img src={assets.profile_img} alt="" />
      <p>Ravi<img className="dot" src={assets.green_dot} alt=""/></p>
      <img src={assets.help_icon} className="help" alt="" />
      </div>
<div className="chatmsg">
<div className="s-msg">
<p className="msg">Lorem ipsum is placeholder text commonly used in ..</p>
<div>
<img src={assets.profile_img} alt="" />
<p>3:40 AM</p>
</div>
</div>

<div className="s-msg">
<img className='msg-img'  src={assets.pic1} alt="" />
<div>
<img src={assets.profile_img} alt="" />
<p>3:40 AM</p>
</div>
</div>






<div className="r-msg">
<p className="msg">Lorem ipsum is placeholder text commonly used in ..</p>
<div>
<img src={assets.profile_img} alt="" />
<p>3:40 AM</p>
</div>
</div>



</div>









<div className="chat-input">
<input type="text" place holder="send message" />
<input type="file" id="image" accept="image/png, image/jpeg" hidden />
<label htmlFor="image">
<img src={assets.gallery_icon} alt="" />

</label>
<img src={assets.send_button} alt="" />
</div>




    </div>

    
 





  )
}

export default chatbox

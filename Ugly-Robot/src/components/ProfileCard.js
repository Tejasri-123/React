import React from 'react'
import profiles from '../fakeData'
console.log(profiles)
const ProfileCard = ({image,name,title,description}) => {
  return (
    <div style={{
      backgroundColor:"grey",
       margin:10,
       padding:5,
       borderRadius:15
       }}>
      <div style={{ display : 'flex' ,justifyContent: 'center'}}>
      <img  
      src={image} 
      alt="" 
      height='70px'
      style={{borderRadius:'10px',marginTop:10}}/>
      
      <div>
      <h2 style={{marginLeft:'20px'}}>{name}</h2>
      <h4 style={{margin:'20px'}}>{title}</h4>
      </div>
      </div>
      <div style={{display:'flex',justifyContent: 'center'}}>
        <p style={{margin:'10px',padding:5}}>{description}</p>
        </div>  
    </div>
  )
}

export default ProfileCard

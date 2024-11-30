import React from 'react'

const Header_style = {backgroundColor: "#B48B68", height: '45px', width: '100%', opacity: '0.8'};
const heading = {paddingTop:'10px', fontSize:'22px', fontWeight: '900'}
const Header = () => {
  return (
    <div style={Header_style}>
      <p style={heading}>Pet Adoption Form</p>
    </div>
  )
}

export default Header
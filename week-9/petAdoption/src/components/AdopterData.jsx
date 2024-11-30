import React, { Component } from 'react'


const goback = {
 
    width: 'auto',
    padding: '15px',
    borderRadius: '14px',
    cursor: 'pointer'

}

export class AdopterData extends Component {
  
  render() {
    const { formData, handleGoBack } = this.props;
    return (
      <div>
        <table style={{width: "100%"}}>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone</th>
           </tr>
           {formData.map((data, index)=>(
           <tr key={index}>
            <td>{data.petName}</td>
            <td>{data.petType}</td>
            <td>{data.breed}</td>
            <td>{data.adopterName}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
           </tr>
           ))}
        </table>
        <div>
      <button type="button" style={goback} onClick={handleGoBack}>
          Go Back
      </button>
      </div>
      </div>
      
      
    )
  }
}

export default AdopterData
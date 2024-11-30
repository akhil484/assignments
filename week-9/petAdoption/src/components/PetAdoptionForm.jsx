import React, { useState } from 'react'
import AdopterData from './AdopterData';



const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
};

const formboxstyle={
  display: 'flex',
  backgroundColor: "rgba(180, 139, 104, 0.8)",
  height: '600px', 
  width: '540px'
}
const inputText = {
  width: '460px',
  marginTop: '10px'
}
const formcontent = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: '40px',
  marginTop:'15px'
}
const pstyle={
  paddingTop: '14px'
}
const buttonstyle={
  backgroundColor: '#214611',
  cursor: 'pointer'
}

const error_style = {
  float:'right',
  fontSize: '12px',
  color:'red',
  marginTop: '4px'
}

const FormComponent = () =>{
  const[formData, setFormData] = useState([]);
  const[values, setValues] = useState({
        petName: "",
        petType: "Dog",
        breed: "",
        adopterName: "",
        email: "",
        phone: ""
  });

  const [errors, setErrors] = useState({
    petName: "",
    petType: "",
    breed: "",
    adopterName: "",
    email: "",
    phone: ""
});

  const[showTable, setShowTable] = useState(false);
  const { petName, petType, breed, adopterName, email, phone } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        
        let errorsCopy = { ...errors };
        
        const errorR = (name, value, errorsCopy)=>{
          let updatedErrors = { ...errorsCopy };
          switch (name) {
            case "petName":
              updatedErrors.petName =
                    value.length < 3 ? "Pet Name must be at least 3 characters" : "";
                break;
            case "breed":
              updatedErrors.breed =
                    value.length < 3 ? "Breed must be at least 3 characters" : "";
                break;
            case "adopterName":
              updatedErrors.adopterName =
                    value.length < 3 ? "Your Name must be at least 3 characters" : "";
                break;
            case "email":
              updatedErrors.email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "" : "Invalid email address";
                break;
            case "phone":
              updatedErrors.phone = /^\d{10}$/.test(value)
                    ? ""
                    : "Please enter a valid 10-digit phone number!";
                break;
            default:
                break;
        }
        return updatedErrors;
        };
        
        setErrors(errorR(name,value,errorsCopy));
  }

  const handleSubmit = () =>{
      if(!petName || !petType || !breed || !adopterName || !email || !phone)
      {
        alert('Please fill all the fields');
        return;
      }

      const hasErrors = Object.values(errors).some((val)=>val);
      if(hasErrors)
      {
        return;
      }
      const data = { petName, petType, breed, adopterName, email, phone };
      setFormData((prevValues)=> [...prevValues,data]);

      setShowTable(true);
      setValues({
        petName: "",
        petType: "Dog",
        breed: "",
        adopterName: "",
        email: "",
        phone: ""
    })
    setErrors({
        petName: "",
        petType: "",
        breed: "",
        adopterName: "",
        email: "",
        phone: ""
    })
  }

  const handleGoBack = () => setShowTable(!showTable);

  
    if(!showTable){
      return (
        <div style={formboxstyle}>
    <div style={formcontent} class="asfsf">

      <p style={pstyle}>Pet Name</p>
      <input 
        style={inputText} 
        type='text' 
        placeholder='Pet Name' 
        name="petName" 
        value={petName} 
        onChange={handleChange}
      />
      <span style={error_style}>{errors.petName}</span>

      
      <p style={pstyle}>Pet Type</p>
      <select style={inputText} name="petType" value={petType} onChange={handleChange}>
      <option>Dog</option>
        <option>Cat</option>
        <option>Rabbit</option>
        <option>Mouse</option>
        </select>
        <span style={error_style}>{errors.petType}</span>
      <p style={pstyle}>Breed</p>
      <input style={inputText} type="text" placeholder="breed" value={breed} name="breed" onChange={handleChange}/>
      <span style={error_style}>{errors.breed}</span>
      

      <p style={pstyle}>Your Name</p>
      <input style={inputText} type='text' placeholder='Your Name' name="adopterName" value={adopterName} onChange={handleChange}/>
      <span style={error_style}>{errors.adopterName}</span>

      <p style={pstyle}>Email</p>
      <input style={inputText} type='text' placeholder='Email' value={email} name="email" onChange={handleChange}/>
      <span style={error_style}>{errors.email}</span>

      <p style={pstyle}>Phone</p>
      <input style={inputText} type='text' placeholder='Phone' value={phone} name="phone" onChange={handleChange}/>
      <span style={error_style}>{errors.phone}</span>
      <button style={buttonstyle} onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  )
}
  
  return((showTable&&<AdopterData formData={formData} handleGoBack={handleGoBack}></AdopterData>))
}

const PetAdoptionForm = () => {
  return (
    <div style={wrapperStyle}>
      <FormComponent/>
      
    </div>
    
  )
}

export default PetAdoptionForm
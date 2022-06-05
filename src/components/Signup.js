import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .required('Required'),
    lastName: Yup.string()
     
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .required('Required'),
    
    flexRadioDefault: Yup.boolean()
    .oneOf([0 , 1], 'Selecting the gender field is required')
    .required('Required'),
    
    checkbox: Yup.boolean()
    .oneOf([true], 'Must Select one checkbox')
    .required('Required'),

    newelement: Yup.string()
    .max(12, 'Must be 12 characters or less')
    .min(8,   'Must be 8 characters or more')
    .matches(/^[0-9a-zA-Z]+$/, "Only alphanumeric values are allowed" )
    .required('required'),
      })
    
  
  return (
    <Formik
      initialValues={{
        
        firstName: '',
        lastName: '',
        flexRadioDefault:'',
        checkbox:'',
        newelement:''
        
      }}
      validationSchema={validate}
      onSubmit={values => {
         console.log(values)
        
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Registration</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="new element" name="newelement" type="text" />

            <div style={{height:"20px"}}></div>
            <label><h6 style={{marginRight:"770px"}}>Gender</h6></label>
            <div class="form-check">
  <input class="form-check-input" type="radio"  id="flexRadioDefault1" name="flexRadioDefault" />
  <label class="form-check-label" for="flexRadioDefault1"  style={{marginRight:"800px"}}>
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio"  id="flexRadioDefault2" name="flexRadioDefault"/>
  <label class="form-check-label" for="flexRadioDefault2"  style={{marginRight:"800px"}}>
    Female
  </label>
  
<div style={{height:"20px"}}></div>
  <label><h6 style={{marginRight:"700px"}}>Additional Preferences</h6></label>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="checkbox" />
  <label class="form-check-label" for="flexCheckDefault" style={{marginRight:"800px"}}>
    Window Seat
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" name="checkbox"/>
  <label class="form-check-label" for="flexCheckChecked"  style={{marginRight:"750px"}}>
    Extended Adventure
  </label>
</div>
</div>
<div>
<label for="formFileSm" class="form-label">Picture Upload</label>
<input class="form-control form-control-sm" id="formFileSm" type="file" name="Image" accept=".png" onchange="validateFileType()"/>
{/* <script type="text/javascript">
     function validateFileType(){
        var fileName = document.getElementById("fileName").value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (extFile=="png" || bytes <= "1000000"){
            //TO DO
        }else{
            alert("Only png files less than or equal to 1MB are allowed!");
        }   
    }
</script> */}
</div>

            <button className="btn btn-dark mt-3" type="submit" disabled={formik.isValid}>Submit</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Signup
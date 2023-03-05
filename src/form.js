import { useFormik } from "formik";

export function FormValidation(){
    const formik=useFormik({
        initialValues:{email:"venkat@gmail.com",password:""},
        
        onSubmit:(obj)=>{
            console.log(obj);
        }
    })
    
    console.log('initial',formik);


    return(
        <>
        <h3>Basic Forms---</h3>
        <form  onSubmit={formik.handleSubmit}>
            <p><input type='email' name="email" value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Enter email"/></p>
            <p><input type='password' name="password" 
                onChange={formik.handleChange}
                placeholder="Enter password"/></p>
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}
import { useFormik } from "formik";
import * as yup from 'yup'

const formvalidationSchema=yup.object({
    email:yup.string().email().required(),
    password:yup.string().min(8).required(),
})

export function FormValidation(){
    const formik=useFormik({
        initialValues:{email:"",password:""},
        validationSchema:formvalidationSchema,
        onSubmit:(obj)=>{
            console.log(obj);
        }
    })
    
    console.log('initial',formik);


    return(
        <>
        <h3>Basic Forms---</h3>
        <form  onSubmit={formik.handleSubmit}>
            <input type='email' name="email" value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter email"/>{formik.touched.email && formik.errors.email ? formik.errors.email:null}
            <input type='password' name="password" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter password"/>{formik.touched.password && formik.errors.password ? formik.errors.password:null}
            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}
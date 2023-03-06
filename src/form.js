import { useFormik } from "formik";
import * as yup from 'yup'
import { useState } from "react";

const formvalidationSchema=yup.object({
    email:yup.string().email().required(),
    password:yup.string().min(8).required(),
    confirm_password:yup.string().required().oneOf([yup.ref('password'),null],"password mismatch")
})

export function FormValidation(){
    const[hide,setHide]=useState(false)
    const[show,setShow]=useState(false)
    const formik=useFormik({
        initialValues:{email:"",password:"",confirm_password:""},
        validationSchema:formvalidationSchema,
        onSubmit:(obj,action)=>{
            console.log(obj);
            action.resetForm()
        }
    })
    
    console.log('initial',formik);


    return(
        <>
        <h3>Basic Forms---</h3>
        <form  onSubmit={formik.handleSubmit}>
            <div>
            <input type='email' name="email" value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter email"/>{formik.touched.email && formik.errors.email ? formik.errors.email:null}
            </div>
            <div>
            <input type={hide?"text":"password"}
            name="password" value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter password"/>
                <button type="button" onClick={()=>setHide(!hide)}>viewpassword</button>
                {formik.touched.password && formik.errors.password ? formik.errors.password:null}
            </div>

                <div>
                <input type={show?"text":"password"}
            name="confirm_password" value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirm your Password"/>
                <button type="button" onClick={()=>setShow(!show)}>viewpassword</button>
                {formik.touched.confirm_password && formik.errors.confirm_password ? formik.errors.confirm_password:null}
                </div>


            <button type="submit">Submit</button>
        </form>
        
        </>
    )
}
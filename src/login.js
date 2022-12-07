import React from 'react';
import {Formik,Form} from 'formik';
import * as yup from 'yup';
import FormikControl from './FormikControl';


function Login() {

    const initialValues = {
        email:'',
        password:''
    }

    const validationSchema = yup.object({
        email: yup.string()
       .email('Invalid email format')
       .required('Required'),

       password:yup.string()
       .required('Required')
    })

    const onSubmit = values =>{
        console.log('Form data',values)
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik => {
                return <form>
                    <FormikControl 
                    control='input'
                    type='email'
                    label='email'
                    name='email'/>

                <FormikControl 
                    control='input'
                    type='password'
                    label='password'
                    name='password'/>

                    <button type='submit' disabled={!formik.isValid}> Login </button>
                </form>
            }
        }
    </Formik>
  )
}

export default Login;
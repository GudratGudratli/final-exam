import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../../layout/footer';
import Navbar from '../../layout/navbar';
import './add.scss'
import axios from 'axios';

const Add = () => {
  return (
    <>
      <Navbar />
      <div className='add-formik'>
        <div className='formik-inner'>
          <Formik
            initialValues={{ imgUrl: '', title: '', description: '' }}
            validationSchema={Yup.object({
                imgUrl: Yup.string()
                .required('Required'),
                title: Yup.string()
                .max(30, 'Must be 20 characters or less')
                .required('Required'),
                description: Yup.string().required('Required'),
            })}
            onSubmit={(values) => {
              axios.post('http://localhost:3030/',values)
            }}
          >
            <Form>
              <div className='form'>

              <label htmlFor="imgUrl">ImgUrl</label>
              <Field name="imgUrl" type="text" placeHolder='enter image adress'/>
              <ErrorMessage name="imgUrl" />

              <label htmlFor="title">Title</label>
              <Field name="title" type="text" placeHolder='enter title'/>
              <ErrorMessage name="title" />

              <label htmlFor="description">Description</label>
              <Field name="description" type="text" placeHolder='enter description'/>
              <ErrorMessage name="description" />
              <button type="submit">Submit</button>
              </div>

            </Form>
          </Formik>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Add
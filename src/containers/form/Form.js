import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Form.scss';

export default function SignupForm() {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {formik => (
        <div className="container text-center center-div " id="form">
          <div className="w-100 border py-5 font-width-bold">
            <form onSubmit={formik.handleSubmit} className="p-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id="Name"
                  className="form-control"
                  placeholder="Enter your full names"
                  {...formik.getFieldProps('Name')}
                />
                {formik.touched.Name && formik.errors.Name ? (
                  <div className="error-message">{formik.errors.Name}</div>
                ) : null}
              </div>

              <div className="form-floating mb-3">
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="form-floating">
                <label htmlFor="message">Comments</label>
                <textarea
                  id="message"
                  {...formik.getFieldProps('message')}
                  className="form-control" // You can style this class for the textarea
                  placeholder="Leave a comment here"
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="error-message">{formik.errors.message}</div>
                ) : null}
              </div>

              <button type="submit" className="btn btn-primary rounded-pill mt-3">
                Submit
              </button>

              

            </form>
          </div>
        </div>
      )}
    </Formik>
  );
}

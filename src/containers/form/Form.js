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
        <form onSubmit={formik.handleSubmit}>
          <div className="form-div-main" id="form">
            <div className="centerContent">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  {...formik.getFieldProps('firstName')}
                  className="form-control"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error-message">{formik.errors.firstName}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  {...formik.getFieldProps('lastName')}
                  className="form-control"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error-message">{formik.errors.lastName}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  className="form-control"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  {...formik.getFieldProps('message')}
                  className="form-control" // You can style this class for the textarea
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className="error-message">{formik.errors.message}</div>
                ) : null}
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

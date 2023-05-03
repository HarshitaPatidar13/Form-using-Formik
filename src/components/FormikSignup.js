import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormikSignup.css';

const initialValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirmpassword: '',
  phone: '',
  address: '',
};

const onSubmit = (values, onSubmitProps) => {
  console.log('Form data', values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required('Please Enter a name'),
  username: Yup.string().required('Please Enter a username'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Please Enter your Email'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),

  phone: Yup.string()
    .matches(/^(?!(1|2|3|4|5))(\+91)?[1-9][0-9]{9}$/, 'Invalid phone number')
    .required('Required'),
  address: Yup.string().required('Required'),
});

function FormikSignup({ isSubmitting }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage className="error" name="name" component="div" />
        </div>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage className="error" name="username" component="div" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage className="error" name="email" component="div" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage className="error" name="password" component="div" />
        </div>
        <div className="form-control">
          <label htmlFor="confirmpassword">Confirm password</label>
          <Field type="password" id="confirmpassword" name="confirmpassword" />
          <ErrorMessage
            className="error"
            name="confirmpassword"
            component="div"
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage className="error" name="phone" component="div" />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field type="text" id="address" name="address" />
          <ErrorMessage className="error" name="address" component="div" />
        </div>
        <button type="reset">Reset data</button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default FormikSignup;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const initialValues = {
//   name: '',
//   username: '',
//   email: '',
//   password: '',
//   confirmpassword: '',
//   phone: '',
//   address: '',
// };

// const onSubmit = (values, { setSubmitting }) => {
//   console.log('Form data', values);
//   setSubmitting(false);
// };

// const validationSchema = Yup.object({
//   name: Yup.string().required('Please Enter a name'),
//   username: Yup.string().required('Please Enter a username'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Please Enter your Email'),
//   password: Yup.string()
//     .required('Please Enter your password')
//     .matches(
//       '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
//       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
//     ),
//   confirmpassword: Yup.string()
//     .required()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//   phone: Yup.string().phone('Invalid number').required('Required'),
//   address: Yup.string().required('Required'),
// });

// function FormikSignup() {
//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       <Form>
//         <div className="form-control">
//           <label htmlFor="name">Name</label>
//           <Field type="text" id="name" name="name" />
//           <ErrorMessage name="name" component="div" />
//         </div>
//         <div className="form-control">
//           <label htmlFor="username">Username</label>
//           <Field type="text" id="username" name="username" />
//           <ErrorMessage name="username" component="div" />
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">Email</label>
//           <Field type="email" id="email" name="email" />
//           <ErrorMessage name="email" component="div" />
//         </div>
//         <div className="form-control">
//           <label htmlFor="password">Password</label>
//           <Field type="password" id="password" name="password" />
//           <ErrorMessage name="password" component="div" />
//         </div>
//         <div className="form-control">
//           <label htmlFor="confirmpassword">Confirm password</label>
//           <Field type="password" id="confirmpassword" name="confirmpassword" />
//           <ErrorMessage name="confirmpassword" component="div" />
//         </div>
//         <div className="form-control">
//           <label htmlFor="phone">Phone</label>
//           <Field type="text" id="phone" name="phone" />
//           <ErrorMessage name="phone" component="div" />
//         </div>
//         <div className="form-control">
//           <label htmlFor="address">Address</label>
//           <Field type="text" id="address" name="address" />
//           <ErrorMessage name="address" component="div" />
//         </div>
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// }

// export default FormikSignup;

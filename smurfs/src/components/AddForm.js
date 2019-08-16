import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function AddForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="name" name="name" placeholder="name" />
      </div>
      <div>
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field type="age" name="age" placeholder="age" />
      </div>
      <div>
        {touched.height && errors.height && <p>{errors.height}</p>}
        <Field type="height" name="height" placeholder="height" />
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikAddForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || "",
    };
  },
//   validationSchema: Yup.object().shape({
//     name: Yup.string()
//       .name("Name not valid")
//       .required("Name is required"),
//     age: Yup.string()
//       .name("Age not valid")
//       .required("Age is required"),
//     height: Yup.string()
//       .name("Height not valid")
//       .required("Height is required")
//   }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.name === "Brainey") {
      setErrors({ name: "This smurf is already in the village" });
    } else {
      axios
        .post("http://localhost:3333/smurfs", values)
        .then(res => {
          console.log(res);
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err);
          setSubmitting(false);
        });
    }
  }
})(AddForm);

export default FormikAddForm;
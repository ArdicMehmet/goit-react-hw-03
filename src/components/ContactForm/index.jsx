import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./contactForm.module.css";
const ContactForm = ({ handleClick }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters or more")
          .max(50, "Must be 50 characters or less")
          .required("Required"),
        number: Yup.string()
          .min(3, "Must be at least 3 characters or more")
          .max(50, "Must be 50 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleClick({
          id: `${nanoid()}`,
          name: values.name,
          number: values.number,
        });
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form className={styles.container}>
        <div className={styles.formField}>
          <label htmlFor="name">Name</label>
          <Field className={styles.inputText} name="name" type="text" />
          <span className={styles.error}>
            <ErrorMessage name="name" />
          </span>
        </div>

        <div className={styles.formField}>
          <label htmlFor="number">Number</label>
          <Field className={styles.inputText} name="number" type="text" />
          <span className={styles.error}>
            <ErrorMessage name="number" />
          </span>
        </div>

        <button className={styles.submitBtn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

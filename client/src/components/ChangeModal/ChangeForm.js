import React from 'react';
import { ButtonGreen } from '../Common/Buttons/Buttons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Layout } from '../Common/Loading/Layout';
import { FormInput } from '../Common/Inputs/Inputs';
import { FormTitle } from '../Common/styled/components';
import styles from './styles/styles.module.css';
import * as API from '../../api/api';
import { validatePassword, required } from '../../utils/validators';

const ChangePasswordForm = ({ openAlert, login }) => {
    return (
        <Formik
            initialValues={{ password: '', password2: '', old_pass: '', error: '' }}
            validate={(values) => {
                let errors = {};
                if(values.password !== values.password2) {
                    errors.password2 = "Passwords are not equal";
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
                try {
                    let response = await API.changePasswordRequest({...values, login });
                    setSubmitting(false);
                    if(response.resultCode === 0) {
                        resetForm();
                        openAlert();
                    } else {
                        setErrors({ error: response.message })
                    }
                } catch (err) {
                    setErrors({ error: "Something went wrong, try again later" })
                }
            }}
            >
            {({ isSubmitting }) => (
                <Form autoComplete={"off"} className={styles.changeForm}>
                    <FormTitle size={20}>Change password</FormTitle>
                    <div className={styles.changeFormGroup}>
                        <Field name="old_pass" label="old" validate={required} type="password" placeholder="old password" component={FormInput} />
                    </div>
                    <div className={styles.changeFormGroup}>
                        <Field name="password" label="new" validate={validatePassword} type="password" placeholder="new password" component={FormInput} />
                    </div>
                    <div className={styles.changeFormGroup}>
                        <Field name="password2" label="repeat" validate={validatePassword} type="password" placeholder="repeat new password" component={FormInput} />
                    </div>
                    <ErrorMessage name="error" className={styles.changeFormGlobalError} component="div" />
                    <div className={styles.changeFormButtons}>
                        <ButtonGreen text="Sign in" type="submit" disabled={isSubmitting} />
                    </div>
                    <Layout show={isSubmitting} />
                </Form>
            )}
        </Formik>
    )
}

export default ChangePasswordForm;
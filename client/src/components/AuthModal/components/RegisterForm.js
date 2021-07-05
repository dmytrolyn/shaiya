import React, { useState } from 'react';
import { Layout } from '../../Common/Loading/Layout';
import { FormInput } from '../../Common/Inputs/Inputs';
import { ButtonGreen } from '../../Common/Buttons/Buttons';
import { ContentLine, FormTitle } from '../../Common/styled/components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../styles/styles.module.css';
import cn from 'classnames';
import { validateLogin, validatePassword } from '../../../utils/validators';
import * as API from '../../../api/api';

const RegisterForm = ({ swapState }) => {
    const [success, setState] = useState(false);

    return (
        <Formik
            initialValues={{ login: '', password: '', password2: '', error: '' }}
            validate={(values) => {
                let errors = {};
                if(values.password !== values.password2) {
                    errors.password2 = "Passwords are not equal";
                }
                return errors;
            }}
            onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
                try {
                    let res = await API.makeRegisterRequest(values);
                    setSubmitting(false);
                    if(res.resultCode === 0) {
                        resetForm();
                        setState(true);
                        setTimeout(() => setState(false), 4000);
                    } else {
                        setErrors({ error: res.message })
                    }
                } catch(err) {
                    setErrors({ error: "Something went wrong, try later" })
                }
            }}
            >
            {({ isSubmitting }) => (
                <Form className={styles.modalForm} autoComplete={"off"}>
                    <FormTitle>Sign up</FormTitle>
                    <ContentLine />
                    <div className={styles.modalFormGroup}>
                        <Field label="login" validate={validateLogin} type="text" name="login" placeholder="login" component={FormInput} />
                    </div>
                    <div className={styles.modalFormGroup}>
                        <Field label="password" validate={validatePassword} type="password" autoComplete={"off"} placeholder="password" name="password" component={FormInput} />
                    </div>
                    <div className={styles.modalFormGroup}>
                        <Field label="repeat" validate={validatePassword} type="password" placeholder="repeat password" name="password2" id="password2" component={FormInput} />
                    </div>
                    <ErrorMessage name="error" className={styles.modalFormGlobalError} component="div" />
                    {success && <div className={styles.modalFormSuccess}>Your account was successfully registered</div>}
                    <div className={styles.modalFormButtons}>
                        <div className={styles.modalFormOptions}>
                            <div onClick={swapState} className={cn(styles.modalFormOption, styles.modalFormOptionLink, "c-pointer")}>Back to login</div>
                        </div>
                        <div className={styles.modalFormButtonWrap}>
                            <ButtonGreen text="Sign up" type="submit" disabled={isSubmitting} />
                        </div>
                    </div>
                    <Layout show={isSubmitting} />
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm;
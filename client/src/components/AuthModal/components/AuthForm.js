import React from 'react';
import { Layout } from '../../Common/Loading/Layout';
import { FormInput } from '../../Common/Inputs/Inputs';
import { ContentLine, FormTitle } from '../../Common/styled/components';
import { ButtonGreen } from '../../Common/Buttons/Buttons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../styles/styles.module.css';
import cn from 'classnames';
import { required } from '../../../utils/validators';
import * as API from '../../../api/api';

const AuthForm = ({ swapState, login, close }) => {
    return (
        <Formik
            initialValues={{ login: '', password: '', error: '' }}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
                try {
                    let response = await API.makeLoginRequest(values);
                    if(response.data.resultCode === 0) {
                        let me = await API.getUserRequest();
                        if(me.resultCode === 0) {
                            login(me.data);
                            close();
                        }
                    } else {
                        setErrors({ error: response.data.message })
                    }
                    setSubmitting(false);
                } catch (err) {
                    setErrors({ error: "Something went wrong, try again later" })
                }
            }}
            >
            {({ isSubmitting }) => (
                <Form autoComplete={"off"} className={styles.modalForm}>
                    <FormTitle>Sign in</FormTitle>
                    <ContentLine />
                    <div className={styles.modalFormGroup}>
                        <Field name="login" label="login" validate={required} type="text" placeholder="login" component={FormInput} />
                    </div>
                    <div className={styles.modalFormGroup}>
                        <Field name="password" label="password" validate={required} type="password" placeholder="password" component={FormInput} />
                    </div>
                    <ErrorMessage name="error" className={styles.modalFormGlobalError} component="div" />
                    <div className={styles.modalFormButtons}>
                        <div className={styles.modalFormOptions}>
                            <div className={styles.modalFormOption}>Don't have an account yet?</div>
                            <div onClick={swapState} className={cn(styles.modalFormOption, styles.modalFormOptionLink, "c-pointer")}>Sign up</div>
                        </div>
                        <div className={styles.modalFormButtonWrap}>
                            <ButtonGreen text="Sign in" type="submit" disabled={isSubmitting} />
                        </div>
                    </div>
                    <Layout show={isSubmitting} />
                </Form>
            )}
        </Formik>
    )
}

export default AuthForm;
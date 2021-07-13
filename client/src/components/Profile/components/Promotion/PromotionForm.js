import React, { useState } from 'react';
import { ButtonGreen } from '../../../Common/Buttons/Buttons';
import { FormInput } from '../../../Common/Inputs/Inputs';
import { Formik, Form, ErrorMessage } from 'formik';
import { Layout } from '../../../Common/Loading/Layout';
import { FormSingleTitle } from '../../../Common/styled/components';
import styles from '../../styles/styles.module.css';
import * as API from '../../../../api/api';
import SequenceGroup from './components/SequenceGroup';

const PromotionForm = () => {
    const [state, setState] = useState({ status: false, message: "" });

    const sequence = { name: "part", count: 4, size: 4, separator: "-" };

    const sequenceValues = [...Array(sequence.count)].map((s, index) => `${sequence.name}${++index}`)
    .reduce((result, key) => { result[key] = ''; return result }, {});

    return (
        <Formik
            initialValues={{ ...sequenceValues, error: '' }}
            validate={(values) => {
                let errors = {};
                let sequenceValues = Object.keys(values).filter(v => v.includes(sequence.name));
                if(sequenceValues.some(v => values[v] === "")) errors.error = "All fields are required";
                if(sequenceValues.some(v => values[v].length !== sequence.size)) errors.error = "Each field should contain 4 characters";
                return errors;
            }}
            onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
                try {
                    let keys = Object.keys(sequenceValues);
                    let code = keys.reduce((r, c, index) => 
                        r += index !== keys.length - 1 ? `${values[c]}${sequence.separator}` : values[c], "");
                    let response = await API.getPromotionRewardRequest({ code });
                    setSubmitting(false);
                    if(response.resultCode === 0) {
                        resetForm();
                        setState({ status: true, message: response.message });
                        setTimeout(() => setState({ status: false, message: "" }), 3000);
                    } else {
                        setErrors({ error: response.message })
                    }
                } catch (err) {
                    setErrors({ error: "Something went wrong, try again later" })
                }
            }}
            >
            {({ isSubmitting }) => (
                <Form className={styles.changeForm}>
                    <FormSingleTitle size={20}>Promotion code</FormSingleTitle>
                    <SequenceGroup type="text" placeholder="XXXX" component={FormInput} separator={sequence.separator} name={sequence.name} count={sequence.count} size={sequence.size} />
                    <ErrorMessage name="error" className={styles.changeFormGlobalError} component="div" />
                    {state.status && <div className={styles.changeFormSuccess}>{state.message}</div>}
                    <div className={styles.changeFormButtons}>
                        <ButtonGreen text="Submit" type="submit" disabled={isSubmitting} />
                    </div>
                    <Layout show={isSubmitting} />
                </Form>
            )}
        </Formik>
    )
}

export default PromotionForm;
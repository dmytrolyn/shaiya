import React, { useEffect, useRef } from 'react';
import { Input } from './styled/components';
import { useField } from 'formik';
import { Label } from '../../Common/Labels/styled/components';
import { FormError } from '../../Common/styled/components';

export const FormInput = ({ label, focus, ...props }) => {
    const [field, meta] = useField(props.field, props);
    const ref = useRef();

    useEffect(() => {
        if(focus) ref.current.focus();
    }, [focus])

    return (
        <>
            <Input ref={ref} err={(meta.touched && meta.error) || props.form.errors.error} {...field} {...props} />
            <Label>{label}</Label>
            {meta.touched && meta.error && <FormError>{meta.error}</FormError>}
        </>
    );
};

export const FormButton = ({ text, ...props}) => {

}
import React from 'react';
import { FormInput as Input } from './styled/components';
import { useField } from 'formik';
import { FormLabel } from '../../Common/Labels/styled/components';
import { FormError } from '../../Common/styled/components';

export const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props.field, props.form);

    return (
        <>
            <Input err={(meta.touched && meta.error) || props.form.errors.error} {...field} {...props} />
            <FormLabel>{label}</FormLabel>
            {meta.touched && meta.error && <FormError>{meta.error}</FormError>}
        </>
    );
};
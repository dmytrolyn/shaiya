import { Field } from 'formik';
import React, { useState } from 'react';
import styles from '../../../styles/styles.module.css';

const SequenceGroup = ({ name, count, size, separator, ...props }) => {
    const vals = [...Array(count)];

    const [current, setState] = useState(0);
    
    const handleTransition = (e) => {
        if(e.target.value.length === size) {
            if(current !== count - 1) setState(prev => prev + 1);
            else setState(null);
        }
    }

    return <div onChange={handleTransition} className={styles.flexFormGroup}>
        {vals.map((s, index) => <React.Fragment key={`${name}${index + 1}`}>
            <Field maxLength={size} onClick={() => setState(index)} focus={current === index} name={`${name}${index + 1}`} {...props} />
            {index + 1 !== count && <span className={styles.inputSeparator}>{separator}</span>}
        </React.Fragment>)}
    </div>
}

export default SequenceGroup;
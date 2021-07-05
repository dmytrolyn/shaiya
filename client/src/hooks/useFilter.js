import { useState, useEffect } from 'react';

const filter = (data, values, key, cb) => data.filter(item => values.some(val => cb(item[key], val)));

const useFilter = (dataset, key, cb) => {
    const [data, setData] = useState(dataset);
    const [criteria, setCriteria] = useState(null);

    useEffect(() => {
        if(criteria) {
            setData(filter(dataset, criteria, key, cb));
        } else {
            setData(dataset);
        }
    }, [dataset, criteria, key, cb])

    return [data, setCriteria];
}

export default useFilter;
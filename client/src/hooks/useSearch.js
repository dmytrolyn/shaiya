import { useState, useEffect } from 'react';

const search = (data, attr, val) => data.filter(item => item[attr].toLowerCase().includes(val.toLowerCase()));

const useSearch = (dataset, attr) => {
    const [data, setData] = useState(dataset);
    const [searchVal, setSearchVal] = useState(null);

    const changeData = (val) => {
        setSearchVal(val);
    }

    useEffect(() => {
        if(searchVal) {
            setData(search(dataset, attr, searchVal));
        } else {
            setData(dataset);
        }
    }, [dataset, attr, searchVal])

    return [data, changeData];
}

export default useSearch;
import { useState, useEffect } from 'react';

const paginate = (array, page, all, options) => {
    if(page === 1) return [...array].splice(0, options.pageSize * page);
    else if (page < all && page > 1) return [...array].splice(options.pageSize * (page - 1), options.pageSize);
    else if (page === all) return [...array].splice(options.pageSize * (page - 1));
}

const validatePageNumber = (p, all) => {
    if (p >= 1 && p <= all) return p;
    else if(p > all) return --p;
    else if(p < 1) return ++p;
}

const setIndex = (array) => array.map((item, index) => ({ index: ++index, ...item }));

const usePagination = (dataset, pageSize, hasIndex = true) => {
    const size = Math.ceil(dataset.length / pageSize);

    const [data, setData] = useState(paginate(dataset, 1, size, { pageSize }));
    const [pages, setPages] = useState({ current: 1, all: size });

    const changePage = (p) => {
        if(p !== pages.current) {
            setPages({ current: validatePageNumber(p, pages.all), all: pages.all });
        }
    }

    useEffect(() => {
        if(pages.all === size) {
            setData(paginate(hasIndex ? setIndex(dataset) : dataset, pages.current, pages.all, { pageSize }));
        } else {
            setPages({ current: 1, all: size });
        }
    }, [dataset, size, pageSize, pages, hasIndex])

    return [data, pages.current, pages.all, changePage];
};

export default usePagination;
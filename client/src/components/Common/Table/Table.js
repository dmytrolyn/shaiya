import React from 'react';
import { Table as TableComponent , TableHead, TableRow, TD, TH, } from './styled/components';
import { trKeys, transformValues } from './utils/utils';

const Table = ({ size, data, titles, hasIndex }) => {
    
    const transformedData = data.map((item, index) => {
        return hasIndex ? { index: ++index, ...item } : item
    }).map((item) => transformValues(item, size));

    const transformedKeys = hasIndex ?
    ["index", ...titles].map(key => trKeys[key] || key) : 
    titles.map(key => trKeys[key] || key);

    return (
        <TableComponent size={size}>
            <TableHead size={size}>
                <TableRow size={size}>
                    {transformedKeys.map(key => <TH key={key} size={size}>{key}</TH>)}
                </TableRow>
            </TableHead>
            <tbody>
                {transformedData.map((item, index) => {
                    let keys = Object.keys(item);
                    return <TableRow key={index} size={size}>
                        {keys.map(key => <TD key={key} size={size}>{item[key]}</TD>)}
                    </TableRow>
                })}
            </tbody>
        </TableComponent>
    )
}

export default Table;
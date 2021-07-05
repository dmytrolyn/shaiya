import { Table as TableComponent , TableHead, TableRow, TD, TH, } from './styled/components';
import { trKeys, transformValues } from './utils/utils';

const transformedData = (data, size, hasIndex) => data.map((item, index) => {
    return hasIndex ? { index: ++index, ...item } : item
}).map((item) => transformValues(item, size));

const transformedKeys = (titles, hasIndex) => hasIndex ?
["index", ...titles].map(key => trKeys[key] || key) : 
titles.map(key => trKeys[key] || key);

const Table = ({ size, data, titles, hasIndex }) => {
    return (
        <TableComponent size={size}>
            <TableHead size={size}>
                <TableRow size={size}>
                    {transformedKeys(titles, hasIndex).map((key, index) => <TH key={index} size={size}>{key}</TH>)}
                </TableRow>
            </TableHead>
            <tbody>
                {transformedData(data, size, hasIndex).map((item, index) => {
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
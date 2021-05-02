import React from 'react';
import { InfoWrap, Title, SingleTitle, ListTitle, ListItem, Highlight, Heading } from './styled/components';

const components = {
    title: (data) => <Title key={data}>{data}</Title>,
    singleTitle: (data) => <SingleTitle key={data}>{data}</SingleTitle>,
    heading: (data) => <Heading key={data}>{data}</Heading>,
    listTitle: (data) => <ListTitle key={data.text} color={data.color}>{data.text}</ListTitle>,
    listItem: (data) => <div key={data.text}><ListItem>{data.text}</ListItem><Highlight>{data.highlight}</Highlight></div>,
}

const insertData = (object) => Object.keys(object).map(key => {
    let func = components[key];
    if(func) return func(object[key])
    else return object[key];
});

const Info = ({ data }) => {
    return (
        <InfoWrap>
            {data.map(item => insertData(item))}
        </InfoWrap>
    )
}

export default Info;
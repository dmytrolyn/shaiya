import React from 'react';
import Table from '../../components/Common/Table/Table';
import usePagination from '../../hooks/usePagination';
import { ContentWrap, ContentSingleTitle, TableWrap } from '../../components/Common/styled/components';
import Pagination from '../../components/Common/Pagination/Pagination';

const Kills = ({ kills }) => {
    const [data, current, all, changePage] = usePagination(kills.data, 20, true);

    return (
        <ContentWrap>
            <ContentSingleTitle>Kill Logs</ContentSingleTitle>
            <TableWrap>
                <Table data={data} titles={kills.titles} hasIndex={true} />
            </TableWrap>
            <Pagination all={all} current={current} setPage={changePage} />
        </ContentWrap>
        
    )
}

export default Kills;
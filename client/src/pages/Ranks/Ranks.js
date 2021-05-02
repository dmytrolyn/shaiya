import React from 'react';
import Table from '../../components/Common/Table/Table';
import { ContentWrap, ContentTitle, ContentOptions, ContentOption, TableWrap } from '../../components/Common/styled/components';
import { Label } from '../../components/Common/Labels/styled/components';
import { Input } from '../../components/Common/Inputs/styled/components';
import { Select } from '../../components/Common/Selects/Selects';
import Pagination from '../../components/Common/Pagination/Pagination';
import usePagination from '../../hooks/usePagination';
import useSearch from '../../hooks/useSearch';
import useFilter from '../../hooks/useFilter';

const factionOptions = [
    { value: [], label: "All" },
    { value: [0, 1], label: "AoL" },
    { value: [2, 3], label: "UoF" },
]

const levelOptions = [
    { value: [], label: "All" },
    { value: [[0, 30]], label: 30 },
    { value: [[30, 70]], label: 70 },
]

const equal = (val, arg) => val === arg;
const range = (val, [r1, r2]) => r1 < val && val <= r2;

const Ranks = ({ ranks }) => {
    const [fData, setFData] = useFilter(ranks.data, "Family", equal);
    const [lData, setLData] = useFilter(fData, "Level", range);
    const [searchData, setSearchValue] = useSearch(lData, "CharName")
    const [data, page, all, changePage] = usePagination(searchData, 20);

    return (
        <ContentWrap>
            <ContentOptions>
                <ContentTitle>Ranks</ContentTitle>
                <ContentOption>
                    <Select onChange={(option) => { setFData(option.value) }} label="Faction" id="faction" options={factionOptions} defaultValue={factionOptions[0]} />
                </ContentOption>
                <ContentOption>
                    <Select onChange={(option) => { setLData(option.value) }} label="Level" id="level" options={levelOptions} defaultValue={levelOptions[0]} />
                </ContentOption>
                <ContentOption>
                    <Input onChange={(e) => setSearchValue(e.target.value)} autoComplete={"off"} type="text" id="search" placeholder="Search name.." />
                    <Label htmlFor="search">Name</Label>
                </ContentOption>
            </ContentOptions>
            <TableWrap>
                <Table data={data} titles={ranks.titles} hasIndex={true} />
            </TableWrap>
            <Pagination all={all} current={page} setPage={changePage} />
        </ContentWrap>
    )
}

export default Ranks;
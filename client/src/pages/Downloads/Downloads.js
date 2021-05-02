import React from 'react';
import { ContentWrap, ContentSingleTitle, ContentDesc, TableWrap } from '../../components/Common/styled/components';
import Table from '../../components/Common/Table/Table';
import Download from '../../components/Download/Download';

const downloadRequirements = [
    { " ": "Storage", Minimal: "1.5Gb", Recommended: "2Gb" },
    { " ": "Processor", Minimal: "1.8GHz", Recommended: "2.3GHz" },
    { " ": "RAM", Minimal: "1024Mb", Recommended: "2Gb" },
    { " ": "Video Card", Minimal: "256Mb", Recommended: "521Mb" },
    { " ": "Connection", Minimal: "1Mbps", Recommended: "2Mbps" },
]

const titles = [" ", "Minimal", "Recommended"];

const Downloads = () => {
    return (
        <ContentWrap>
            <ContentSingleTitle>Full game client</ContentSingleTitle>
            <ContentDesc>Required space: 1.7Gb</ContentDesc>
            <Download />
            <ContentSingleTitle>System Requirements</ContentSingleTitle>
            <TableWrap>
                <Table data={downloadRequirements} titles={titles} />
            </TableWrap>
        </ContentWrap>
    )
}

export default Downloads;
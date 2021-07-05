import styled from 'styled-components';
import { ContentSection } from '../../Common/styled/components';

export const SideBar = styled(ContentSection)`
    width: ${({ width }) => `${width}%` || '100%'};
    margin: 0;
`;
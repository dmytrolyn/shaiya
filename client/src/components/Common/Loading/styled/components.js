import styled from 'styled-components';

export const LoadingLayout = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: ${props => props.show ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: rgba(100,100,100, 0.1);
`;
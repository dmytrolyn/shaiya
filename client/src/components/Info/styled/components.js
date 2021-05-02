import styled from 'styled-components';

export const InfoWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 30px;
`

export const Title = styled.h1`
    font-family: Philosopher;
    font-weight: 500;
    font-size: 40px;
    color: #cc7954;
`;

export const SingleTitle = styled(Title)`
    text-align: center;
`;

export const ListTitle = styled.h3`
    font-family: Philosopher;
    font-weight: 400;
    font-size: 24px;
    color: ${props => props.color || "#cc7954"};

    margin-top: 20px;
`;

export const Heading = styled.h2`
    font-family: Philosopher;
    font-weight: 400;
    font-size: 30px;
    color: #cc7954;

    margin-top: 40px;

    width: 100%;

    position: relative;

    &::after {
        content: "";
        position: absolute;

        width: 100%;
        height: 0.5px;
        background: #cc7954;
        bottom: -5px;
        left: 0;
    }
`

export const ListItem = styled.span`
    font-family: Open-Sans;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;

    vertical-align: middle;
    margin-top: 5px;
    color: hsla(0, 0%, 100%, .4);

    &::before {
        content: "- ";
    }
`;

export const Highlight = styled.span`
    color: yellow;
    font-family: Open-Sans;
    font-weight: 400;
    font-size: 16px;

    margin-left: 10px;
    vertical-align: middle;
`
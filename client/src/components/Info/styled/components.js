import styled from 'styled-components';

export const InfoWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 30px;
`

export const Title = styled.h1`
    font-family: Philosopher;
    font-weight: 600;
    font-size: 40px;
    background: linear-gradient(0deg, #972a18, #ffe294);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #ffdda9;
`;

export const SingleTitle = styled(Title)`
    text-align: center;
`;

export const ListTitle = styled.h3`
    font-family: Philosopher;
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 1px;
    margin-bottom: 3px;
    color: ${props => props.color || "#cc7954"};

    margin-top: 20px;
`;

export const Heading = styled.h2`
    font-family: Philosopher;
    font-weight: 400;
    font-size: 24px;
    color: #cc7954;

    margin-top: 40px;

    width: 100%;

    position: relative;

    &::after {
        content: "";
        position: absolute;

        width: 100%;
        height: 1px;
        background: #cc7954;
        bottom: -5px;
        left: 0;
    }
`

export const ListItem = styled.span`
    font-family: Philosopher;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1px;

    vertical-align: middle;
    margin-top: 5px;
    color: hsla(0, 0%, 100%, .7);

    &::before {
        content: "- ";
    }
`;

export const Highlight = styled.span`
    color: yellow;
    font-family: Open-Sans;
    font-weight: 400;
    font-size: 18px;

    margin-left: 10px;
    vertical-align: middle;
`
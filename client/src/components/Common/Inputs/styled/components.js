import styled from 'styled-components';

export const Input = styled.input`
    width: calc(100% - 40px);
    height: 46px;
    border: ${props => props.err ? '1px solid rgb(99, 22, 22)' : '1px solid hsla(0,0%,100%,.3)'};
    background: none;
    padding: 0 20px;
    font-family: OpenSans;
    font-size: 16px;
    line-height: 100px;
    font-weight: 400;
    color: #fff;
    outline: none;
    transition: .5s;

    ~ label {
        color: ${props => props.err ? "rgb(150, 33, 33)" : '#696868' };
    }

    :focus {
        border: 1px solid #cc7954;
    }

    :focus ~ label {
        color: #cc7954;
    }
`;
import React, { useRef } from 'react';
import ReactSelect from 'react-select';
import { pointer } from '../../../utils/cPointer';
import { Label } from '../Labels/styled/components';

const customStyles = {
    control: (styles, state) => {
        return {
            height: '46px',
            width: '150px',
            border: state.menuIsOpen ? '1px solid #cc7954' : '1px solid hsla(0,0%,100%,.3)',
            background: 'none',
            transition: '.5s',
            outline: 'none',
            fontFamily: 'OpenSans',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '100px',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between'
        }
    },
    option: (styles, state) => ({
        background: state.isFocused ? '#cc7954' : 'transparent',
        fontFamily: 'OpenSans',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '100px',
        padding: '0 20px',
        cursor: pointer,
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        outline: 'none'
    }),
    valueContainer: (styles, state) => ({
        width: '75%',
        height: '100%',
    }),
    singleValue: () => ({
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        padding: '0 20px'
    }),
    indicatorSeparator: () => ({
        borderLeft: '1px solid hsla(0,0%,100%,.3)',
        height: '100%',
        color: 'hsla(0,0%,100%,.3)'
    }),
    indicatorContainer: (styles, state) => ({
        width: '30%',
        height: '100%',
        color: state.isSelected ? '#fff' : 'hsla(0,0%,100%,.3)',
        display: 'flex',
        padding: '8px',
        transition: 'color 150ms',
        boxSizing: 'border-box'
    }),
    menu: (styles, state) => ({
        width: '100%',
        background: '#0a0c15',
        color: '#fff',
        border: '0.5px solid hsla(0,0%,100%,.3)',
        position: 'absolute',
        zIndex: 200,
        padding: 0,
        top: '105%',
        left: '-1px'
    }),
    menuList: (styles, state) => ({
        maxHeight: '300px',
    }),
    input: () => ({
        display: 'none',
        width: 0
    })
}

export const Select = ({ label, id, options, ...props}) => {
    const ref = useRef();

    return (
        <>
            <ReactSelect id={id} options={options} onMenuOpen={() => { ref.current.style.color = "#cc7954" }} onMenuClose={() => { ref.current.style.color = "hsla(0,0%,100%,.3)" }} styles={customStyles} {...props} />
            <Label ref={ref} htmlFor={id} >{label}</Label>
        </>
    )
}
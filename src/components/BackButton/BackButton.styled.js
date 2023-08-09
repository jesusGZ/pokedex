import styled from "styled-components";

const color = '#FFF';
const pxls = '3px';

export const BackButtons = styled.div`
    color: ${color};
    width: ${pxls};
    cursor: pointer;
    position: absolute;
    z-index: 999;
    left: 35px;
    top: 40px;
    height: ${pxls};
    width: 25px;
    background-color: ${color};

    &::before{
        content: '';
        display: block;
        position: absolute;
        border: ${pxls} solid ${color};
        border-top-color: transparent;
        border-right-color: transparent;
        height: 10px;
        width: 10px;
        left: 0;
        top: calc( ${pxls} * -2 );
        transform: rotate( 45deg );
    }
`; 
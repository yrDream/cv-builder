import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { useState } from 'react';

import Descr from '../Descr';

const Wrapper = styled.div`
display: inline-block;
width: 33%;
margin: 0.4rem 0;`

const Input = styled.input`
width: 97%;
height: 6px;
margin: 0 0.4rem;
overflow: hidden;
cursor: pointer;
-webkit-appearance: none;

&::-webkit-slider-runnable-track{
    background-color: #ddd;
}

&::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    background-color: dodgerblue;
    box-shadow: -100vw 0 0 100vw dodgerblue;
    border: 1px solid #999;
}`

const Range = () => {

    const [value, setValue] = useState(90);

    return <Wrapper>
        <Descr>Name - {value}</Descr>

       <Input value={value}  min='0' max='100' step='10' type="range" onChange={(e) => setValue(e.target.value)}/>
    </Wrapper>;
};

// Range.propTypes = {
//     isSquare: propTypes.bool,
// }

// Range.defaultProps = {
//     isSquare: false,
// }

export default Range;
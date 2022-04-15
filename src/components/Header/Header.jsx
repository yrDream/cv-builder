import React from 'react'

import propTypes from 'prop-types'

import './Header.scss'
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg';

const Header = ({onClick}) => {
    return(
        <header className='Header'>
            <div className="ui-container">
                <div className="Header_content">
                    <span className='Header_logo'>CV builder</span>
                    <button className='ui-button isLink' onClick={onClick}>
                    <PrintIcon style={{marginRight: '0.6rem' }}/>
                    Print</button>
                    
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    onClick: propTypes.func,
}

Header.defaultProps = {
    onClick: () => {},
}

export default Header;
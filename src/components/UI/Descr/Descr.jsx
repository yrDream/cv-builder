import React from 'react';

import classNames from 'classnames';
import propTypes from 'prop-types';


const Descr = ({ isPrimary, isSecondary, className, children, ...attrs }) => {

    const classes = classNames('ui-text', className, {
        isPrimary: isPrimary,
        isSecondary: isSecondary,
    })
    return (
        <p className={classes} {...attrs}>
            {children}
        </p>
    )
};

Descr.propTypes = {
    isPrimary: propTypes.bool,
    isSecondary: propTypes.bool,
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

Descr.defaultProps = {
    isPrimary: false,
    isSecondary: false,
    className: '',
}

export default Descr;
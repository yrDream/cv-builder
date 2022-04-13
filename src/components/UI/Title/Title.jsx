import React from 'react';

import classNames from 'classnames';
import propTypes from 'prop-types';


const Title = ({ size, className, children,  ...attrs  }) => {

    const classes = classNames(`ui-title-${size}`, className);

    return (
        <p className={classes} {...attrs}> {children} </p>
    )
};

Title.propTypes = {
    size: propTypes.oneOf(['1','2', '3', '4', '5']),
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

Title.defaultProps = {
    size: '1',
    className: '',
}

export default Title;
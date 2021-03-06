import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const defaultProps = {
  ariaLabel: '',
  description: 'card action',
};

const CardActionItem = ({
  className,
  id,
  ariaLabel,
  iconName,
  description,
  ...other
}) => {
  const cardActionItemClasses = classNames({
    'bx--app-actions__button': true,
    [className]: className,
  });

  return (
    <button
      {...other}
      className={cardActionItemClasses}
      id={id}
      aria-label={ariaLabel}>
      <Icon
        className="bx--app-actions__button--icon"
        name={iconName}
        description={description}
      />
    </button>
  );
};

CardActionItem.propTypes = propTypes;
CardActionItem.defaultProps = defaultProps;

export default CardActionItem;

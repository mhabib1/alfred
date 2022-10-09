import React, { Children } from 'react';
import cx from 'classnames';
import styles from '../styles/modules/button.module.scss';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ type, variant = 'primary', children, ...rest }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={cx(styles.button, styles[`button--${buttonTypes[variant]}`])}
      //   className={getClasses([
      //     styles.button,
      //     styles[`button--${buttonTypes[variant]}`],
      //   ])}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select className={cx(styles.button, styles.button__select)} {...rest}>
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;

// Packages
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { RootElement } from '@plitzi/plitzi-sdk';

// Styles
import '../Assets/index.scss';

const emptyObject = {};

const AntdButton = forwardRef((props, ref) => {
  const { children, className = '', internalProps = emptyObject, intent = 'primary' } = props;

  return (
    <RootElement
      ref={ref}
      internalProps={internalProps}
      className={classNames('plitzi-component__antd-button', className)}
    >
      <Button type={intent}>{children}</Button>
    </RootElement>
  );
});

AntdButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  internalProps: PropTypes.object,
  intent: PropTypes.oneOf(['primary', 'secondary', 'danger', 'link', 'default'])
};

export default AntdButton;

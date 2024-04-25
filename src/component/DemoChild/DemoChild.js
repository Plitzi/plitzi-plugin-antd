// Packages
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { RootElement, usePlitziServiceContext } from '@plitzi/plitzi-sdk';

// Styles
import '../Assets/index.scss';

const emptyObject = {};

const DemoChild = forwardRef((props, ref) => {
  const { className = '', internalProps = emptyObject, content = 'Demo Child Component' } = props;
  const {
    settings: { previewMode }
  } = usePlitziServiceContext();

  if (!previewMode) {
    return (
      <RootElement
        ref={ref}
        internalProps={internalProps}
        className={classNames('plitzi-component__demo-child text-red-500', className)}
      >
        Hi, this is a Plitzi demo child component Preview Mode False
      </RootElement>
    );
  }

  return (
    <RootElement
      ref={ref}
      internalProps={internalProps}
      className={classNames('plitzi-component__demo-child', className)}
    >
      {content}
    </RootElement>
  );
});

DemoChild.propTypes = {
  className: PropTypes.string,
  internalProps: PropTypes.object,
  content: PropTypes.string
};

export default DemoChild;

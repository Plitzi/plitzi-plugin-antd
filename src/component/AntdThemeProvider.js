// Packages
import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { RootElement, usePlitziServiceContext } from '@plitzi/plitzi-sdk';
import ConfigProvider from 'antd/es/config-provider';
import { StyleProvider } from '@ant-design/cssinjs/es/StyleContext';

// Styles
import './Assets/index.scss';

const emptyObject = {};

const AntdThemeProvider = forwardRef((props, ref) => {
  const { className = '', children, internalProps = emptyObject, theme = emptyObject } = props;
  const {
    utils: { getWindow }
  } = usePlitziServiceContext();

  const head = useMemo(() => {
    if (!getWindow && typeof window !== 'undefined') {
      return window.document?.head;
    }

    return getWindow()?.document?.head;
  }, [getWindow]);

  const finalTheme = useMemo(() => {
    if (typeof theme === 'string') {
      try {
        return JSON.parse(theme);
      } catch (error) {
        return emptyObject;
      }
    }

    return theme;
  }, []);

  return (
    <RootElement
      ref={ref}
      internalProps={internalProps}
      className={classNames('plitzi-component__antd-theme-provider', className)}
    >
      {!head && <div>Head not found</div>}
      {head && (
        <StyleProvider autoClear container={head}>
          <ConfigProvider theme={finalTheme}>{children}</ConfigProvider>
        </StyleProvider>
      )}
    </RootElement>
  );
});

AntdThemeProvider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  internalProps: PropTypes.object,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default AntdThemeProvider;

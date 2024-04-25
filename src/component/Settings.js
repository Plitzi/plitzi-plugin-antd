// Packages
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const emptyObject = {};

const Settings = props => {
  const { theme = '', uiComponents = emptyObject, onUpdate = noop } = props;
  const { CodeMirror } = uiComponents;

  const handleChangeTheme = useCallback(value => onUpdate('theme', value), [onUpdate]);

  return (
    <div className="flex flex-col">
      <div className="bg-blue-400 px-4 py-2 flex items-center justify-center">
        <h1 className="text-white m-0">Antd Theme Provider Settings</h1>
      </div>
      {CodeMirror && (
        <div className="flex flex-col w-full px-4 py-2">
          <label>Theme</label>
          <CodeMirror
            className="min-h-[250px] rounded"
            value={theme}
            theme="dark"
            mode="json"
            lineWrapping
            onChange={handleChangeTheme}
          />
        </div>
      )}
    </div>
  );
};

Settings.propTypes = {
  theme: PropTypes.string,
  uiComponents: PropTypes.object,
  onUpdate: PropTypes.func
};

export default Settings;

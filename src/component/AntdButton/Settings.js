// Packages
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const emptyObject = {};

const Settings = props => {
  const { intent = '', uiComponents = emptyObject, onUpdate = noop } = props;
  const { Select } = uiComponents;

  const handleChangeIntent = useCallback(e => onUpdate('intent', e.target.value), [onUpdate]);

  return (
    <div className="flex flex-col">
      <div className="bg-[#1A2835] px-4 py-2 flex items-center justify-center">
        <h1 className="text-white m-0">Antd Button Settings</h1>
      </div>
      {Select && (
        <div className="flex flex-col w-full px-4 py-2">
          <label>Intent</label>
          <Select value={intent} onChange={handleChangeIntent} className="rounded">
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="danger">Danger</option>
            <option value="link">Link</option>
            <option value="default">Default</option>
          </Select>
        </div>
      )}
    </div>
  );
};

Settings.propTypes = {
  intent: PropTypes.string,
  uiComponents: PropTypes.object,
  onUpdate: PropTypes.func
};

export default Settings;

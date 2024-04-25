// Packages
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import TextArea from '@plitzi/plitzi-ui/TextArea';

const Settings = props => {
  const { theme = '', onUpdate = noop } = props;

  const handleChangeTheme = useCallback(e => onUpdate('theme', e.target.value), [onUpdate]);

  return (
    <div className="flex flex-col">
      <div className="bg-[#1A2835] px-4 py-2 flex items-center justify-center">
        <h1 className="text-white m-0">Antd Theme Provider Settings</h1>
      </div>
      <div className="flex flex-col w-full px-4 py-2">
        <label>Theme</label>
        <TextArea value={theme} onChange={handleChangeTheme} className="rounded" />
      </div>
    </div>
  );
};

Settings.propTypes = {
  theme: PropTypes.string,
  onUpdate: PropTypes.func
};

export default Settings;

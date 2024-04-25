// Relatives
import Antd from './Antd';
import Settings from './Settings';
import AntdButton from './AntdButton';

Antd.type = 'antd';
Antd.pluginSettings = Settings;
Antd.version = VERSION;

export const plugins = { antdButton: AntdButton };

export const version = VERSION;

export default Antd;

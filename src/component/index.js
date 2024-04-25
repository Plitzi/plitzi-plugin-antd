// Relatives
import AntdThemeProvider from './AntdThemeProvider';
import Settings from './Settings';
import AntdButton from './AntdButton';

AntdThemeProvider.type = 'antdThemeProvider';
AntdThemeProvider.pluginSettings = Settings;
AntdThemeProvider.version = VERSION;

export const plugins = { antdButton: AntdButton };

export const version = VERSION;

export default AntdThemeProvider;

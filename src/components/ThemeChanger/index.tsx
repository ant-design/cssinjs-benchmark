import React, { FC } from 'react';
import { ConfigProvider, FloatButton, theme as antdTheme } from 'antd';
import {DarkTheme, Light} from 'antd-token-previewer/es/icons';
import StyleSizeWatcher from '@/components/StyleSizeWatcher';

export interface ThemeChangerProps {
  children?: React.ReactNode;
}

const ThemeChanger: FC<ThemeChangerProps> = ({children}) => {
  const [theme, setTheme] = React.useState('default');

  return (
    <ConfigProvider theme={{ algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm, cssVar: true }}>
      <StyleSizeWatcher>
        {children}
      </StyleSizeWatcher>
      <FloatButton icon={theme === 'dark' ? <Light /> : <DarkTheme />} onClick={() => setTheme((t) => t === 'default' ? 'dark' : 'default')} />
    </ConfigProvider>
  )
}

export default ThemeChanger;
import React, { FC, ReactElement } from "react";
import { Button, ConfigProvider, theme as antdTheme } from 'antd';
import Demo from "@/components/Demo";
import StyleSizeWatcher, { StyleSizeWatcherRef } from '@/components/StyleSizeWatcher';

const Benchmark: FC<{
  renderDemo?: (demo: ReactElement) => ReactElement;
}> = ({ renderDemo = (node) => node }) => {
  const [themeCount, setThemeCount] = React.useState(1);
  const [rendered, setRendered] = React.useState(false);
  const [times, setTimes] = React.useState<number | undefined>();
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')
  const renderStart = React.useRef(0);
  const sizeWatcherRef = React.useRef<StyleSizeWatcherRef | null>(null);
  const [size, setSize] = React.useState('');

  const handleRender = () => {
    renderStart.current = Date.now();
    setRendered(true);
  };

  return (
    <div>
      <div>
        <label>
          <span style={{marginRight: 4}}>Themes:</span>
          <input style={{width: 80}} type="number" value={themeCount} onChange={(e) => setThemeCount(Number(e.target.value))} />
        </label>
      </div>
      <div style={{display: 'flex', gap: 8, marginTop: 12}}>
        <button onClick={handleRender}>
          Render
        </button>
        <button
          onClick={() => {
            setRendered(false);
            setTimes(undefined);
          }}
        >
          Reset
        </button>
        <button onClick={() => window.location.reload()}>Refresh</button>
        <button onClick={() => setTheme((t) => t === 'dark' ? 'light' : 'dark')}>
          Change Theme
        </button>
      </div>
      <div style={{border: '2px dashed gray', padding: 12, height: 400, overflow: 'auto', marginTop: 24, background: theme === 'dark' ? '#000' : '#fff'}}>
        {rendered
          ? renderDemo(
            <ConfigProvider theme={{algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm}}>
              <StyleSizeWatcher ref={sizeWatcherRef}>
                <Demo
                  themeCount={themeCount}
                  onEffect={() => {
                    setTimes(Date.now() - renderStart.current);
                    setSize(sizeWatcherRef.current?.getSize() || '');
                  }}
                />
              </StyleSizeWatcher>
            </ConfigProvider>
            )
          : "Click Render to start"}
      </div>
      <div style={{border: '2px dashed gray', padding: 12, marginTop: 24}}>
        {times && <div>Rendered in {times}ms</div>}
        {size && <div>Extract style size {size}</div>}
      </div>
    </div>
  );
};

export default Benchmark;

import React, { FC, ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'antd';
import Demo from '@/components/Demo';

const Benchmark: FC<{
  renderDemo?: (demo: ReactElement) => ReactElement;
}> = ({
  renderDemo,
                       }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [times, setTimes] = React.useState<number | undefined>();

  const handleRender = async () => {
    if (ref.current) {
      const root = createRoot(ref.current);
      const date = Date.now();
      const demo = <Demo onEffect={() => {
        setTimes(Date.now() - date);
      }} />;
      root.render(renderDemo ? renderDemo(demo) : demo);
    }
  }

  return (
    <div>
      <Button onClick={handleRender}>Render</Button>
      {times && <div>Rendered in {times}ms</div>}
      <div ref={ref}>
        Benchmark
      </div>
    </div>
  )
}

export default Benchmark;
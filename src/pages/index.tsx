import Benchmark from '@/components/Benchmark';
import { ConfigProvider } from 'antd';

export default function HomePage() {
  return (
    <Benchmark renderDemo={(demo) => (
      <ConfigProvider theme={{cssVar: false}}>
        {demo}
      </ConfigProvider>
    )} />
  );
}

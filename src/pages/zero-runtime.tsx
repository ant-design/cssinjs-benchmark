import Benchmark from "@/components/Benchmark";
import { ConfigProvider } from "antd6";
import 'antd6/dist/antd.css'

export default function HomePage() {
  return (
    <Benchmark
      renderDemo={(demo) => (
        <ConfigProvider theme={{ zeroRuntime: true }}>{demo}</ConfigProvider>
      )}
    />
  );
}

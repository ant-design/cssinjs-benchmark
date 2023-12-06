import { Outlet } from "umi";
import "antd/dist/reset.css";

export default function Layout() {
  return (
    <>
      <div style={{ margin: 24, display: "flex", gap: 8 }}>
        <div>Choose one to test</div>
        <a href="/cssinjs">cssinjs</a>
        <a href="/css-var">css-var</a>
      </div>
      <div style={{ margin: 24 }}>
        <Outlet />
      </div>
    </>
  );
}

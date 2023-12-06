import { Outlet, Link } from "umi";
import "antd/dist/reset.css";

export default function Layout() {
  return (
    <>
      <div style={{ margin: 24, display: "flex", gap: 8 }}>
        <div>Choose one to test</div>
        <Link to="/cssinjs">cssinjs</Link>
        <Link to="/css-var">css-var</Link>
      </div>
      <div style={{ margin: 24 }}>
        <Outlet />
      </div>
    </>
  );
}

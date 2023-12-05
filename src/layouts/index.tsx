import { Outlet } from 'umi';
import 'antd/dist/reset.css';
import ThemeChanger from '@/components/ThemeChanger';

export default function Layout() {
  return (
    <ThemeChanger>
      <Outlet />
    </ThemeChanger>
  );
}

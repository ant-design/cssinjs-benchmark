import { FC, useEffect } from 'react';
import AppDemo from 'antd-token-previewer/es/previews/pages';

export interface DemoProps {
  onEffect?: () => void;
}

const Demo: FC<DemoProps> = ({onEffect}) => {
  useEffect(() => {
    onEffect?.();
  }, [])
  return <AppDemo />;
}

export default Demo;
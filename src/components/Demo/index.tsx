import { FC, useEffect } from 'react';
import {
  Button,
  Cascader,
  ConfigProvider,
  DatePicker,
  Form,
  Popover,
  Select,
  Table,
  ThemeConfig,
  TreeSelect,
} from 'antd';

const TestDemo: FC<{ theme: ThemeConfig }> = ({ theme }) => {
  return (
    <ConfigProvider theme={theme}>
      <div>
        <Button>Button</Button>
        <Select></Select>
        <Table />
        <Cascader />
        <TreeSelect />
        <Popover content="Popover content">
          <div>123</div>
        </Popover>
        <DatePicker />
        <Form>
          <Form.Item>
            <div>123</div>
          </Form.Item>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export interface DemoProps {
  onEffect?: () => void;
  themeCount?: number;
}

const Demo: FC<DemoProps> = ({ onEffect, themeCount = 5 }) => {
  useEffect(() => {
    onEffect?.();
  }, []);
  return (
    <>
      {Array(themeCount).fill(1).map((_, index) => (
        <TestDemo
          key={index}
          theme={{
            token: {
              borderRadius: index,
            },
          }}
        />
      ))}
    </>
  );
};

export default Demo;

import React, { FC, useState } from 'react';
import { createCache, StyleProvider } from '@ant-design/cssinjs';

export interface StyleSizeWatcherProps {
  children?: React.ReactNode;
}

const StyleSizeWatcher: FC<StyleSizeWatcherProps> = ({
  children
                                                     }) => {
  const [cache] = useState(() => createCache());

  return (
    <>
      <StyleProvider cache={cache}>
        {children}
      </StyleProvider>
    </>
  )
}

export default StyleSizeWatcher;
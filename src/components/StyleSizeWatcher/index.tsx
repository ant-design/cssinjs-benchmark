import React, { FC, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export interface StyleSizeWatcherProps {
  children?: React.ReactNode;
}

export interface StyleSizeWatcherRef {
  getSize: () => string;
}

const StyleSizeWatcher = forwardRef<StyleSizeWatcherRef,StyleSizeWatcherProps>( ({ children }, ref) => {
  const [cache] = useState(() => createCache());

  useImperativeHandle(ref, () => ({
    getSize: () => {
      return `${(new Blob([extractStyle(cache, true)]).size / 1024).toFixed(2)}KB`
    }
  }))

  return (
    <>
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </>
  );
});

export default StyleSizeWatcher;

import * as React from 'react';
import { StyledComponent } from '..';

export interface TabIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  color: 'accent' | 'primary' | string;
  style: { left: number; width: number };
}

declare const TabIndicator: StyledComponent<TabIndicatorProps>;

export default TabIndicator;

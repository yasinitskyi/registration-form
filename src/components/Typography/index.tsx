import React, { ReactHTML, ReactNode } from 'react';
import classNames from 'classnames';
import Styles from './index.module.css';

export interface TypographyProps {
	tag: keyof Pick<ReactHTML, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'>
	children: ReactNode,
	className?: string,
}

export function Typography({
    tag,
    children,
    className,
}: TypographyProps) {
  return React.createElement(tag, {className: classNames(Styles[tag], className)}, children);
}
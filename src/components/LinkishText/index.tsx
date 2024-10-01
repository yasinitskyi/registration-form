import React from "react";
import { Typography } from "../Typography";
import Styles from './index.module.css'
import classNames from "classnames";

export interface LinkishTextProps {
	children: React.ReactNode;
	className?: string;
}

export default function LinkishText({ children, className }: LinkishTextProps) {
	return <Typography className={classNames(Styles.text, className)} tag="p">{children}</Typography>;
}

import { Typography } from "../Typography";
import classNames from "classnames";
import errorIcon from '../../assets/error.svg'
import Styles from "./index.module.css";

export interface MessageBoardProps {
	text: string;
	type?: "error" | "warning" | "success"; //* Depends on type board may change icon and styles such as background and color
	className?: string;
}

export function MessageBoard({
	type = "error",
	text,
	className,
}: MessageBoardProps) {
	return (
		<div className={classNames(Styles.board, Styles[type], className)}>
			<img className={Styles.icon} src={errorIcon} alt={`${type} indicator`} />
			<Typography className={Styles.text} tag="h3">{text}</Typography>
		</div>
	);
}

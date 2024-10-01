import classNames from "classnames";
import Styles from "./index.module.css";
import { RenderIf } from "../../../hoc/RenderIf";

export interface GenericButtonProps {
	onClick: () => void;
	children: React.ReactNode;
	disabled?: boolean;
	type?: "light";
	className?: string;
	icon?: string;
}

export function GenericButton({
	type,
	onClick,
	children,
	disabled = false,
	className,
	icon,
}: GenericButtonProps) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={classNames(Styles.button, Styles[type || ""], className)}
		>
			<RenderIf condition={!!icon}>
				<img src={icon} className={Styles.icon} />
			</RenderIf>
			{children}
		</button>
	);
}

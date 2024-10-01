import classNames from "classnames";
import Styles from "./index.module.css";

export interface HintProps {
	text: string;
	isValid: boolean;
}

export function ValidityHint({ text, isValid = false }: HintProps) {
	return (
		<span className={classNames(Styles.hint, {[Styles.isValid]: isValid})}>
			{isValid ? (
				<img src="/valid.svg" alt="Value passed validity check" />
			) : (
				<img src="/invalid.svg" alt="Value didn't pass validity check" />
			)}
			{text}
		</span>
	);
}

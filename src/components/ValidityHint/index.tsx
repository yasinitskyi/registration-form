import classNames from "classnames";
import invalidIcon from '../../assets/invalid.svg'
import validIcon from '../../assets/valid.svg'
import Styles from "./index.module.css";

export interface HintProps {
	text: string;
	isValid: boolean;
}

export function ValidityHint({ text, isValid = false }: HintProps) {
	return (
		<span className={classNames(Styles.hint, {[Styles.isValid]: isValid})}>
			{isValid ? (
				<img src={validIcon} alt="Value passed validity check" />
			) : (
				<img src={invalidIcon} alt="Value didn't pass validity check" />
			)}
			{text}
		</span>
	);
}

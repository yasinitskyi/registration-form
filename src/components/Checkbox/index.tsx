import classNames from "classnames";
import checkedIcon from '../../assets/checked.svg'
import uncheckedIcon from '../../assets/unchecked.svg'
import { Typography } from "../Typography";
import Styles from "./index.module.css";

export interface CheckboxProps {
	onChange: () => void;
	isChecked: boolean;
	label?: string;
	className?: string;
}

export function Checkbox({
	label,
	onChange,
	isChecked,
	className,
}: CheckboxProps) {
	return (
		<div className={classNames(Styles.container, className)}>
			<input
				className={Styles.checkbox}
				type="checkbox"
				checked={isChecked}
				onChange={onChange}
			/>
			<img src={isChecked ? checkedIcon : uncheckedIcon} />
			<Typography className={classNames(Styles.label, {[Styles.checked]: isChecked})} tag="p">
				{label}
			</Typography>
		</div>
	);
}

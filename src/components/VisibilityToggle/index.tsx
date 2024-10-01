import viewActionIcon from '../../assets/viewActive.svg'
import viewInActionIcon from '../../assets/viewInactive.svg'
import Styles from "./index.module.css";

export interface VisibilityToggleProps {
	onClick: () => void;
	isVisibilityActive: boolean;
}

export function VisibilityToggle({onClick, isVisibilityActive}: VisibilityToggleProps) {
	return (
		<img
			className={Styles.passwordVisibilityToggle}
			onClick={onClick}
			src={isVisibilityActive ? viewActionIcon : viewInActionIcon}
			alt="Information visibility toggle"
		/>
	);
}

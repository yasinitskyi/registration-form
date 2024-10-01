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
			src={isVisibilityActive ? "/viewActive.svg" : "/viewInactive.svg"}
			alt="Information visibility toggle"
		/>
	);
}

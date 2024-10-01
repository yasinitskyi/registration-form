import React, { useState } from "react";
import { ValidityHint } from "../../ValidityHint";
import { VisibilityToggle } from "../../VisibilityToggle";
import Styles from "./index.module.css";
import classNames from "classnames";
import * as yup from "yup";
import { RenderIf } from "../../../hoc/RenderIf";

export interface GenericInputProps {
	name: string;
	label: string;
	error?: yup.ValidationError; //* Getting full object in case if additional data is needed (displaying error message etc.)
	fill?: number;
	value?: string;
	title?: string;
	placeholder?: string;
	pattern?: string;
	type?: React.HTMLInputTypeAttribute;
	readonly?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange?: (value: string, name: any) => void; //? May have function overload for onChange without any name being passed
}

export function GenericInput({
	error,
	name,
	fill,
	title,
	label,
	pattern,
	placeholder,
	value = "",
	type = "text",
	onChange = () => {},
}: GenericInputProps) {
	const isPasswordType = type === "password";

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	return (
		<div className={Styles.wrapper} style={{ flexBasis: `${fill || 100}%` }}>
			<div
				className={classNames(Styles.container, {
					[Styles.error]: error?.path === name,
				})}
			>
				<label
					htmlFor={name}
					className={classNames(Styles.label, {
						[Styles.activeLabel]: value,
					})}
				>
					{label}
				</label>
				<input
					name={name}
					type={
						isPasswordType ? (isPasswordVisible ? "text" : "password") : type
					}
					title={`Please, enter your ${title}`}
					pattern={pattern}
					placeholder={placeholder}
					value={value}
					id={name}
					required
					onChange={(event) => onChange(event.target.value, name)}
					className={classNames(Styles.input, {
						[Styles.activeInput]: value,
						[Styles.passwordInput]: isPasswordType,
					})}
				/>
				<RenderIf condition={isPasswordType}>
					<VisibilityToggle
						onClick={togglePasswordVisibility}
						isVisibilityActive={isPasswordVisible}
					/>
				</RenderIf>
			</div>
			<RenderIf condition={isPasswordType}>
				<div className={Styles.hint}>
					<ValidityHint text="8 characters min." isValid={value.length >= 8} />
					<ValidityHint
						text="At least one digit."
						isValid={value.search(/\d/) !== -1}
					/>
				</div>
			</RenderIf>
		</div>
	);
}

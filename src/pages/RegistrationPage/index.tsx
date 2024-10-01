import { useState } from "react";
import { GenericInput } from "../../components/Input";
import { MessageBoard } from "../../components/MessageBoard";
import { GenericButton } from "../../components/Button";
import { useImmerReducer } from "use-immer";
import {
	registrationReducer,
	RegistrationReducer,
	ActionType,
} from "../../reducers/RegistrationReducer";
import Styles from "./index.module.css";
import * as yup from "yup";
import { RenderIf } from "../../hoc/RenderIf";
import { Typography } from "../../components/Typography";
import classNames from "classnames";
import { Checkbox } from "../../components/Checkbox";
import LinkishText from "../../components/LinkishText";
import { EditableField } from "../../reducers/RegistrationReducer/Model";

const registrationSchema = yup.object().shape({
	name: yup
		.string()
		.required("Please complete all the required fields to proceed.")
		.matches(/^[A-Za-z]+$/, "First name must only contain letters"),
	surname: yup
		.string()
		.required("Please complete all the required fields to proceed.")
		.matches(/^[A-Za-z]+$/, "Last name must only contain letters"),
	password: yup
		.string()
		.required("Please complete all the required fields to proceed.")
		.min(8, "Password must be at least 8 characters long")
		.matches(/\d/, "Password must contain at least one digit"),
	email: yup
		.string()
		.required("Please complete all the required fields to proceed.")
		.email("Email syntax is incorrect"),
});

export function RegistrationPage() {
	const [credentials, dispatch] = useImmerReducer(
		registrationReducer,
		new RegistrationReducer()
	);

	const [error, setError] = useState<yup.ValidationError | undefined>(
		undefined
	);

	const [agreement, setAgreement] = useState(false);

	const resetError = () => void setError(undefined);

	const updateField = (value: string, name: EditableField) => {
		resetError(); //! Reset errors on slight form change
		dispatch({ type: ActionType.SetCredential, name, value: value.trim() });
	}

	const validate = async () => {
		try {
			await registrationSchema.validate(credentials);
			//? Some post request may be here...
		} catch (err) {
			if (err instanceof yup.ValidationError) {
				setError(err);
			}
		}
	};

	return (
		<div className={Styles.container}>
			<div className={Styles.navigation}>
				<LinkishText className={Styles.navigationWrapper}>
					<Typography tag="h4" className={Styles.navigationText}>← Back</Typography>
				</LinkishText>
			</div>
			<div className={Styles.titleContainer}>
				<Typography
					className={classNames(Styles.heading, Styles.title)}
					tag="h2"
				>
					Start from free
				</Typography>
				<Typography
					className={classNames(Styles.heading, Styles.subtitle)}
					tag="h1"
				>
					Create an account
				</Typography>
			</div>
			<div className={Styles.buttonCollection}>
				<GenericButton icon="/google.png" onClick={() => {}} type="light">
					<Typography tag="p">Sign up with Google</Typography>
				</GenericButton>
				<GenericButton icon="/facebook.png" onClick={() => {}} type="light">
					<Typography tag="p">Sign up with Facebook</Typography>
				</GenericButton>
			</div>
			<div className={Styles.formSeparation}>
				<Typography tag="h4">Or use your email for registration</Typography>
				<hr className={Styles.separator} />
			</div>
			<RenderIf condition={!!error}>
				<MessageBoard text={error?.message as string} />
			</RenderIf>
			<form className={Styles.form}>
				<GenericInput
					error={error}
					onChange={updateField}
					value={credentials.name}
					fill={47.4}
					name="name"
					title="name"
					placeholder="First Name"
					label="First Name"
				/>
				<GenericInput
					error={error}
					onChange={updateField}
					value={credentials.surname}
					fill={47.4}
					name="surname"
					title="surname"
					placeholder="Last Name"
					label="Last Name"
				/>
				<GenericInput
					error={error}
					onChange={updateField}
					value={credentials.email}
					name="email"
					title="email"
					type="email"
					placeholder="E-mail"
					label="E-mail"
				/>
				<GenericInput
					error={error}
					onChange={updateField}
					value={credentials.password}
					name="password"
					title="password"
					type="password"
					placeholder="Password"
					label="Password"
				/>
			</form>
			<Checkbox
				onChange={() => setAgreement((prev) => !prev)}
				isChecked={agreement}
				label="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings."
			/>
			<GenericButton onClick={validate} disabled={!agreement}>
				<Typography className={Styles.heading} tag="h4">
					Create an Free Account!
				</Typography>
			</GenericButton>
			<div className={Styles.login}>
				<Typography tag="p" className={Styles.loginText}>
					Already have an account?
				</Typography>
				<LinkishText><a href="#">Log in</a></LinkishText>
			</div>
		</div>
	);
}

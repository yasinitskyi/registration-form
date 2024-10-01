import { EditableField } from "../Model";

export enum ActionType {
	SetName = "setName",
	SetSurname = "setSurname",
	SetEmail = "setEmail",
	SetPassword = "setPassword",
	SetCredential = "setCredential",
}

export type Action =
	| { type: ActionType.SetName; payload: string }
	| { type: ActionType.SetSurname; payload: string }
	| { type: ActionType.SetEmail; payload: string }
	| { type: ActionType.SetPassword; payload: string }
	| {
			type: ActionType.SetCredential;
			name: EditableField;
			value: string;
	  };

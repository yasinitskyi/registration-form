import { Immerable } from "../../../models/Immerable";

export type EditableField = "name" | "surname" | "email" | "password"

export class RegistrationReducer extends Immerable {
	name: string = "";
	surname: string = "";
	email: string = "";
	password: string = "";

	constructor() {
		super();
	}
}

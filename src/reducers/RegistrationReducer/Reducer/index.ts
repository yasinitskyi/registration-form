import { ActionType, Action } from "./actions";
import { RegistrationReducer } from "../Model";

export function registrationReducer(
	draft: RegistrationReducer,
	action: Action
) {
	switch (action.type) {
		case ActionType.SetName:
			draft.name = action.payload;
			break;
		case ActionType.SetSurname:
			draft.surname = action.payload;
			break;
		case ActionType.SetEmail:
			draft.email = action.payload;
			break;
		case ActionType.SetPassword:
			draft.password = action.payload;
			break;
		case ActionType.SetCredential:
			draft[action.name] = action.value;
			break;
		default:
			console.error("Unknown action type");
	}
}

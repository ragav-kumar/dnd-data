import { FormikHelpers } from "formik";

export enum PlayerName {
	None = 0,
	Rohini,
	Nate,
	Jayanthi,
	Vijay,
	Yash,
	Ayush,
}

export interface BackgroundFormState {
	player: PlayerName,
	name: string,
	description: string,
	thought: string,
	goodPoint: string,
	badPoint: string,
	quirk: string,
}

export interface BackgroundFormProps {
	handleSubmit(values: BackgroundFormState, form: FormikHelpers<BackgroundFormState>): void,
}
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

export interface PlayerProfile {
	[key: string]: string | number;
}

export interface ProfileProps {
	onChange(player: PlayerName): void
	profile: PlayerProfile
	player: PlayerName
	isLoading?: boolean
}

export interface LabelledInputProps {
	type?: string // Can use the default of "input" if needed
	label: string
	name: string
	errorMsg?: string
	sample: string
}
export interface LabelledTextProps {
	label: string
	name: string
	value: string
	first: boolean // Hide border on first item
}

export interface IndependentSelectProps {
	label: string
	selected: PlayerName
	onChange(player: PlayerName): void
}

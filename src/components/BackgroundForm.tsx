import * as React from "react";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { PlayerName, BackgroundFormState, BackgroundFormProps } from "./types";
import { LabelledInputProps } from "./LabelledInput";
import { InputFieldArray } from "./InputFieldArray";

// Boils down to: "Everything is required"
const ValidationSchema = Yup.object().shape({
	player: Yup.number()
		.notOneOf([PlayerName.None])
		.required(),
	name: Yup.string()
		.trim()
		.required(),
	description: Yup.string()
		.trim()
		.required(),
	thought: Yup.string()
		.trim()
		.required(),
	goodPoint: Yup.string()
		.trim()
		.required(),
	badPoint: Yup.string()
		.trim()
		.required(),
	quirk: Yup.string()
		.trim()
		.required(),
});
// Dirt simple
const initialValues: BackgroundFormState = {
	player: PlayerName.None,
	name: "",
	description: "",
	thought: "",
	goodPoint: "",
	badPoint: "",
	quirk: "",
};

const textFieldData: LabelledInputProps[] = [
	{ name: "name", type: null, label: "Character Name" },
	{ name: "description", type: "textarea", label: "What do they look like (1-3 sentences)?" },
	{ name: "thought", type: "textarea", label: "A thought they might think (1-3 sentences)" },
	{ name: "goodPoint", type: null, label: "One good thing about them" },
	{ name: "badPoint", type: null, label: "One bad thing about them" },
	{ name: "quirk", type: null, label: "Something fun / interesting about them" },
]

export const BackgroundForm = (props: BackgroundFormProps) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={props.handleSubmit}
			validationSchema={ValidationSchema}
		>
			{({ errors, touched }) => (
				<Form>
					<Field name="player" as="select" />
					<InputFieldArray
						fieldData={textFieldData}
						errors={errors}
						touched={touched}
					/>
					<Field name="submit" type="submit" component="input" value="Submit" />
				</Form>
			)}
		</Formik>
	)
}
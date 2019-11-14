import * as React from "react";
import * as Yup from 'yup';
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'

import { PlayerName, BackgroundFormState, BackgroundFormProps } from "./types";
import { InputFieldArray } from "./InputFieldArray";
import { LabelledSelect } from "./LabelledSelect";
import textFieldData from '../data/textFields.json';
import { Blurb } from "./Blurb";

const backgroundValidationSchema = Yup.object().shape({
	player: Yup.number()
		.notOneOf([PlayerName.None], "Who are you??")
		.required(),
	name: Yup.string()
		.trim()
		.required("Please give this character a name."),
	description: Yup.string()
		.trim()
		.required("Please give this character a description."),
	thought: Yup.string()
		.trim()
		.required("Show that you've thought about things from their perspective!"),
	goodPoint: Yup.string()
		.trim()
		.required("Surely there's SOMETHING good about them!"),
	badPoint: Yup.string()
		.trim()
		.required("No one's perfect... and perfect people would be boring."),
	quirk: Yup.string()
		.trim()
		.required("Something interesting and quirky! Surely there's something."),
});

// Dirt simple
const initialValues: BackgroundFormState = {
	player     : PlayerName.None,
	name       : "",
	description: "",
	thought    : "",
	goodPoint  : "",
	badPoint   : "",
	quirk      : "",
};

const Hr = styled.hr`
&&& {
	width: 100%;
	max-width: none;
}`

export const BackgroundForm = (props: BackgroundFormProps) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={props.handleSubmit}
			validationSchema={backgroundValidationSchema}
		>
			{({ values, errors, touched }) => (
				<Form>
					<LabelledSelect
						name="player"
						label="Select Player"
						errorMsg={errors.player && touched.player ? errors.player : null}
					/>
					{values.player > 0 ? 
						<Blurb player={values.player} /> :
						<p>(Select a player to show a race / class summary)</p>
					}
					<Hr />
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
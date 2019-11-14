import * as React from 'react'
import { FormikErrors, FormikTouched } from 'formik'
import { BackgroundFormState } from "./types"
import { LabelledInput, LabelledInputProps } from "./LabelledInput"

export interface InputFieldArrayProps {
	fieldData: LabelledInputProps[];
	errors: FormikErrors<BackgroundFormState>;
	touched: FormikTouched<BackgroundFormState>;
}

export const InputFieldArray = (props: InputFieldArrayProps) => {
	const fields: JSX.Element[] = [];
	props.fieldData.forEach(f => {
		fields.push(
			<LabelledInput
				{...f}
				key={f.name}
				errorMsg={props.errors.name && props.touched.name ? props.errors.name : null}
			/>
		);
	});
	return (<> {fields} </>);
};

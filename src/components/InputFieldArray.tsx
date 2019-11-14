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
	const jErrors = JSON.parse(JSON.stringify(props.errors));
	const jTouched = JSON.parse(JSON.stringify(props.touched));
	props.fieldData.forEach(f => {
		fields.push(
			<LabelledInput
				{...f}
				key={f.name}
				errorMsg={jErrors[f.name] && jTouched[f.name] ? jErrors[f.name] : null}
			/>
		);
	});
	return (<> {fields} </>);
};

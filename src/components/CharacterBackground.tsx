import * as React from "react";

import {FormikHelpers} from 'formik';
import { BackgroundForm } from "./BackgroundForm";
import { BackgroundFormState } from "./types";

export const CharacterBackground = () => {
	const handleSubmit = (values: BackgroundFormState, form: FormikHelpers<BackgroundFormState>) => {
		console.log(values);
	}
	return (
		<BackgroundForm
			handleSubmit={handleSubmit}
		/>
	)
}
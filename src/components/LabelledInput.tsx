import * as React from "react";
import { Field } from "formik";
import { Label, Wrap, StyledField, ErrorMsg, Sample } from "./styled";


export interface LabelledInputProps {
	type?    : string, // Can use the default of "input" if needed
	label    : string,
	name     : string,
	errorMsg?: string,
	sample   : string,
}

export const LabelledInput = (props : LabelledInputProps) => {
	return (
		<Wrap>
			<Label>
				<span>{props.label}</span>
				<StyledField
					name={props.name}
					component={props.type ? props.type : null}
				/>
			</Label>
			{!!props.errorMsg ? <ErrorMsg>{props.errorMsg}</ErrorMsg> : null}
			<Sample>{props.sample}</Sample>
		</Wrap>
	)
}
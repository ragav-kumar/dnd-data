import * as React from "react";
import { Field } from "formik";
import { Label, Wrap, StyledField, ErrorMsg, Sample } from "./styled";
import { LabelledInputProps } from "./types";

export const LabelledInput = (props : LabelledInputProps) => (
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
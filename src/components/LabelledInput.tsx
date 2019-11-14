import * as React from "react";
import styled from 'styled-components'
import { Field } from "formik";
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

const Wrap = styled.div`
	display: grid;
	grid-template-columns: [labelledField] 3fr [error] 1fr;
	column-gap: 1em;
`
const Label = styled.label`
	grid-column: labelledField;
	display: grid;
	grid-template-columns: [label] 1fr [field] 2fr;
	column-gap: 10px;
	span {
		grid-column: label;
	}
`;
const StyledField = styled(Field)` grid-column: field; `
const ErrorMsg = styled.div`
	grid-column: error;
	color: red;
`;

export interface LabelledInputProps {
	type?: string // Can use the default of "input" if needed
	label: string
	name: string
	errorMsg?: string
}

export const LabelledInput = (props : LabelledInputProps) => {
	const target = React.useRef(null)
	return (
		<Wrap>
			<Label ref={target}>
				<span>{props.label}</span>
				<StyledField
					name={props.name}
					component={props.type ? props.type : null}
				/>
			</Label>
			{!!props.errorMsg ? <ErrorMsg>{props.errorMsg}</ErrorMsg> : null}
		</Wrap>
	)
}
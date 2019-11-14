import * as React from 'react'
import { PlayerName } from './types'
import { Sample, Label, Wrap, StyledField, ErrorMsg } from "./styled";


interface SelectProps {
	label: string
	name: string
	errorMsg?: string
}

export const LabelledSelect = (props : SelectProps) => {
	const options: JSX.Element[] = [];
	for (const pn in PlayerName) {
		let isValueProperty = parseInt(pn, 10) >= 0
		if (isValueProperty) {
			options.push(
				<option key={pn} value={pn}>{PlayerName[pn]}</option>
			);
		}
	}
	return (
		<Wrap>
			<Label>
				<span>{props.label}</span>
				<StyledField
					name={props.name}
					component="select"
				>
					{options}
				</StyledField>
			</Label>
			{!!props.errorMsg ? <ErrorMsg>{props.errorMsg}</ErrorMsg> : null}
			<Sample>Ragav: Human Wizard</Sample>
		</Wrap>
	)
}
import * as React from 'react'
import styled from 'styled-components'
import { PlayerName, IndependentSelectProps } from './types'
import { Label, Wrap, BoldSpan } from "./styled";

const Select = styled.select`
	grid-column: field;
	padding: 2px 5px;
	font-size: 14pt;
`;

export const IndependentSelect = (props : IndependentSelectProps) => {
	const options: JSX.Element[] = [];
	for (const pn in PlayerName) {
		let num = parseInt(pn, 10);
		let isValueProperty = num >= 0
		if (isValueProperty) {
			options.push(
				<option
					key={num}
					value={num}
				>
					{PlayerName[pn]}
				</option>
			);
		}
	}
	return (
		<Wrap>
			<Label>
				<BoldSpan>{props.label}</BoldSpan>
				<Select
					value={props.selected}
					onChange={(e:any) => props.onChange(parseInt(e.target.value, 10))}
				>
					{options}
				</Select>
			</Label>
		</Wrap>
	)
}
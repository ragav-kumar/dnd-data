import * as React from 'react'
import styled, {css} from 'styled-components'
import {Field} from 'formik'


export const TextWrap = styled.div.attrs((props:any) => {})`
	margin: 1em 0;
	border-top: ${(props:any) => props.noBorder ? "0" : "1"}px solid grey;
`;
export const Wrap = styled.div`
	display: grid;
	grid-template-columns: [labelledField] 3fr [error] 1fr;
	grid-template-areas:
		"labelledField error"
		"sample -";
	column-gap: 1em;
`
const fieldCss = css`
	grid-column: field;
	padding: 2px 5px;
	font-size: 14pt;
`;
export const StyledField = styled(Field)`
	${fieldCss}
	min-height: ${props => props.component === 'textarea' ? "8em" : null};
`
export const ProfileText = styled.div`
	${fieldCss}
`;

export const ErrorMsg = styled.div`
	grid-column: error;
	color: red;
	font-size: 12pt;
`;
export const BoldSpan = styled.span` font-weight: bold; `
export const Label = styled.label`
	grid-column: labelledField;
	display: grid;
	grid-template-columns: [label] 1fr [field] 2fr;
	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
	column-gap: 10px;
	align-items: center;
	span {
		grid-column: label;
		font-size: 16pt;
	}
`;
const SampleWrap = styled.div`
	grid-column: sample;
	display: grid;
	grid-template-columns: 1fr [sampleText] 2fr;
	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
	font-style: italic;
	font-size: 11pt;
	margin-bottom: 1em;
	div {
		grid-column: sampleText;
	}
`;

export const Sample = (props : any) => (
	<SampleWrap>
		<div>{props.children}</div>
	</SampleWrap>
)

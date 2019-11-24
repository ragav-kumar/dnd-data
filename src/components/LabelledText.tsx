import * as React from 'react'
import { Label, ProfileText, TextWrap, BoldSpan } from "./styled";
import { LabelledTextProps } from './types';


export const LabelledText = (props: LabelledTextProps) => (
	<TextWrap noBorder={props.first}>
		<Label>
			<BoldSpan>{props.label}</BoldSpan>
			<ProfileText>{props.value}</ProfileText>
		</Label>
	</TextWrap>
)
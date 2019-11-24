import * as React from 'react'
import { PlayerProfile, LabelledInputProps, LabelledTextProps } from "./types"
import { LabelledText } from './LabelledText';

export interface TextFieldArrayProps {
	fieldData: LabelledTextProps[]
	profile: PlayerProfile
}

export const TextFieldArray = (props: TextFieldArrayProps) => {
	const fields: JSX.Element[] = [];
	let first = true;
	props.fieldData.forEach(f => {
		if (props.profile[f.name]) {
			fields.push(
				<LabelledText
					{...f}
					first={first}
					value={props.profile[f.name] as string}
					key={f.name}
				/>
			);
			first = false;
		}
		
	});
	return (<> {fields} </>);
};

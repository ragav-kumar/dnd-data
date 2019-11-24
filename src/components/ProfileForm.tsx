import * as React from "react";
import { ProfileProps } from "./types";
import { IndependentSelect } from "./IndependentSelect";
import textFieldData from '../data/textFields.json';
import { TextFieldArray } from "./TextFieldArray";
import Spinner from 'react-bootstrap/Spinner';


export const ProfileForm = (props: ProfileProps) => {
	console.log(props.profile);
	return (
	<>
		<IndependentSelect
			onChange={props.onChange}
			label="Select Player"
				selected={props.player}
		/>
		<div>
			{props.isLoading ? 
				<Spinner animation="border" role="status"></Spinner>
				: <TextFieldArray
					fieldData={textFieldData}
					profile={props.profile}
				/>
			}
			
		</div>
	</>
	);
}
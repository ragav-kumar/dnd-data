import * as React from "react";

import {FormikHelpers} from 'formik';
import { BackgroundForm } from "./BackgroundForm";
import { BackgroundFormState, PlayerName } from "./types";
import {fetchWP} from "../fetchWP";

const blurbData: any = require('../data/blurbs.json');


interface CharacterBackgroundProps {
	wpObject: {
		api_url: string,
		api_nonce: string,
	}
}

export const CharacterBackground = (props : CharacterBackgroundProps) => {
	const fetch = fetchWP( props.wpObject.api_url, props.wpObject.api_nonce );

	const handleSubmit = (values: BackgroundFormState, form: FormikHelpers<BackgroundFormState>) => {
		const name = PlayerName[values.player];
		fetch('background/submit', {
			...values,
			player: name,
			race: blurbData[name].race,
			class: blurbData[name].class,
		}).then(
			json => {
				if (json.success) {
					alert("Submitted! Thank you, I'll review these later.");
				} else {
					alert("Error! Something has gone wrong; please let me know.")
				}
			},
			err => console.log(err)
		)
	}
	return (
		<BackgroundForm
			handleSubmit={handleSubmit}
		/>
	)
}
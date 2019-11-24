import * as React from "react";

import {FormikHelpers} from 'formik';
import { BackgroundForm } from "./BackgroundForm";
import {Tabs, Tab} from "react-bootstrap";
import { BackgroundFormState, PlayerName, PlayerProfile } from "./types";
import {fetchWP} from "../fetchWP";
import { ProfileForm } from "./ProfileForm";

const blurbData: any = require('../data/blurbs.json');

interface CharacterBackgroundProps {
	wpObject: {
		api_url: string,
		api_nonce: string,
	}
}

export const CharacterBackground = (props : CharacterBackgroundProps) => {
	const [activeProfile, setActiveProfile] = React.useState<PlayerProfile>({});
	const [activePlayer, setActivePlayer] = React.useState(PlayerName.None);
	const [loading, setLoading] = React.useState(false);

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
	const getProfile = (player: PlayerName) => {
		setLoading(true);
		setActivePlayer(player);
		const name = PlayerName[player];
		console.log(name);
		fetch(`background/read/${name}`, {}).then(
			json => {
				if (json.success) {
					setActiveProfile({
						player,
						...json.data
					});
				} else {
					alert("Unable to retrieve profile data: " + json.error);
					console.log(json.error);
				}
			},
			err => console.log(err)
		).finally( () => setLoading(false));
	}


	return (
		<Tabs defaultActiveKey="form" id="tab-select">
			<Tab title="Form" eventKey="form">
				<BackgroundForm handleSubmit={handleSubmit} />
			</Tab>
			<Tab title="Profiles" eventKey="profile">
				<ProfileForm
					player={activePlayer}
					onChange={getProfile}
					profile={activeProfile}
					isLoading={loading}
				/>
			</Tab>
		</Tabs>
	)
}
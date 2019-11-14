import * as React from 'react';
import styled from 'styled-components'

import { PlayerName } from "./types";
// import data from '../data/blurbs.json'

const data: any = require('../data/blurbs.json');

const Wrap = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;
const Column = styled.div`
	h3 {
		font-size: 14pt;
	}
	ul {
		font-size: 12pt;
	}
`;




export interface BlurbProps {
	player: PlayerName
}
interface BlurbType {
	race: string,
	class: string,
	raceNotes: string[],
	classNotes: string[],
}
const emptyBlurb : BlurbType = {
	race: "",
	class: "",
	raceNotes: [],
	classNotes: [],
}
export const Blurb = (props : BlurbProps) => {
	const [blurb, setBlurb] = React.useState<BlurbType>(emptyBlurb);
	

	React.useEffect(() => {
		const name = PlayerName[props.player];
		console.log(name, props.player, data[name]);
		setBlurb(props.player > 0 ? data[name] : emptyBlurb);
	}, [props.player])

	let i = 0;
	const raceList : JSX.Element[] = [];
	blurb.raceNotes.forEach(note => {
		raceList.push(<li key={i++}>{note}</li>)
	});
	const classList: JSX.Element[] = [];
	blurb.classNotes.forEach(note => {
		classList.push(<li key={i++}>{note}</li>)
	});
	return (
		<Wrap>
			<Column>
				<h3>{blurb.race}</h3>
				<ul>{raceList}</ul>
			</Column>
			<Column>
				<h3>{blurb.class}</h3>
				<ul>{classList}</ul>
			</Column>
		</Wrap>
	);
}
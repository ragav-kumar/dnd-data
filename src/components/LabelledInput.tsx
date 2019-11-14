import * as React from "react";
import * as styled from 'styled-components'
import { Field } from "formik";
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

export interface LabelledInputProps {
	type?: string // Can use the default of "input" if needed
	label: string
	name: string
	errorMsg?: string
}

export const LabelledInput = (props : LabelledInputProps) => {
	const target = React.useRef(null)
	return (
		<label>
			<span>{props.label}</span>
			<Field
				name={props.name}
				type={props.type ? props.type : null}
				ref={target}
			/>
			<Overlay
				target={target.current}
				show={!!props.errorMsg}
				placement="right"
			>
				{(ttProps : any) => (
					<Tooltip {...ttProps}>{props.errorMsg}</Tooltip>
				)}
			</Overlay>
		</label>
	)
}
import fetch from 'isomorphic-fetch';
import {random} from 'mathjs'



export const fetchWP = (restURL: string, restNonce: string) => {
	return (endpoint = '/', data : Object | boolean = false ) => {
		let fetchObject : any = {
			credentials: 'same-origin',
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-WP-Nonce': restNonce,
			}
		};
		if (data) {
			fetchObject.body = JSON.stringify(data);
		}
		return fetch(restURL + endpoint, fetchObject)
			.then(response => {
				return response.json().then(json => {
					return response.ok ? json : Promise.reject(json);
				});
			});
	}
}
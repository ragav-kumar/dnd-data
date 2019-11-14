/* global window, document */
if (!window._babelPolyfill) {
	require('@babel/polyfill');
}

import React from 'react';
import ReactDOM from 'react-dom';
import {CharacterBackground} from './components/CharacterBackground'

document.addEventListener('DOMContentLoaded', function () {
	ReactDOM.render(<CharacterBackground wpObject={window.dnd_object} />, document.getElementById('dnd-char-background'));
});

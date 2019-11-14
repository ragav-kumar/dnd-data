<?php

namespace DnD;
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Core {
	/**
	 * Initialize and load in React scripts
	 */
	function __construct() {
		add_action('wp_enqueue_scripts', [$this, 'enqueue']);

		add_shortcode('dnd-character-background-form', [$this, 'shortcode']);
		Database::init();

		new RestEndPoints();
	}
	function enqueue() {
		wp_register_script(
			'dnd_char_background_script',
			\DND_PLUGIN_URL . 'js/shortcode.js',
			['react'], "0.1"
		);
		wp_enqueue_style(
			'bootstrap',
			"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
			null
		);
	}
	function shortcode() {
		wp_localize_script('dnd_char_background_script', 'dnd_object', [
			'api_nonce' => wp_create_nonce('wp_rest'),
			'api_url'   => rest_url('/' . RestEndPoints::REST_NAMESPACE . '/'),
		]);
		wp_enqueue_script('dnd_char_background_script');
		return "<div id=\"dnd-char-background\"></div>";
	}
	
}
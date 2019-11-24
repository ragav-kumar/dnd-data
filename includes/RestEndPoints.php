<?php
namespace DnD;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class RestEndPoints {
	const REST_NAMESPACE = 'dnd/v1';

	function __construct() {
		add_action( 'rest_api_init', [$this, 'init'] );
	}
	/**
	 * Initialize our Rest API endpoints
	 *
	 * @return void
	 */
	function init() {
		register_rest_route(self::REST_NAMESPACE, 'background/submit', [
			'methods'  => ['POST'],
			'callback' => [$this, 'writeBackground'],
		]);
		register_rest_route(self::REST_NAMESPACE, 'background/read/(?P<player>\w+)', [
			'methods'  => ['GET', 'POST'],
			'callback' => [$this, 'readBackground'],
		]);
	}
	/**
	 * Writes Character Background information
	 *
	 * @param \WP_REST_Request $data
	 * @return array
	 */
	function writeBackground(\WP_REST_Request $data):array {
		$params = $data->get_params();
		$args = [];
		foreach (Database::FIELDS as $field) {
			$args[$field] = $params[$field];
		}
		return [
			'success' => Database::write($args),
		];
	}
	/**
	 * Reads Character Background information
	 *
	 * @param \WP_REST_Request $data
	 * @return array
	 */
	function readBackground(\WP_REST_Request $data):array {
		$player = $data->get_param('player');
		if (!in_array($player, Database::PLAYERS)) {
			return [
				'success' => false,
				'error' => "Invalid Player name",
			];
		}
		$row = Database::read($player);
		return [
			'success' => true,
			'data' => $row,
		];
	}
}

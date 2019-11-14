<?php

namespace DnD;
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class Database {
	const TABLE = "dnd_background";
	const FIELDS = ['player', 'race', 'class', 'name', 'history', 'description', 'thought', 'goodPoint', 'badPoint', 'quirk'];

	private function __construct() {
	}
	/**
	 * Set up table name
	 *
	 * @return void
	 */
	static function init() {
		global $wpdb;
		$wpdb->dndTable = $wpdb->prefix . self::TABLE;
	}
	/**
	 * Write background data to db
	 *
	 * @param array $data
	 * @return boolean Success or no
	 */
	static function write(array $data):bool {
		global $wpdb;
		return boolval($wpdb->insert($wpdb->dndTable, $data, '%s'));
	}
	/**
	 * Create DB Table if doesn't exist.
	 *
	 * @return void
	 */
	static function dbCreate() {
		global $wpdb;
		require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		$cc = $wpdb->get_charset_collate();
		dbDelta(
			"CREATE TABLE `{$wpdb->dndTable}` (
				`id` mediumint NOT NULL AUTO_INCREMENT,
				`player` VARCHAR(20) NOT NULL,
				`race` VARCHAR(20) NOT NULL,
				`class` VARCHAR(20) NOT NULL,
				`name` TEXT NOT NULL,
				`history` MEDIUMTEXT NOT NULL,
				`description` MEDIUMTEXT NOT NULL,
				`thought` MEDIUMTEXT NOT NULL,
				`goodPoint` MEDIUMTEXT NOT NULL,
				`badPoint` MEDIUMTEXT NOT NULL,
				`quirk` MEDIUMTEXT NOT NULL,
				PRIMARY KEY  (`id`)
			) ENGINE=InnoDB $cc"
		);
	}
}
<?php
/**
 * Plugin Name: DnD data manager
 * Plugin URI:  https://ragavkumar.com/dnd
 * Description: Forms and data pages for use in a tabletop RPG
 * Version:     0.1.0
 * Author:      Ragav Kumar
 * Author URI:  https://ragavkumar.com
 */
if (!defined('ABSPATH')) exit; // Exit if accessed directly

define("DND_PLUGIN_PATH", plugin_dir_path(__FILE__));
define("DND_PLUGIN_URL", plugin_dir_url(__FILE__));

// Autoloader
spl_autoload_extensions('.php');
spl_autoload_register(function($class) {
	// base directory for the namespace prefix
	$basedir = \DND_PLUGIN_PATH . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR;

	// does the class use the namespace prefix?
	$prefix = 'DnD\\';
	$len = strlen($prefix);
	if (strncmp($prefix, $class, $len) !== 0) {
		// no, move to the next registered autoloader
		return;
	}

	// get the relative class name
	$relative_class = substr($class, $len);

	// replace the namespace prefix with the base directory, replace namespace
	// separators with directory separators in the relative class name, append
	// with .php
	$file = $basedir . str_replace('\\', DIRECTORY_SEPARATOR, $relative_class) . '.php';
	if ($file) {
		require_once $file;
	}
});

// All business code is in /includes
new \DnD\Core();
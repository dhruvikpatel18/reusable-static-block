<?php
/**
 * Plugin Name:       Reusable Static Block
 * Description:       A reusable static block that will achieve the "Finished Projects" and "Our Team" sections functionality and layout with fully customizable from backend UI.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Dhruvik Malaviya
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       reusable-static-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function get_reusable_static_block_plugin_url() {
    return plugins_url('', __FILE__); // Gets the plugin's base URL
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_reusable_static_block_block_init() {
	register_block_type( __DIR__ . '/build' );

	// Enqueue the script and pass the plugin's base URL
    $script_handle = 'reusable-static-block-script'; // script's handle
    wp_register_script($script_handle, plugins_url('/build/index.js', __FILE__), array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'));
    wp_localize_script($script_handle, 'ReusableStaticBlockData', array(
        'pluginUrl' => get_reusable_static_block_plugin_url(), // Pass the plugin URL to JavaScript
    ));
    wp_enqueue_script($script_handle);
}
add_action( 'init', 'create_block_reusable_static_block_block_init' );

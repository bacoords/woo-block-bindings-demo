<?php
/**
 * Plugin Name:       Woo Block Bindings Demo
 * Description:       Using Block Bindings to pull in Product Category Image
 * Version:           0.1.0
 * Requires at least: 6.9
 * Requires PHP:      7.4
 * Author:            bacoords
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       woo-block-bindings-demo
 *
 * @package WooBlockBindingsDemo
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action(
    'init',
    function () {
        register_block_bindings_source(
            'woo-block-bindings-demo/product-category-image',
            array(
                'label'              => __( 'Product Category Image', 'custom-bindings' ),
                'get_value_callback' => function ( array $source_args, $block_instance ) {
					$post_id = get_queried_object_id();
					if ( isset( $block_instance->context['termId'] ) ) {
						$post_id = $block_instance->context['termId'];
					}
					if ( ! $post_id ) {
						return 'https://placehold.co/400';
					}
					$thumbnail_id = get_term_meta( $post_id, 'thumbnail_id', true );
	    			$image = wp_get_attachment_url( $thumbnail_id );
                    return $image;
                },
				'uses_context'      => [ 'termId' ],
            )
        );
    }
);


add_action("enqueue_block_editor_assets", function() {

	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_enqueue_script(
		'woo-block-bindings-demo-editor-script',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
});
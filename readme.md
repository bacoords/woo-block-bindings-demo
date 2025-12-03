# Woo Block Bindings Demo

A simple tutorial plugin demonstrating how to use the WordPress Block Bindings API with WooCommerce's data store to display product category images on product category archive pages and inside the new Term Query Loop block.

## What It Does

This plugin registers a custom Block Binding source that pulls product category images from WooCommerce and makes them available to any WordPress block that supports the Block Bindings API (like the Image block).

It also registers a custom image block variation that automatically uses the product category image when inserted into a product category context.

## How It Works

The plugin:
1. Registers a binding source called `woo-block-bindings-demo/product-category-image`
2. Retrieves the category image using WooCommerce's term meta (`thumbnail_id`)
3. Makes the binding available in the block editor through `termId` context
4. Falls back to a placeholder image if no category image is found
5. Registers a block variation for the Image block that uses this binding source

## Learn More

- [WordPress Block Bindings API](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-bindings/)
- [WooCommerce Data Package](https://github.com/woocommerce/woocommerce/blob/trunk/packages/js/data/README.md)

## License

GPL-2.0-or-later

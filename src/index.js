import {
	registerBlockBindingsSource,
	registerBlockVariation,
} from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

const PLACEHOLDER_IMAGE = "/wp-content/uploads/woocommerce-placeholder.png";

registerBlockBindingsSource({
	name: "woo-block-bindings-demo/product-category-image",
	label: __("Product Category Image", "custom-bindings"),
	getValues({ context }) {
		return {
			url: PLACEHOLDER_IMAGE,
			alt: "Placeholder Image",
		};
	},
});

// Register a block variation for the core/image block that uses the custom binding.
registerBlockVariation("core/image", {
	name: "woo-block-bindings-demo/product-category-image-block",
	title: "Product Category Image",
	icon: "media-document",
	attributes: {
		metadata: {
			bindings: {
				url: {
					source: "woo-block-bindings-demo/product-category-image",
					args: { key: "url" },
				},
				alt: {
					source: "woo-block-bindings-demo/product-category-image",
					args: { key: "alt" },
				},
			},
		},
	},
});

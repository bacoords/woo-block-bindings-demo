import {
	registerBlockBindingsSource,
	registerBlockVariation,
} from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { EXPERIMENTAL_PRODUCT_CATEGORIES_STORE_NAME } from "@woocommerce/data";

registerBlockBindingsSource({
	name: "woo-block-bindings-demo/product-category-image",
	label: __("Product Category Image", "custom-bindings"), // We can skip the label, as it was already defined in the server in the previous example.
	getValues({ select, context }) {
		console.log(context);
		if (!context.termId) {
			return {
				url: "/wp-content/uploads/woocommerce-placeholder.png",
				alt: "Placeholder Image",
			};
		}

		const { termId } = context;
		const { getProductCategory } = select(
			EXPERIMENTAL_PRODUCT_CATEGORIES_STORE_NAME,
		);

		const term = getProductCategory(termId);
		console.log("term", term);
		return {
			url: term?.image.src,
			alt: term?.image.alt,
		};
	},
});

// Register a button that links to the Goodreads page of a book.
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
			},
		},
	},
});

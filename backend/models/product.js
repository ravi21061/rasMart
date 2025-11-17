const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    sku: { type: String, required: true }, // unique ID per variant
    price: { type: Number, required: true }, // price of this variant
    stock: { type: Number, required: true }, // available quantity
    color: String, // optional variant field
    size: String,  // optional variant field
    image: String, // image specific to this variant
}, { _id: false });

const productSchema = new mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // Link with vendor user
    },

    title: {
        type: String,
        required: true, // Name of the product
        trim: true,
    },

    slug: {
        type: String,
        unique: true,
        lowercase: true, // For SEO-friendly URLs
    },

    description: {
        type: String, // Full HTML description
    },

    shortDescription: {
        type: String, // For list views or quick view
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },

    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
    },

    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
    },

    tags: [{
        type: String, // helpful for searching
    }],

    attributes: [{
        key: String,   // like "material"
        value: String, // like "cotton"
    }],

    variants: [variantSchema], // for color/size/sku combinations

    sku: { type: String }, // for simple product (no variants)
    price: { type: Number, required: true }, // base price
    discount: { type: Number, default: 0 },  // in %

    stock: { type: Number, default: 0 }, // if no variants exist
    stockStatus: {
        type: String,
        enum: ['in_stock', 'out_of_stock', 'preorder'],
        default: 'in_stock',
    },

    thumbnail: String, // Main image
    images: [String],  // Product gallery images

    isApproved: { type: Boolean, default: false }, // Admin approval
    isFeatured: { type: Boolean, default: false }, // Homepage highlight
    isActive: { type: Boolean, default: true }, // Visibility control

    visibility: {
        type: String,
        enum: ['public', 'private', 'vendor_only'],
        default: 'public',
    },

    ratings: {
        average: { type: Number, default: 0 }, // avg. rating
        count: { type: Number, default: 0 },   // no. of reviews
    },

    returnPolicyDays: {
        type: Number, // e.g., 7 for 7-day return
    },

    warranty: {
        type: String, // e.g., "1 Year Warranty"
    },

    taxRate: {
        type: Number, default: 0, // % GST/VAT etc.
    },

    seo: {
        metaTitle: String,
        metaDescription: String,
        keywords: [String],
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    }

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

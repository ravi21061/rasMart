const Product = require("./../models/product");

const checkProductOwnership = async (req, res, next) => {
    const productId = req.params?.id;
    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ message: "Product not found" });

    // Admin 
    if (req.user.role === "admin") {
        req.product = product;
        return next();
    }

    // Vendor
    if (req.user.role === "vendor" && product.vendor.toString() != req.user._id.toString()) {
        return res.status(403).json({ message: "You can access only your own products." });
    }

    req.product = product;
    next();
};

module.exports = {
    checkProductOwnership
};
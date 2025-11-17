const express = require("express");
const router = express.Router();

const Product = require("./../models/product");
const { authMiddleware, authRoles } = require("./../middlewares/authMiddleware");
const { checkProductOwnership } = require("./../middlewares/productOwner");

// product allow vendor and admin --- /api/

// Add product (vendor only)
router.post("/products/", authMiddleware, authRoles("vendor"), () => { });

// List all products (Admin can see all, Vendor only own)
router.get("/products/", authMiddleware, checkProductOwnership, () => { });

// Get product by ID (with access check)
router.get("/products/:id", authMiddleware, checkProductOwnership, () => { });

// Admin can update any product, Vendor their own
router.put("/products/:id", authMiddleware, checkProductOwnership, () => { });

// Update product (Vendor update only own, Admin any)
router.delete("/products/:id", authMiddleware, checkProductOwnership, () => { });


router.get("/vender/products", authMiddleware, checkProductOwnership, () => { });

router.post("/list?vendor_id=", () => { });

module.exports = router;
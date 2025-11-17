const express = require("express");
const router = express.Router();

router.post("/dashboard", () => { });

router.post("/vendors", () => { });

router.post("/vendors/:id/approve", () => { });

router.post("/customers", () => { });

router.post("/orders", () => { });

router.post("/products/pending", () => { });

router.post("/products/:id/approve", () => { });

router.post("/reports/sales", () => { });

router.post("/reports/abandoned-carts", () => { });

module.exports = router;
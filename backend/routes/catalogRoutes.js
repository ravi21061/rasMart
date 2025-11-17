const express = require("express");
const router = express.Router();

// Catalog for search/filter

router.post("/categories", () => { });

router.post("/subcategories", () => { });

router.post("/brands", () => { });

// attributes (like size, color)
router.post("/attributes", () => { });

router.post("/search?q=shoes", () => { });

router.post("/products/recommended", () => { });


module.exports = router;
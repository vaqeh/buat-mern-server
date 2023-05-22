const express = require("express");

const router = express.Router();
const productsController = require("../controllers/products");
// Create -> post
// router.post("/product", productsController.createProduct);
// read -> get
router.get("/", productsController.getAllProducts);
router.get("/:table", productsController.getByTable);
router.get("/:table/:id", productsController.getById);
router.post("/:table", productsController.create);
router.delete("/:table/:id", productsController.hapus);
router.put("/:table/:id", productsController.editPut);

//
// router.put("/product", (req, res, next) => {
//   res.json([
//     { nama: "efan bahr", asal: "Surabaya" },
//     { nama: "bahr", asal: "jatim" },
//   ]);
//   next();
// });
// router.delete("/product", (req, res, next) => {
//   res.json([
//     { nama: "efan bahr", asal: "Surabaya" },
//     { nama: "bahr", asal: "jatim" },
//   ]);
//   next();
// });
module.exports = router;

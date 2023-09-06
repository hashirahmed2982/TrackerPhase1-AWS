let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let WalletSchema = require("../models/wallet");

router.get("/wallets", (req, res , next) => {
    console.log("wallet");
    WalletSchema.find().then((result) => {
    res.json(result);
})
.catch((err)=>{
    next(err);
})
});

module.exports = router;
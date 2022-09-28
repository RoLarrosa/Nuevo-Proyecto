const router = require("express").Router();
const {
    gethome,
    posthome,
    puthome,
    deletehome
} = require("../controllers/home.controllers");

router.get("/",gethome)

router.post("/",posthome)

router.put("/", puthome)

router.delete("/", deletehome)

module.exports = router;
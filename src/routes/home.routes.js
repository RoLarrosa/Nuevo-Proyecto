const router = require("express").Router();
const {
    gethome,
    posthome,
    puthome,
    deletehome
} = require("../controlles/home.controlles");

router.get("/",gethome)

router.post("/",posthome)

router.put("/", puthome)

router.delete("/", deletehome)

module.exports = router;
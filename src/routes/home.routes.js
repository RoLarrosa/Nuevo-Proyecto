const router = require("express").Router();
const {
    gethome,
    getUser,
    posthome,
    postUser,
    puthome,
    deletehome
} = require("../controlles/home.controlles");

router.get("/",gethome)

router.get("/user",getUser)

router.post("/",posthome)

router.post("/user",postUser)

router.put("/", puthome)

router.delete("/", deletehome)

module.exports = router;
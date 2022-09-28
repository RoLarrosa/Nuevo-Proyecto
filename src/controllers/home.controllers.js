const ctrlHome = {};

ctrlHome.gethome = (req, res) => {
    res.send({
        message: "Peticion GET"
    })
}

ctrlHome.posthome = (req, res) => {
    console.log(req.body)
    res.send({
        message: "Peticion POST"
    })
}

ctrlHome.puthome = (req, res) => {
    res.send({
        message: "Peticion PUT"
    })
}

ctrlHome.deletehome = (req, res) => {
    res.send({
        message: "Peticion DELETE"
    })
}

module.exports = ctrlHome;
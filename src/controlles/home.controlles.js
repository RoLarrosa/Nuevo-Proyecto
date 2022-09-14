const ctrlHome = {};

ctrlHome.gethome = (req, res) => {
    res.send({
        message: "Peticion GET"
    })
}

ctrlHome.getUser = (req, res) => {
    console.log(req.body)
    res.send({
        message: "Peticion GET USER"
    })
}

ctrlHome.posthome = (req, res) => {
    res.send({
        message: "Peticion POST"
    })
}

ctrlHome.postUser = (req, res) => {
    console.log(req.body)
    res.send({
        message: "Peticion POST USER"
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
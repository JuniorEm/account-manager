module.exports = (app) => {

    app.post("/user", (req, res) => {
        var userRepository = new app.app.repository.user();
        userRepository
            .create(req.body)
            .then((result) => res.status(200).send(result))
            .catch((err) => {
                console.log(err);
                res.status(500).send(err);
            });
    });

    app.get("/user/:id", (req, res) => {
        var userRepository = new app.app.repository.user();
        userRepository
            .findById(req.params.id)
            .then((result) => res.status(200).send(result))
            .catch((err) => {
                console.log(err);
                res.status(500).send(err);
            });
    });

    app.put("/user", (req, res) => {
        var userRepository = new app.app.repository.user();
        userRepository
            .update(req.body)
            .then((result) => res.status(200).send(result))
            .catch((err) => {
                console.log(err);
                res.status(500).send(err);
            });
    });

    app.delete("/user/:id", (req, res) => {
        var userRepository = new app.app.repository.user();
        userRepository
            .delete(req.params.id)
            .then((result) => res.status(200).send(result))
            .catch((err) => {
                console.log(err);
                res.status(500).send(err);
            });
    });
};
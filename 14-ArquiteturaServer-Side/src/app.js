const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");

function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => res.send("API Users - healthy"));

    app.use("/users", usersRoutes);

    app.use(errorHandler);

    return app;
}

module.exports = createApp;
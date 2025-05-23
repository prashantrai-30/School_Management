const express = require("express");
const { ServerConfig } = require("./config/index");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server: ${ServerConfig.PORT}`);
});

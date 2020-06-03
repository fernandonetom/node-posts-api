const app = require("./app");

app.set("port", 7777);

const server = app.listen(app.get("port"), () => {
	console.log("Server running in port " + server.address().port);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const init_1 = __importDefault(require("./firestore/init"));
const app = express_1.default();
const port = 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    console.log("hit");
    res.send("Hello world!!!");
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
console.log(init_1.default);
//# sourceMappingURL=index.js.map
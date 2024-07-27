"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Serve static files from the 'public' directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Homepage</h1>');
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

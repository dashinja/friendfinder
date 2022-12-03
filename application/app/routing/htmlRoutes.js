"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
function default_1(app) {
    // A GET Route to `/survey` which should display the survey page.☑
    app.get('/survey', function (_req, res) {
        res.sendFile(path_1.default.join(__dirname, '../public/survey.html'));
    });
    // A default, catch-all route that leads to `home.html` which displays the home page.☑
    app.get('*', function (_req, res) {
        res.sendFile(path_1.default.join(__dirname, '../public/home.html'));
    });
}
exports.default = default_1;

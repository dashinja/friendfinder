"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
var path_1 = require("path");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
var apiRoutes_1 = __importDefault(require("./app/routing/apiRoutes"));
var htmlRoutes_1 = __importDefault(require("./app/routing/htmlRoutes"));
app.use((0, express_1.static)((0, path_1.join)(__dirname, '/app/public')));
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, express_1.json)());
(0, apiRoutes_1.default)(app);
(0, htmlRoutes_1.default)(app);
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT, "..."));
});

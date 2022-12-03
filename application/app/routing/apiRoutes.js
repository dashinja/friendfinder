"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var friends_1 = __importDefault(require("../data/friends"));
var profileDataTransform_1 = __importDefault(require("../../utility/methods/profileDataTransform"));
var getProfileImages = (0, profileDataTransform_1.default)(friends_1.default);
setInterval(function () {
    getProfileImages();
}, 5200 * 1000);
function default_1(app) {
    var _this = this;
    app.get('/api/friends', function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.json(friends_1.default);
            return [2 /*return*/];
        });
    }); });
    app.post('/api/friends', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var sumCollection_1, sum_1, _i, profiles_1, obj, i, delta_1, matchSuccess_1, matched, myResponseObject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getProfileImages()];
                case 1:
                    _a.sent();
                    friends_1.default;
                    if (req.body) {
                        friends_1.default.push(req.body);
                        sumCollection_1 = [];
                        for (_i = 0, profiles_1 = friends_1.default; _i < profiles_1.length; _i++) {
                            obj = profiles_1[_i];
                            sum_1 = 0;
                            obj.scores.forEach(function (num) {
                                sum_1 += num;
                            });
                            sumCollection_1.push(sum_1);
                        }
                        // add .scoreTotal prop to elements in profiles array
                        friends_1.default.forEach(function (profile, i) {
                            profile.scoreTotal = sumCollection_1[i];
                        });
                        for (i = 0; i < friends_1.default.length; i++) {
                            friends_1.default[i].scoreTotal = sumCollection_1[i];
                        }
                        delta_1 = 5;
                        matched = function () {
                            for (var i = 0; i < friends_1.default.length; i++) {
                                var newUserTotalScore = friends_1.default[friends_1.default.length - 1].scoreTotal;
                                var existingUserTotalScore = friends_1.default[i].scoreTotal;
                                if (newUserTotalScore && existingUserTotalScore) {
                                    var compare = Math.abs(newUserTotalScore - existingUserTotalScore);
                                    if (compare <= delta_1 &&
                                        friends_1.default[i].name !== friends_1.default[friends_1.default.length - 1].name) {
                                        var matchName = friends_1.default[i].name;
                                        var matchPhoto = friends_1.default[i].photo;
                                        var matchPerson = {
                                            name: matchName,
                                            photo: matchPhoto,
                                        };
                                        return matchPerson;
                                    }
                                    else {
                                        matchSuccess_1 = false;
                                        continue;
                                    }
                                }
                            }
                            return matchSuccess_1;
                        };
                        myResponseObject = {
                            errorCheck: true,
                            myData: friends_1.default,
                            matchSuccess: true,
                            match: matched(),
                        };
                        if (!matched()) {
                            myResponseObject.matchSuccess = false;
                        }
                        res.json(myResponseObject);
                    }
                    else {
                        res.json(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.default = default_1;

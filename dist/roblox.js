"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserIdFromUsername = exports.getNameRepresentationFromInfo = exports.getUserInfo = void 0;
const noblox_js_1 = __importDefault(require("noblox.js"));
async function getUserInfo(user) {
    let userId = typeof user == "string" ? await noblox_js_1.default.getIdFromUsername(user) : user;
    return await noblox_js_1.default.getPlayerInfo(userId);
}
exports.getUserInfo = getUserInfo;
function getNameRepresentationFromInfo(userInfo) {
    return userInfo.username == userInfo.displayName ? userInfo.username : `${userInfo.displayName} (@${userInfo.username})`;
}
exports.getNameRepresentationFromInfo = getNameRepresentationFromInfo;
async function getUserIdFromUsername(username) {
    return await noblox_js_1.default.getIdFromUsername(username);
}
exports.getUserIdFromUsername = getUserIdFromUsername;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameRepresentationFromInfo = exports.getUserInfo = void 0;
const bloxy_1 = __importDefault(require("bloxy"));
const client = new bloxy_1.default.Client();
async function getUserInfo(user) {
    return await client.getUser(user);
}
exports.getUserInfo = getUserInfo;
function getNameRepresentationFromInfo(userInfo) {
    return userInfo.name == userInfo.displayName ? userInfo.name : `${userInfo.displayName} (@${userInfo.name})`;
}
exports.getNameRepresentationFromInfo = getNameRepresentationFromInfo;

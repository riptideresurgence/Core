"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameRepresentationFromInfo = exports.getUserInfo = void 0;
const bloxy = require("bloxy");
const client = new bloxy.Client({
    rest: {
        requester: require("got-cjs")
    }
});
async function getUserInfo(user) {
    return await client.getUser(user);
}
exports.getUserInfo = getUserInfo;
function getNameRepresentationFromInfo(userInfo) {
    return userInfo.name == userInfo.displayName ? userInfo.name : `${userInfo.displayName} (@${userInfo.name})`;
}
exports.getNameRepresentationFromInfo = getNameRepresentationFromInfo;

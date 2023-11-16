"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntriesFromOrderedDataStore = exports.getEntryFromDataStore = exports.setOpenCloudKey = exports.getPlayerThumbnailUsingUserId = exports.getUserIdFromUsername = exports.getNameRepresentationFromInfo = exports.getBatchUserInfo = exports.getUserInfo = void 0;
const noblox_js_1 = __importDefault(require("noblox.js"));
const axios_1 = __importDefault(require("axios"));
let currentOpenCloudKey = "";
async function getUserInfo(user) {
    let userId = typeof user == "string" ? await noblox_js_1.default.getIdFromUsername(user) : user;
    return await noblox_js_1.default.getPlayerInfo(userId);
}
exports.getUserInfo = getUserInfo;
async function getBatchUserInfo(userIds) {
    return new Promise((resolve, reject) => {
        axios_1.default.post("https://users.roblox.com/v1/users", {
            "userIds": userIds
        })
            .then((response) => {
            let playerInfos = [];
            response.data.data.forEach((userInfo) => {
                playerInfos.push({
                    username: userInfo.name,
                    displayName: userInfo.displayName,
                    userId: userInfo.id
                });
            });
            resolve(playerInfos);
        })
            .catch((err) => {
            reject(`Failed to request batch user info: ${err}`);
        });
    });
}
exports.getBatchUserInfo = getBatchUserInfo;
function getNameRepresentationFromInfo(userInfo) {
    return userInfo.username == userInfo.displayName ? userInfo.username : `${userInfo.displayName} (@${userInfo.username})`;
}
exports.getNameRepresentationFromInfo = getNameRepresentationFromInfo;
async function getUserIdFromUsername(username) {
    return await noblox_js_1.default.getIdFromUsername(username);
}
exports.getUserIdFromUsername = getUserIdFromUsername;
async function getPlayerThumbnailUsingUserId(userId, size, isCircular, cropType) {
    return await noblox_js_1.default.getPlayerThumbnail(userId, size, "png", isCircular, cropType);
}
exports.getPlayerThumbnailUsingUserId = getPlayerThumbnailUsingUserId;
async function setOpenCloudKey(key) {
    currentOpenCloudKey = key;
    await noblox_js_1.default.setAPIKey(key);
}
exports.setOpenCloudKey = setOpenCloudKey;
async function getEntryFromDataStore(universeId, datastoreName, entryKey, scope) {
    return await noblox_js_1.default.getDatastoreEntry(universeId, datastoreName, entryKey, scope);
}
exports.getEntryFromDataStore = getEntryFromDataStore;
async function getEntriesFromOrderedDataStore(universeId, orderedDataStoreName, maxPageSize, isDescending, scope = "global") {
    return new Promise((resolve, reject) => {
        axios_1.default.get(`https://apis.roblox.com/ordered-data-stores/v1/universes/${universeId}/orderedDataStores/${orderedDataStoreName}/scopes/${scope}/entries`, {
            headers: {
                "x-api-key": currentOpenCloudKey
            },
            params: {
                "max_page_size": maxPageSize,
                "order_by": isDescending ? "desc" : null,
            }
        })
            .then((response) => {
            let entries = [];
            response.data.data.forEach((entry) => {
                entries.push({
                    id: entry.id,
                    value: entry.value
                });
            });
            resolve(entries);
        })
            .catch((err) => {
            reject(`Failed to request entries: ${err}`);
        });
    });
}
exports.getEntriesFromOrderedDataStore = getEntriesFromOrderedDataStore;

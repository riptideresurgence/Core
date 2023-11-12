"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBanList = exports.unbanPlayer = exports.banPlayer = exports.isPlayerBanned = void 0;
const database = __importStar(require("./database"));
async function isPlayerBanned(UserId) {
    let banned = false;
    const document = await database.findBannedDocumentFromUserId(UserId);
    if (document && document.bannedUntil) {
        const currentDate = new Date();
        if (document.bannedUntil == -1 || (currentDate.getTime() / 1000) < document.bannedUntil) {
            banned = true;
        }
    }
    return banned;
}
exports.isPlayerBanned = isPlayerBanned;
async function banPlayer(banMethod, userId, durationInMinutes, moderator, banReason) {
    let document = await database.findBannedDocumentFromUserId(userId);
    if (!document) {
        document = await database.createBannedDocument(userId);
    }
    const currentDate = new Date();
    const currentTime = Math.floor(currentDate.getTime() / 1000);
    const bannedUntil = durationInMinutes != -1 ? currentTime + (durationInMinutes * 60) : -1;
    document.updateOne({
        bannedTime: currentTime,
        bannedUntil: bannedUntil,
        reason: banReason,
        moderator: `${moderator} (${banMethod})`
    }).exec();
}
exports.banPlayer = banPlayer;
async function unbanPlayer(userId) {
    await database.deleteBannedDocument({
        userId: userId
    });
}
exports.unbanPlayer = unbanPlayer;
async function getBanList() {
    return await database.getAllBannedDocuments();
}
exports.getBanList = getBanList;

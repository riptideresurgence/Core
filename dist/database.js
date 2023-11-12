"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBannedDocuments = exports.deleteBannedDocument = exports.createBannedDocument = exports.findBannedDocumentFromUserId = exports.getAllApiKeyDocuments = exports.deleteApiKeyDocument = exports.createApiKeyDocument = exports.findApiKeyDocumentFromUser = exports.findApiKeyDocumentFromApiKey = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const misc_1 = require("./misc");
// API Keys generator
const apiKeyGenerator = new misc_1.IDTransformClass("a4zxs2w5qe1dcrf3vg6tby9h7njum8ik0lop", "92748350641");
// Schemas
const apiKeySchema = new mongoose_1.default.Schema({
    value: String,
    assignOwner: String,
    associatedDiscordUser: String,
    enabled: Boolean,
    timeCreated: Number,
});
const bannedPlayerSchema = new mongoose_1.default.Schema({
    userId: Number,
    bannedTime: Number,
    bannedUntil: Number,
    reason: String,
    moderator: String
});
// Models
const apiKeyModel = mongoose_1.default.model("apiKey", apiKeySchema);
const bannedPlayerModel = mongoose_1.default.model("bannedPlayer", bannedPlayerSchema);
// Functions
async function connect(uri, options) {
    await mongoose_1.default.connect(uri);
}
exports.connect = connect;
// ApiKey
async function _generateApiKey() {
    const documentCount = await apiKeyModel.countDocuments().exec();
    return apiKeyGenerator.toShort((documentCount * 8 + Date.now() * 2).toString());
}
async function findApiKeyDocumentFromApiKey(apiKey) {
    const document = await apiKeyModel.findOne({
        value: apiKey
    });
    return document;
}
exports.findApiKeyDocumentFromApiKey = findApiKeyDocumentFromApiKey;
async function findApiKeyDocumentFromUser(user) {
    const document = await apiKeyModel.findOne({ $or: [
            { assignOwner: user },
            { associatedDiscordUser: user }
        ] }).exec();
    return document;
}
exports.findApiKeyDocumentFromUser = findApiKeyDocumentFromUser;
async function createApiKeyDocument(apiKey) {
    let document = await new apiKeyModel({
        value: await _generateApiKey(),
        timeCreated: Date.now(),
        enabled: true
    }).save();
    return document;
}
exports.createApiKeyDocument = createApiKeyDocument;
async function deleteApiKeyDocument(searchValues) {
    await apiKeyModel.deleteOne(searchValues);
}
exports.deleteApiKeyDocument = deleteApiKeyDocument;
async function getAllApiKeyDocuments() {
    return apiKeyModel.find();
}
exports.getAllApiKeyDocuments = getAllApiKeyDocuments;
// BannedPlayer
async function findBannedDocumentFromUserId(userId) {
    const document = await bannedPlayerModel.findOne({
        userId: userId
    }).exec();
    return document;
}
exports.findBannedDocumentFromUserId = findBannedDocumentFromUserId;
async function createBannedDocument(userId, bannedTime, bannedUntil, reason, moderator) {
    let document = await new bannedPlayerModel({
        userId: userId,
        bannedTime: bannedTime,
        bannedUntil: bannedUntil,
        reason: reason,
        moderator: moderator
    }).save();
    return document;
}
exports.createBannedDocument = createBannedDocument;
async function deleteBannedDocument(searchValues) {
    await bannedPlayerModel.deleteOne(searchValues);
}
exports.deleteBannedDocument = deleteBannedDocument;
async function getAllBannedDocuments() {
    return bannedPlayerModel.find();
}
exports.getAllBannedDocuments = getAllBannedDocuments;

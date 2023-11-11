"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBannedDocuments = exports.deleteBannedDocument = exports.createBannedDocument = exports.findBannedDocumentFromUserId = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schemas
const BannedPlayerSchema = new mongoose_1.default.Schema({
    userId: Number,
    bannedTime: Number,
    bannedUntil: Number,
    reason: String,
    moderator: String
});
// Models
const BannedPlayerModel = mongoose_1.default.model("bannedPlayer", BannedPlayerSchema);
// Functions
async function connect(uri, options) {
    await mongoose_1.default.connect(uri);
}
exports.connect = connect;
// BannedPlayer
async function findBannedDocumentFromUserId(userId) {
    const document = await BannedPlayerModel.findOne({
        userId: userId
    });
    return document;
}
exports.findBannedDocumentFromUserId = findBannedDocumentFromUserId;
async function createBannedDocument(modelValues) {
    let document = await new BannedPlayerModel(modelValues).save();
    return document;
}
exports.createBannedDocument = createBannedDocument;
async function deleteBannedDocument(searchValues) {
    await BannedPlayerModel.deleteOne(searchValues);
}
exports.deleteBannedDocument = deleteBannedDocument;
async function getAllBannedDocuments() {
    return BannedPlayerModel.find();
}
exports.getAllBannedDocuments = getAllBannedDocuments;

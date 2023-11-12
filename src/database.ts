import mongoose from "mongoose";

import { IDTransformClass } from "./misc";

// API Keys generator
const apiKeyGenerator = new IDTransformClass("a4zxs2w5qe1dcrf3vg6tby9h7njum8ik0lop", "92748350641")

// Schemas
const apiKeySchema = new mongoose.Schema({
    value: String,
    assignOwner: String,
    associatedDiscordUser: String,
    enabled: Boolean,
    timeCreated: Number,
});
const bannedPlayerSchema = new mongoose.Schema({
    userId: Number,
    bannedTime: Number,
    bannedUntil: Number,
    reason: String,
    moderator: String
});

// Models
const apiKeyModel = mongoose.model("apiKey", apiKeySchema);
const bannedPlayerModel = mongoose.model("bannedPlayer", bannedPlayerSchema);

// Functions
async function connect(uri: string, options: mongoose.ConnectOptions | undefined) {
    await mongoose.connect(uri);
}

// ApiKey
async function _generateApiKey() {
    const documentCount = await apiKeyModel.countDocuments().exec();
    return apiKeyGenerator.toShort((documentCount * 8 + Date.now() * 2).toString());
}

async function findApiKeyDocumentFromApiKey(apiKey: string) {
    const document = await apiKeyModel.findOne({
        value: apiKey
    });
    return document;
}

async function findApiKeyDocumentFromUser(user: string) {
    const document = await apiKeyModel.findOne({$or: [
        { assignOwner: user },
        { associatedDiscordUser: user }
    ]}).exec();
    return document;
}

async function createApiKeyDocument(apiKey: string) {
    let document = await new apiKeyModel({
        value: await _generateApiKey(),
        timeCreated: Date.now(),
        enabled: true
    }).save();
    return document;
}

async function deleteApiKeyDocument(searchValues: any) {
    await apiKeyModel.deleteOne(searchValues);
}

async function getAllApiKeyDocuments() {
    return apiKeyModel.find();
}

// BannedPlayer
async function findBannedDocumentFromUserId(userId: number) {
    const document = await bannedPlayerModel.findOne({
        userId: userId
    }).exec();
    return document;
}

async function createBannedDocument(
    userId: number | undefined,
    bannedTime: number | undefined,
    bannedUntil: number | undefined,
    reason: string | undefined,
    moderator: string | undefined
) {
    let document = await new bannedPlayerModel({
        userId: userId,
        bannedTime: bannedTime,
        bannedUntil: bannedUntil,
        reason: reason,
        moderator: moderator
    }).save();
    return document;
}

async function deleteBannedDocument(searchValues: any) {
    await bannedPlayerModel.deleteOne(searchValues);
}

async function getAllBannedDocuments() {
    return bannedPlayerModel.find();
}

export {
    connect,

    findApiKeyDocumentFromApiKey,
    findApiKeyDocumentFromUser,
    createApiKeyDocument,
    deleteApiKeyDocument,
    getAllApiKeyDocuments,

    findBannedDocumentFromUserId,
    createBannedDocument,
    deleteBannedDocument,
    getAllBannedDocuments
} 
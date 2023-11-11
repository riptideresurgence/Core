import mongoose from "mongoose";

// Schemas
const BannedPlayerSchema = new mongoose.Schema({
    userId: Number,
    bannedTime: Number,
    bannedUntil: Number,
    reason: String,
    moderator: String
});

// Models
const BannedPlayerModel = mongoose.model("bannedPlayer", BannedPlayerSchema);

// Functions
async function connect(uri: string, options: mongoose.ConnectOptions | undefined) {
    await mongoose.connect(uri);
}

// BannedPlayer
async function findBannedDocumentFromUserId(userId: number) {
    const document = await BannedPlayerModel.findOne({
        userId: userId
    });
    return document;
}

async function createBannedDocument(modelValues) {
    let document = await new BannedPlayerModel(modelValues).save();
    return document;
}

async function deleteBannedDocument(searchValues) {
    await BannedPlayerModel.deleteOne(searchValues);
}

async function getAllBannedDocuments() {
    return BannedPlayerModel.find();
}

export {connect, findBannedDocumentFromUserId, createBannedDocument, deleteBannedDocument, getAllBannedDocuments} 
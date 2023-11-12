import mongoose from "mongoose";
declare function connect(uri: string, options: mongoose.ConnectOptions | undefined): Promise<void>;
declare function findBannedDocumentFromUserId(userId: number): Promise<(mongoose.Document<unknown, {}, {
    userId?: number | null | undefined;
    bannedTime?: number | null | undefined;
    bannedUntil?: number | null | undefined;
    reason?: string | null | undefined;
    moderator?: string | null | undefined;
}> & {
    userId?: number | null | undefined;
    bannedTime?: number | null | undefined;
    bannedUntil?: number | null | undefined;
    reason?: string | null | undefined;
    moderator?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}) | null>;
declare function createBannedDocument(modelValues: any): Promise<mongoose.Document<unknown, {}, {
    userId?: number | null | undefined;
    bannedTime?: number | null | undefined;
    bannedUntil?: number | null | undefined;
    reason?: string | null | undefined;
    moderator?: string | null | undefined;
}> & {
    userId?: number | null | undefined;
    bannedTime?: number | null | undefined;
    bannedUntil?: number | null | undefined;
    reason?: string | null | undefined;
    moderator?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>;
declare function deleteBannedDocument(searchValues: any): Promise<void>;
declare function getAllBannedDocuments(): Promise<(mongoose.Document<unknown, {}, {
    userId?: number | null | undefined;
    bannedTime?: number | null | undefined;
    bannedUntil?: number | null | undefined;
    reason?: string | null | undefined;
    moderator?: string | null | undefined;
}> & {
    userId?: number | null | undefined;
    bannedTime?: number | null | undefined;
    bannedUntil?: number | null | undefined;
    reason?: string | null | undefined;
    moderator?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
})[]>;
export { connect, findBannedDocumentFromUserId, createBannedDocument, deleteBannedDocument, getAllBannedDocuments };

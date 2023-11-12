import mongoose from "mongoose";
declare function connect(uri: string, options: mongoose.ConnectOptions | undefined): Promise<void>;
declare function findApiKeyDocumentFromApiKey(apiKey: string): Promise<(mongoose.Document<unknown, {}, {
    value?: string | null | undefined;
    assignOwner?: string | null | undefined;
    associatedDiscordUser?: string | null | undefined;
    enabled?: boolean | null | undefined;
    timeCreated?: number | null | undefined;
}> & {
    value?: string | null | undefined;
    assignOwner?: string | null | undefined;
    associatedDiscordUser?: string | null | undefined;
    enabled?: boolean | null | undefined;
    timeCreated?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}) | null>;
declare function findApiKeyDocumentFromUser(user: string): Promise<(mongoose.Document<unknown, {}, {
    value?: string | null | undefined;
    assignOwner?: string | null | undefined;
    associatedDiscordUser?: string | null | undefined;
    enabled?: boolean | null | undefined;
    timeCreated?: number | null | undefined;
}> & {
    value?: string | null | undefined;
    assignOwner?: string | null | undefined;
    associatedDiscordUser?: string | null | undefined;
    enabled?: boolean | null | undefined;
    timeCreated?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}) | null>;
declare function createApiKeyDocument(apiKey: string): Promise<mongoose.Document<unknown, {}, {
    value?: string | null | undefined;
    assignOwner?: string | null | undefined;
    associatedDiscordUser?: string | null | undefined;
    enabled?: boolean | null | undefined;
    timeCreated?: number | null | undefined;
}> & {
    value?: string | null | undefined;
    assignOwner?: string | null | undefined;
    associatedDiscordUser?: string | null | undefined;
    enabled?: boolean | null | undefined;
    timeCreated?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>;
declare function deleteApiKeyDocument(searchValues: any): Promise<void>;
declare function getAllApiKeyDocuments(): Promise<(mongoose.Document<unknown, {}, {
    value?: string | null | undefined;
    assignOwner?: string | null | undefined;
    associatedDiscordUser?: string | null | undefined;
    enabled?: boolean | null | undefined;
    timeCreated?: number | null | undefined;
}> & {
    value?: string | null | undefined;
    assignOwner?: string | null | undefined;
    associatedDiscordUser?: string | null | undefined;
    enabled?: boolean | null | undefined;
    timeCreated?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
})[]>;
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
declare function createBannedDocument(userId?: number, bannedTime?: number, bannedUntil?: number, reason?: string, moderator?: string): Promise<mongoose.Document<unknown, {}, {
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
export { connect, findApiKeyDocumentFromApiKey, findApiKeyDocumentFromUser, createApiKeyDocument, deleteApiKeyDocument, getAllApiKeyDocuments, findBannedDocumentFromUserId, createBannedDocument, deleteBannedDocument, getAllBannedDocuments };

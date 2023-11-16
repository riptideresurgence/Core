import noblox from "noblox.js";
interface BatchPlayerInfo {
    username: string;
    displayName: string;
    userId: number;
}
interface OrderedDataStoreEntry {
    id: string;
    value: string;
}
declare function getUserInfo(user: number | string): Promise<noblox.PlayerInfo>;
declare function getBatchUserInfo(userIds: number[]): Promise<BatchPlayerInfo[]>;
declare function getNameRepresentationFromInfo(userInfo: noblox.PlayerInfo): string;
declare function getUserIdFromUsername(username: string): Promise<number>;
declare function getPlayerThumbnailUsingUserId(userId: number, size: noblox.BodySizes | noblox.BustSizes | noblox.HeadshotSizes, isCircular?: boolean | undefined, cropType?: "body" | "bust" | "headshot" | undefined): Promise<noblox.PlayerThumbnailData[]>;
declare function setOpenCloudKey(key: string): Promise<void>;
declare function getEntryFromDataStore(universeId: number, datastoreName: string, entryKey: string, scope?: string): Promise<noblox.DatastoreEntry>;
declare function getEntriesFromOrderedDataStore(universeId: number, orderedDataStoreName: string, maxPageSize: number, isDescending: boolean, scope?: string): Promise<OrderedDataStoreEntry[]>;
export { BatchPlayerInfo, OrderedDataStoreEntry, getUserInfo, getBatchUserInfo, getNameRepresentationFromInfo, getUserIdFromUsername, getPlayerThumbnailUsingUserId, setOpenCloudKey, getEntryFromDataStore, getEntriesFromOrderedDataStore };

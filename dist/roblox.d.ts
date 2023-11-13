import noblox from "noblox.js";
declare function getUserInfo(user: number | string): Promise<noblox.PlayerInfo>;
declare function getNameRepresentationFromInfo(userInfo: noblox.PlayerInfo): string;
declare function getUserIdFromUsername(username: string): Promise<number>;
declare function getPlayerThumbnailUsingUserId(userId: number, size: noblox.BodySizes | noblox.BustSizes | noblox.HeadshotSizes, isCircular?: boolean | undefined, cropType?: "body" | "bust" | "headshot" | undefined): Promise<noblox.PlayerThumbnailData[]>;
declare function setOpenCloudKey(key: string): Promise<void>;
declare function getEntryFromDataStore(universeId: number, datastoreName: string, entryKey: string, scope?: string): Promise<noblox.DatastoreEntry>;
export { getUserInfo, getNameRepresentationFromInfo, getUserIdFromUsername, getPlayerThumbnailUsingUserId, setOpenCloudKey, getEntryFromDataStore };

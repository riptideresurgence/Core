import noblox from "noblox.js";
declare function getUserInfo(user: number | string): Promise<noblox.PlayerInfo>;
declare function getNameRepresentationFromInfo(userInfo: noblox.PlayerInfo): string;
declare function getUserIdFromUsername(username: string): Promise<number>;
declare function setOpenCloudKey(key: string): Promise<void>;
declare function getEntryFromDataStore(universeId: number, datastoreName: string, entryKey: string, scope?: string): Promise<noblox.DatastoreEntry>;
export { getUserInfo, getNameRepresentationFromInfo, getUserIdFromUsername, setOpenCloudKey, getEntryFromDataStore };

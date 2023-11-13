import noblox from "noblox.js";

async function getUserInfo(user: number | string) {
    let userId = typeof user == "string" ? await noblox.getIdFromUsername(user) : user;
    return await noblox.getPlayerInfo(userId);
}

function getNameRepresentationFromInfo(userInfo: noblox.PlayerInfo) {
    return userInfo.username == userInfo.displayName ? userInfo.username : `${userInfo.displayName} (@${userInfo.username})`;
}

async function getUserIdFromUsername(username: string): Promise<number> {
    return await noblox.getIdFromUsername(username);
}

async function getPlayerThumbnailUsingUserId(userId: number, size: noblox.BodySizes | noblox.BustSizes | noblox.HeadshotSizes, isCircular?: boolean | undefined, cropType?: "body" | "bust" | "headshot" | undefined) {
    return await noblox.getPlayerThumbnail(userId, size, "png", isCircular, cropType);
}

async function setOpenCloudKey(key: string) {
    await noblox.setAPIKey(key);
}

async function getEntryFromDataStore(universeId: number, datastoreName: string, entryKey: string, scope?: string) {
    return await noblox.getDatastoreEntry(universeId, datastoreName, entryKey, scope)
}

export {
    getUserInfo,
    getNameRepresentationFromInfo,
    getUserIdFromUsername,
    getPlayerThumbnailUsingUserId,

    setOpenCloudKey,
    getEntryFromDataStore
}
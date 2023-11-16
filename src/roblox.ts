import noblox from "noblox.js";
import axios from "axios";

interface BatchPlayerInfo {
    username: string;
    displayName: string;
    userId: number
}
interface OrderedDataStoreEntry {
    id: string;
    value: string
}

let currentOpenCloudKey = "";

async function getUserInfo(user: number | string) {
    let userId = typeof user == "string" ? await noblox.getIdFromUsername(user) : user;
    return await noblox.getPlayerInfo(userId);
}

async function getBatchUserInfo(userIds: number[]): Promise<BatchPlayerInfo[]> {
    return new Promise((resolve, reject) => {
        axios.post("https://users.roblox.com/v1/users", {
            "userIds": userIds
        })
            .then((response) => {
                let playerInfos: BatchPlayerInfo[] = [];
                response.data.data.forEach((userInfo: any) => {
                    playerInfos.push({
                        username: userInfo.name,
                        displayName: userInfo.displayName,
                        userId: userInfo.id
                    })
                });

                resolve(playerInfos);
            })
            .catch((err) => {
                reject(`Failed to request batch user info: ${err}`);
            })
    })
}

function getNameRepresentationFromInfo(userInfo: noblox.PlayerInfo | BatchPlayerInfo) {
    return userInfo.username == userInfo.displayName ? userInfo.username : `${userInfo.displayName} (@${userInfo.username})`;
}

async function getUserIdFromUsername(username: string): Promise<number> {
    return await noblox.getIdFromUsername(username);
}

async function getPlayerThumbnailUsingUserId(userId: number, size: noblox.BodySizes | noblox.BustSizes | noblox.HeadshotSizes, isCircular?: boolean | undefined, cropType?: "body" | "bust" | "headshot" | undefined) {
    return await noblox.getPlayerThumbnail(userId, size, "png", isCircular, cropType);
}

async function setOpenCloudKey(key: string) {
    currentOpenCloudKey = key;
    await noblox.setAPIKey(key);
}

async function getEntryFromDataStore(universeId: number, datastoreName: string, entryKey: string, scope?: string) {
    return await noblox.getDatastoreEntry(universeId, datastoreName, entryKey, scope)
}

async function getEntriesFromOrderedDataStore(universeId: number, orderedDataStoreName: string, maxPageSize: number, isDescending: boolean, scope: string = "global"): Promise<OrderedDataStoreEntry[]> {
    return new Promise((resolve, reject) => {
        axios.get(`https://apis.roblox.com/ordered-data-stores/v1/universes/${universeId}/orderedDataStores/${orderedDataStoreName}/scopes/${scope}/entries`, {
            headers: {
                "x-api-key": currentOpenCloudKey
            },
            params: {
                "max_page_size": maxPageSize,
                "order_by": isDescending ? "desc" : null,
            }
        })
            .then((response) => {
                let entries: OrderedDataStoreEntry[] = [];
                response.data.data.forEach((entry: any) => {
                    entries.push({
                        id: entry.id,
                        value: entry.value
                    })
                });
                resolve(entries);
            })
            .catch((err) => {
                reject(`Failed to request entries: ${err}`);
            })
    })
}

export {
    BatchPlayerInfo,
    OrderedDataStoreEntry,

    getUserInfo,
    getBatchUserInfo,
    getNameRepresentationFromInfo,
    getUserIdFromUsername,
    getPlayerThumbnailUsingUserId,

    setOpenCloudKey,
    getEntryFromDataStore,
    getEntriesFromOrderedDataStore
}
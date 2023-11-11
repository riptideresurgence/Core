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

export {getUserInfo, getNameRepresentationFromInfo, getUserIdFromUsername}
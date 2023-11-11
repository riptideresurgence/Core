import noblox from "noblox.js";
declare function getUserInfo(user: number | string): Promise<noblox.PlayerInfo>;
declare function getNameRepresentationFromInfo(userInfo: noblox.PlayerInfo): string;
declare function getUserIdFromUsername(username: string): Promise<number>;
export { getUserInfo, getNameRepresentationFromInfo, getUserIdFromUsername };

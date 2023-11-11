import {Client} from "bloxy";

const client = new Client();

async function getUserInfo(user: number | string) {
    return await client.getUser(user);
}

function getNameRepresentationFromInfo(userInfo: any) {
    return userInfo.name == userInfo.displayName ? userInfo.name : `${userInfo.displayName} (@${userInfo.name})`;
}

export {getUserInfo, getNameRepresentationFromInfo}
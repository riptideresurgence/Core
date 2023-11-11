import * as database from "./database"

async function isPlayerBanned(UserId: number): Promise<boolean> {
    let banned = false;
    const document = await database.findBannedDocumentFromUserId(UserId);
    if (document && document.bannedUntil) {
        const currentDate = new Date();
        if (document.bannedUntil == -1 || (currentDate.getTime() / 1000) < document.bannedUntil) {
            banned = true;
        }
    }
    return banned;
}

async function banPlayer(banMethod: "Discord" | "API", userId: number, durationInMinutes: number, moderator: string, banReason: string) {
    let document = await database.findBannedDocumentFromUserId(userId);
    if (!document) {
        document = await database.createBannedDocument({
            userId: userId
        });
    }
    const currentDate = new Date();
    const currentTime = Math.floor(currentDate.getTime() / 1000);
    const bannedUntil = durationInMinutes != -1 ? currentTime + (durationInMinutes * 60) : -1;
    document.updateOne({
        bannedTime: currentTime,
        bannedUntil: bannedUntil,
        reason: banReason,
        moderator: `${moderator} (${banMethod})`
    }).exec();
}

async function unbanPlayer(userId: number) {
    await database.deleteBannedDocument({
        userId: userId
    });
}

async function getBanList() {
    return await database.getAllBannedDocuments();
}

export { banPlayer, unbanPlayer, getBanList }
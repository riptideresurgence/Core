declare function getUserInfo(user: number | string): Promise<import("bloxy/dist/structures").User>;
declare function getNameRepresentationFromInfo(userInfo: any): any;
export { getUserInfo, getNameRepresentationFromInfo };

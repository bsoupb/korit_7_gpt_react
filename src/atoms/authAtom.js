import { atom } from "recoil";

// atom: 전역상태
// default = value

export const accessTokenAtomState = atom({
    key: "accessTokenAtomState",
    default: !!localStorage.getItem("AccessToken"),
});
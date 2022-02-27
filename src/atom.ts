import { atom } from "recoil";
import { Hotel } from "./api";

export const clickedMarkAtom = atom({
    key: "clickedMark",
    default : ""
});
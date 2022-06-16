import { PlayerData } from "./player";
import { TagData } from "./tag";

export interface TeamData {
    id: number; 
    name: string;
    description: string;
    webSite: string;
    typeTeam: boolean;
    tags: TagData[];
    players: PlayerData[];
}

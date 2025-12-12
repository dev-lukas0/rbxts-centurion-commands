import { Ban } from "./cmds/ban";
import { Kick } from "./cmds/kick";

export namespace CenturionCommands {
    export const KickCommand = Kick;
    export const BanCommand = Ban;
}
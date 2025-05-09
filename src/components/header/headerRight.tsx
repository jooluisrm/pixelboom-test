import { AvatarIcon } from "./avatar";
import { IconItem } from "./iconItem";

export const HeaderRight = () => {
    return (
        <div className="flex gap-3">
            <IconItem type="help"/>
            <IconItem  type="bell"/>
            <AvatarIcon />
        </div>
    );
}
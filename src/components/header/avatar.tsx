import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const AvatarIcon = () => {
    return (
        <Avatar>
            <AvatarImage src="iconeAvatar.png" className="w-10 h-10"/>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
}
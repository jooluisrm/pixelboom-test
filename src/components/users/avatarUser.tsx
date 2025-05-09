import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarUser() {
  return (
    <Avatar>
      <AvatarImage src="" alt="@shadcn" />
      <AvatarFallback>JG</AvatarFallback>
    </Avatar>
  )
}

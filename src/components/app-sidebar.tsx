import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { CollapsibleItem } from "./dashbord/collapsible"
import { ButtonLi } from "./dashbord/buttonLi"
import { Headset } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex justify-center p-6 h-[72px] border-b">
        <Button className="max-w-24 h-8 bg-black font-bold">
            Logo
        </Button>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
            <CollapsibleItem />
        </SidebarGroup>

        <SidebarGroup className="text-[#3F3F46] flex flex-col gap-5">
            <h2>Menu</h2>
            <div>
                <ButtonLi text="Dashbord" active={false}/>
                <ButtonLi text="Usuários" active={true}/>
                <ButtonLi text="Documentos" active={false}/> 
            </div>
            <h2>Configurações</h2>
            <div>
                <ButtonLi text="Geral" active={false}/>
            </div>

        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mb-4">
        <div className="flex items-center justify-between gap-[8px] w-full h-[40px] bg-white rounded-full p-4 cursor-pointer">
            Precisa de ajuda? <Headset size={16}/>
        </div>
      </SidebarFooter>
      
    </Sidebar>
  )
}

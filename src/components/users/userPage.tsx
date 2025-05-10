"use client"

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DataUsersItem } from "./dataUsersItem";
import { SheetAddUser } from "./sheetAddUser";
import { IconItem } from "../header/iconItem";
import { UserItem } from "./userItem";
import { PaginationUser } from "./paginationUser";
import { Label } from "../ui/label";
import { SelectItens } from "./select";
import { useEffect, useState } from "react";
import { Usuario, usuarios } from "@/data/usersList";
import { SkeletonItemUser } from "./skeleton/skeletonItemUser";

export const UserPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [usersList, setUsersList] = useState<Usuario[]>(usuarios);

    useEffect(() => {
    
    const timer = setTimeout(() => {
      setUsersList(usuarios); 
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center pb-5">
                <h1 className="text-3xl font-serif">Usuários</h1>
                <SheetAddUser />
            </div>

            <div className="flex justify-between">
                <DataUsersItem type="Usuários" value="294" />
                <DataUsersItem type="Tempo de sessão" value="31m 20s" />
                <DataUsersItem type="Ativos" value="203" />
                <DataUsersItem type="Inativos" value="127" />
            </div>

            <div className="flex items-center gap-3">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                    <Input
                        placeholder="Buscar..."
                        className="pl-9 pr-3 py-2 rounded-md h-10 w-full"
                    />
                </div>
                <IconItem type="filter" />
            </div>

            <div className="flex flex-col gap-2">
                {isLoading
                    ? Array(5)
                        .fill(null)
                        .map((_, index) => <SkeletonItemUser key={index} />)
                    : usersList.map((item, index) => (
                        <UserItem item={item} key={index} />
                    ))}
            </div>

            <div className="flex justify-between items-center w-full ">
                <div className="text-[14px] font-sans text-muted-foreground">
                    5 de 294 itens
                </div>
                <div>
                    <PaginationUser />
                </div>
                <div className="flex items-center gap-2">
                    <Label className="text-muted-foreground font-sans text-[14px] font-normal">Itens por página</Label>
                    <SelectItens />
                </div>
            </div>
        </div>
    );
}
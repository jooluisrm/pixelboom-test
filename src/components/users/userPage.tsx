"use client"

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { DataUsersItem } from "./dataUsersItem";
import { SheetAddUser } from "./sheetAddUser";
import { IconItem } from "../header/iconItem";
import { UserItem } from "./userItem";
import { useEffect, useState } from "react";
import { usuarios } from "@/data/usersList";
import { SkeletonItemUser } from "./skeleton/skeletonItemUser";
import { SkeletonFiltre } from "./skeleton/skeletonFiltre";
import { SkeletonCardInfo } from "./skeleton/skeletonCardInfo";
import { SkeletonHeaderComButton } from "./skeleton/skeletonHeaderComButton";
import { SkeletonPaginationSection } from "./skeleton/skeletonPaginationSelect";
import { PaginationFooter } from "./paginationFooter";
import { Usuario } from "@/types/usuariosType";

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
            {isLoading ? <SkeletonHeaderComButton /> : (
                <div className="flex justify-between items-center pb-5">
                    <h1 className="text-3xl font-serif">Usuários</h1>
                    <SheetAddUser />
                </div>
            )}

            <div className="flex justify-between">
                {isLoading ? (
                    <>
                        <SkeletonCardInfo />
                        <SkeletonCardInfo />
                        <SkeletonCardInfo />
                        <SkeletonCardInfo />
                    </>
                ) : (
                    <>
                        <DataUsersItem type="Usuários" value="294" />
                        <DataUsersItem type="Tempo de sessão" value="31m 20s" />
                        <DataUsersItem type="Ativos" value="203" />
                        <DataUsersItem type="Inativos" value="127" />
                    </>
                )}
            </div>

            <div className="flex items-center gap-3">
                {!isLoading ? (
                    <>
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                            <Input
                                placeholder="Buscar..."
                                className="pl-9 pr-3 py-2 rounded-md h-10 w-full"
                            />
                        </div>
                        <IconItem type="filter" />
                    </>
                ) :
                    <SkeletonFiltre />
                }
            </div>

            <div className="flex flex-col gap-2">
                {isLoading
                    ? <>
                        <SkeletonItemUser />
                        <SkeletonItemUser />
                        <SkeletonItemUser />
                        <SkeletonItemUser />
                        <SkeletonItemUser />
                    </>
                    : usersList.map((item, index) => (
                        <UserItem item={item} key={index} />
                    ))}
            </div>

            <div className="flex justify-between items-center w-full ">
                {
                    isLoading ? <SkeletonPaginationSection /> : <>
                        <PaginationFooter />
                    </>
                }
            </div>
        </div>
    );
}
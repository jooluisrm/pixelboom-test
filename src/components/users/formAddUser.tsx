import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { StatusInput } from "./statusInput";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Switch } from "../ui/switch";
import { SheetClose, SheetFooter } from "../ui/sheet";
import { ToastUser } from "./toastUser";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "../ui/toast"

export const formSchema = z.object({
    nome: z.string().min(3, 'Precisa ter no mínimo 3 caracteres'),
    email: z.string().email('E-mail inválido!'),
    tel: z
        .string()
        .min(10, 'Telefone inválido')
        .max(15, 'Telefone inválido'),
    zap: z.boolean().optional(), 
    cpf: z
        .string()
        .min(11, 'CPF inválido')
        .max(14, 'CPF inválido'), 
    rg: z.string().min(5, 'RG inválido'),
    email2: z.string().email('E-mail inválido!'),
    ativo: z.boolean().optional(),
});

export const FormAddUser = () => {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {email: "", nome: "", ativo: false, cpf: "", email2: "", rg: "", tel: "", zap: false},
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        toast({
            title: "Usuário adicionado com sucesso!",
            action: (
                <ToastAction altText="Fechar" className="text-[14px] font-sans rounded-full w-[72px] h-10 py-2 px-4">Fechar</ToastAction>
            ),
        })
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div>
                        <FormField
                            control={form.control}
                            name="nome"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome completo</FormLabel>
                                    <FormControl>
                                        <Input id="nome" placeholder="Digite o nome" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormControl>
                                        <Input id="email" placeholder="Digite o e-mail" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FormField
                            control={form.control}
                            name="tel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefone</FormLabel>
                                    <FormControl>
                                        <Input id="tel" placeholder="Digite o telefone" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex gap-2 items-center">
                            <FormField
                                control={form.control}
                                name="zap"
                                render={({ field }) => (
                                    <>
                                        <Checkbox id="zap" checked={field.value} onCheckedChange={field.onChange} />
                                        <Label htmlFor="zap">WhatsApp</Label>
                                    </>
                                )}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-[16px]">
                        <FormField
                            control={form.control}
                            name="cpf"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="cpf">CPF</FormLabel>
                                    <FormControl>
                                        <Input id="cpf" placeholder="Informe o CPF" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="rg"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="rg">RG</FormLabel>
                                    <FormControl>
                                        <Input id="rg" placeholder="Informe o RG" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email2">E-mail</FormLabel>
                                <FormControl >
                                    <Input id="email2" placeholder="Informe o e-mail" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="ativo"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Card className="w-[480px] h-[66px] bg-primary-foreground rounded-md p-4 gap-4 flex items-center justify-between">
                                        <div>
                                            <h1 className="text-[14px] font-sans">Status</h1>
                                            <p className="text-[12px] text-muted-foreground">
                                                Defina se o usuário estará ativo ao ser adicionado.
                                            </p>
                                        </div>
                                        <span className="flex items-center gap-2">
                                            <Switch
                                                id="ativo"
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                            <Label htmlFor="ativo">Ativo</Label>
                                        </span>
                                    </Card>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <SheetFooter >
                        <SheetClose>
                            <Button variant={"ghost"} className="w-[89px] h-10 rounded-full border text-[14px] font-normal">Cancelar</Button>
                        </SheetClose>
                        <Button
                            type="submit"
                            className="w-[89px] h-10 rounded-full border bg-[#102822] text-[14px] font-normal"
                        >
                            Adicionar
                        </Button>
                    </SheetFooter>
                </form>
            </Form>
        </>
    );
}
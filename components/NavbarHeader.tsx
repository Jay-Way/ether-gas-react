import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarContent, Navbar} from "@nextui-org/react";
import {ThemeSwitch} from "@/components/theme-switch";
import React from "react";
import {useTranslation} from "react-i18next";

export default function NavbarHeader() {
    const {i18n, t} = useTranslation();
    return (
        <Navbar position="static">
            <NavbarContent justify="end">
                <Dropdown>
                    <DropdownTrigger>
                        <Button isIconOnly variant="bordered" size="sm">{i18n.language === 'de' ? 'DE' : 'EN'}</Button>
                    </DropdownTrigger>
                    <DropdownMenu onAction={(i18nLanguage) => i18n.changeLanguage(i18nLanguage.toString())}>
                        <DropdownItem key="de" startContent={"🇩🇪"}>Deutsch</DropdownItem>
                        <DropdownItem key="en" startContent={"🇬🇧"}>English</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <ThemeSwitch className="" />
            </NavbarContent>
        </Navbar>
    )
}

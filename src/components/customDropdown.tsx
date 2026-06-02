import React from "react";
import type { customDropdownPropType, dropDownGroupType, dropDownItemType } from "@/types/customDropDown.type";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import type { LucideIcon } from "lucide-react";

function RenderIcon({ Icon }: { Icon: LucideIcon | string }){
    return (
        <>
        {
            typeof Icon === 'string'? <img className="dropdownItemIcon" src={Icon} alt=""/>
            :
            <Icon />
        }
        </>
    )
}

function RenderDropDownItems({ items, onClick, itemCls }: { 
    items: dropDownItemType[], onClick?: customDropdownPropType['itemOnClick'], 
    itemCls ?: string })
    {

    return (
        items.map(
            (item, index) => (
                <React.Fragment key={item.itemLabel}>
                <DropdownMenuItem onClick={(event)=>{
                    event.preventDefault();
                    item.onClick ? item.onClick():onClick?.(item.itemLabel);
                    }}
                     
                    className= {`flex gap-3.5`}>
                    { item.leftIcon && <RenderIcon Icon={item.leftIcon}/> }
                    <span className={itemCls}>{ item.itemLabel }</span>
                    { item.rightIcon && <RenderIcon Icon={item.rightIcon} /> }
                </DropdownMenuItem>
                { index < items.length-1 && <DropdownMenuSeparator /> }
                </React.Fragment>
            )
        )
    )
}

function RenderDropDownGroups( {groups, cls, onClick}: {
    groups: dropDownGroupType[], cls?: string, 
    onClick: customDropdownPropType['itemOnClick']} )
    {
    return (
        groups.map(
            (group, index) => (
                < React.Fragment key={index} >
                <DropdownMenuGroup className={cls}>
                    <DropdownMenuLabel className="dropDownGroupLabel"> {group.label} </DropdownMenuLabel>
                    <RenderDropDownItems items={group.items} onClick={onClick}/>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                </React.Fragment>
            )
        )
    )
}

export function CustomDropDown({Open, setOpen, itemOnClick, groups, items, cls, dropdownGroupCls, itemCls }:  customDropdownPropType){
    return (
        <DropdownMenu open={Open} onOpenChange={setOpen} modal={true}>

            <DropdownMenuTrigger ><div></div></DropdownMenuTrigger>
            <DropdownMenuContent className={cls} side="bottom" align="end" sideOffset={25} alignOffset={-10}>

            {groups && <RenderDropDownGroups groups={groups} cls={dropdownGroupCls} onClick={itemOnClick}/>}

            <RenderDropDownItems items={items} onClick={itemOnClick} itemCls={itemCls}/>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { assets } from "@/assets/images";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { XIcon } from "lucide-react";

import '../styles/roleSelect.css';
import { Navigate, useLocation, useNavigate } from "react-router";
import type { inputFormData } from "@/types/inputForm.type";
import { useState } from "react";

export function RoleSelect(){

    const userInfo = JSON.parse(localStorage.getItem('user') ?? '{}') as inputFormData;

    if (!userInfo){
        return <Navigate to={'/'}/>
    }

    const navigate = useNavigate();

    const [value, toggleValue] = useState<string>('coach');

    const handleRoleSelect = () => {
        const roleSelectedUser = Object.assign(userInfo, {role: value});
        localStorage.setItem('user', JSON.stringify(roleSelectedUser));
        navigate('/dashboard');
    }

    const options = [
        {
            id: 1,
            value: 'coach',
            logo: assets.coachIcon,
            text: 'COACH'
        },
        {
            id: 2,
            value: 'parent',
            logo: assets.parentIcon,
            text: 'PARENT'
        }
    ]

    return (
        <AlertDialog open={true}>

            <AlertDialogContent className="roleSelectContainer">

                <div className="headerDescContainer">

                    <div className="roleSelectHeader">
                        <AlertDialogTitle> Select a role to continue </AlertDialogTitle>
                        <AlertDialogCancel variant={'ghost'} className="border:none" onClick={() => navigate('/')}>
                            <XIcon />
                        </AlertDialogCancel>
                    </div>


                    <AlertDialogDescription className="roleSelectDesc"> Are you here as a player to journal, or as a coach or parent to view insights and provide feedback? </AlertDialogDescription>

                </div>

                <ToggleGroup type="single" value={value} onValueChange={toggleValue} className="roleSelectItemGrp">
                {
                    options.map(
                        option => {
                            return (
                                <ToggleGroupItem value={option.value} key={option.id} className="roleToggleItem bounceEffect">
                                    <img className="roleLogo" src={assets.coachIcon} alt=""/>
                                    <span className="toggleTitle"> {option.text} </span>
                                </ToggleGroupItem>
                            )
                        }
                    )
                }   
                </ToggleGroup>

                <div className="roleSubmitDiv">
                    <button className="selectRoleBtn bounceEffect squashClick" onClick={
                        handleRoleSelect
                    }> Continue </button>
                </div>

            </AlertDialogContent>
        </AlertDialog>
    )
}
import { assets } from "../assets/images"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import "../styles/dashboardHeader.css";
import { Link, Navigate, Outlet, useMatch, useNavigate } from "react-router";
import type { inputFormData } from "@/types/inputForm.type";
import type { dropDownGroupType, dropDownItemType } from "@/types/customDropDown.type";
import { useMemo, useState } from "react";
import { CustomDropDown } from "./customDropdown";

import '../styles/profileDropdown.css';
import { CustomAlertDialouge } from "./customAlertDialouge";
import { UpdateProfileCard } from "./updateProfileCard"; 

export function DashboardHeader(){
    // First try to load entry if not found then use state object but always save the updated one

    const navigate = useNavigate();
 
    // const state: inputFormData | null = useLocation().state as inputFormData;
    const userInfo = JSON.parse(localStorage.getItem('user') ?? 'null') as inputFormData;


    // If we are at subscription page don't show the dropdown
    const isSubscriptionPage = useMatch('/subscription');
    // console.log(isSubscriptionPage);

    if((!userInfo) && (!isSubscriptionPage)){
        return <Navigate to={'/'}/>
    }

    const [dropdownOpen, toggleDropdownOpen] = useState(false);
    const [alertOpen, toggleAlertOpen] = useState(false);
    const [logoutAlertOpen, toggleLogoutAlertOpen] = useState(false);

    const openPlayerInvite = () => toggleAlertOpen(true);

    const [updateProfileCardState, toggleUpdateProfileCardState] = useState<boolean>(false);

    const removeSubscription = () => {
        userInfo.subscribed = false;
        localStorage.setItem('user', JSON.stringify(userInfo));
    }


    const handleLogout = () => {localStorage.clear(), navigate('/')};

    const dropDownOptions = useMemo(() => {
        const groups: dropDownGroupType[] = [
            {
                label: `Hello, ${userInfo?.name ?? 'User'}`,
                items: [
                    {
                        leftIcon: assets.editProfileIcon,
                        itemLabel: 'Edit Profile',
                        onClick: () => toggleUpdateProfileCardState(true) 
                    }
                ]
            }
        ];

        const items: dropDownItemType[] = [
            { leftIcon: assets.changePasswordIcon, itemLabel: 'Change Password' },
            { 
                leftIcon: userInfo?.subscribed ? assets.unSubscribeIcon : assets.subsCribeIcon, 
                itemLabel: userInfo?.subscribed ? 'Unsubscribe' : 'Subscribe', 
                onClick: () => {
                    if (userInfo?.subscribed) {
                        removeSubscription();
                    } else {
                        navigate('/subscription');
                    }
                }
            },
            { leftIcon: assets.userIcon, itemLabel: 'Dummy Account' },
            { leftIcon: assets.logoutIcon, itemLabel: 'Logout', onClick: ()=> {
                toggleLogoutAlertOpen(true);
            } },
            { 
                itemLabel: 'Invite Your Players - Free Remote App Journal!', 
                onClick: openPlayerInvite
            }
        ];

        return { groups, items };
    }, [userInfo]);

    console.log(dropDownOptions);
    return (
        <>

        <div className="dashboardHeader">
            <Link to={'/'}>
            <img className="dashboardLogo" src={assets.headerLogo} alt=""/>
            </Link>

            { 
            (!isSubscriptionPage) &&
            <>
            <Badge className="dashboardBadge" onClick={()=> toggleDropdownOpen(prev => !prev)}>
                <Avatar className="badgeAvatar">
                    <AvatarImage src=""/>
                    <AvatarFallback className="!bg-[#91CC00] text-black"> {userInfo?.name.slice(0, 1) ?? 'E'} </AvatarFallback>
                </Avatar>

                {userInfo?.name ?? "Emma Marcus"}

                <CustomDropDown cls="profileDropdown" groups={dropDownOptions.groups} 
                items={dropDownOptions.items} Open={dropdownOpen} setOpen={toggleDropdownOpen}
                dropdownGroupCls="dropdownGroup" itemCls="profileOptionsStyle"
                itemOnClick={(label: string) => console.log(`${label} clicked`)}
                />                
            </Badge>
            
            <CustomAlertDialouge
            Open={alertOpen} setOpen={toggleAlertOpen}
            contentCls="alertContent"
            headerCls="deleteAlertHeader"
            titleCls="deleteAlertTitle"
            mediaCls="alertMedia"
            mediaImgCls="alertMediaImg"
            descCls="alertDesc"
            contentBgColor="#000"
            cancelIconColor="white"
            media={assets.headerLogo} desc={
                <>
                <span>
                Connect with your players through{' '}
                <Link to={'/'} className="text-[#91CC00]">Tennispreneur’s</Link>{' '}
                free Player App Journal. Offer personalized guidance, track their progress remotely, and discover new ways to grow your coaching income while supporting their tennis development.
                </span>
                </>
                }
            />

            <CustomAlertDialouge title="Are you sure?" desc="Do you want to logout?"
            Open={logoutAlertOpen}
            setOpen={toggleLogoutAlertOpen}
            deleteAction={handleLogout}
            contentCls="alertContent"
            titleCls="deleteAlertTitle"
            headerCls="deleteAlertHeader"
            deleteActionCls="deleteActions bounceEffect"
            deleteBtnText="yes, logout"
            />
            </>
            }
        </div>

        { !isSubscriptionPage && <UpdateProfileCard Open={updateProfileCardState} toggleOpen={toggleUpdateProfileCardState} clsName="updateProfileDialouge" formClsName="updateProfileForm" /> }

        <Outlet />
        </>
    )
}
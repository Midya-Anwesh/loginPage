import { LoginForm } from "../components/loginForm";
import {RenderAdvisoryList} from "../components/advisoryList";
import { PageHeader } from "../components/loginPageHeader";
import { PlayStoreBanner } from "../components/playStoreBanner";
import { PricingInfo } from "../components/priceingInfo";
import { PageFooter } from "../components/loginPageFooter";

import '../styles/app.css'
import '../styles/header.css'
import '../styles/banner.css'
import '../styles/pricingHeader.css'
import '../styles/subscriptionsType.css'
import '../styles/footer.css'
import { useEffect, useMemo } from "react";

import type { advisoryListType } from "@/types/advisoryList.type";
import { useNavigate } from "react-router";

export function LoginPage(){

    const navigate = useNavigate();

    const loggedInUser = localStorage.getItem('user');
    
    useEffect(
        () => {
            if (loggedInUser){
                navigate('/dashboard');
            }
        }, []
    )

    const loginAdvisory = useMemo(() => {
        return [
            {
                id: 1,
                content:  "The web app gives coaches and mentors remote access to player journals." 
            },
            {
                id: 2,
                content: "They can track performance insights and monitor progress over time."
            },
            {
                id: 3,
                content: "Provides tools to give feedback and guide each player's development."
            },
            {
                id: 4,
                content: "Enables coaches to create an additional revenue stream through premium online support."
            },
            {
                id: 5,
                content: "Allows coaches to create and share performance reports. Helps coaches identify areas for improvement and tailor training programs."
            }
        ] as advisoryListType['items']
    }, [])

    return (
        <div className="loginPage">

            <PageHeader />

            <div className="loginDiv">
                <RenderAdvisoryList advisoryList={{
                    items: loginAdvisory
                }} listCls="advisoryList"
                listContainerCls="loginAdvisory"
                titleCls="advisoryTitle"
                itemCls="advisoryListitem"
                title="Coach & Mentor Dashboard Access" />
                <LoginForm />
            </div>

            <div className="separator" />

            <PlayStoreBanner />

            <PricingInfo />

            <div className="separator" />

            <PageFooter />

        </div>
    )
}
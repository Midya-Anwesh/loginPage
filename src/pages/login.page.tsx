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
import { useAppSelector } from "@/app/hooks";

export function LoginPage(){
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

    // If user already logged in, redirect to dashboard
    const user = useAppSelector(state => state.user);
    const navigate = useNavigate();
    console.log(`user from store in login page: ${JSON.stringify(user)}`);


    useEffect(() => {
        if (user && (user.name.length > 0)){
            navigate('/dashboard');
        }
    }, [user]);

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
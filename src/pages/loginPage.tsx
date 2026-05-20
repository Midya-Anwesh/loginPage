import { LoginForm } from "../components/loginForm";
import { LoginAdvisory } from "../components/loginAdvisory";
import { PageHeader } from "../components/pageHeader";
import { PlayStoreBanner } from "../components/playStoreBanner";
import { PricingInfo } from "../components/priceingInfo";
import { PageFooter } from "../components/pageFooter";
import { Separator } from "../components/separator";

export function LoginPage(){
    return (
        <div className="loginPage">

            <PageHeader />

            <div className="loginDiv">
                <LoginAdvisory />
                <LoginForm />
            </div>

            <Separator />

            <PlayStoreBanner />

            <PricingInfo />

            <Separator />

            <PageFooter />

        </div>
    )
}
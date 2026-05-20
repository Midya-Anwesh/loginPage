import type { subscriptionOption } from "../types/subsOptions";
import { assets } from "../assets/images";

export function RenderPricings(options: subscriptionOption){
    return (
        <div className="pricingOption">

            <div className="typeDesc">
                <div id="type">
                    {options.type}
                </div>

                <div id="desc">
                    {options.desc}
                </div>
            </div>

            <div className="subPricing">
                <div id="monthlyBilling">
                    <img className="dollarSign" src={assets.dollarSign}/>
                    <div id="price"> ${options.monthlyBill}/month </div>
                </div>

                <div className="separator"> or </div>

                <div id="yearlyBilling">
                    <img className="dollarSign" src={assets.dollarSign}/>
                    <div id="price"> ${options.yearlyBill}/month </div>
                    <div id="savings"> Save ${options.yearlySaving}/year </div>
                </div>
            </div>

        </div>
    )
}
import type { subscriptionOption } from "../types/subsOptions.type";
import { assets } from "../assets/images";
import { ToggleGroupItem } from "./ui/toggle-group";

export function RenderPricings({options, asToggleGroupItem}: {options: subscriptionOption, asToggleGroupItem?: boolean}){
    asToggleGroupItem ??= false;
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
                    <img className="dollarSign" src={assets.dollarSign} alt=""/>
                    <div id="price"> ${options.monthlyBill}/month </div>
                    {
                        asToggleGroupItem &&
                        <ToggleGroupItem className="selectToggle" value={`${options.type} monthly`}>
                            <img className="selectTick" src={assets.subsCriptionTick} alt=""/>
                        </ToggleGroupItem>
                    }
                    
                </div>
 
                <div className="separator"> or </div>

                <div id="yearlyBilling">
                    <img className="dollarSign" src={assets.dollarSign} alt=""/>
                    <div id="price"> ${options.yearlyBill}/month </div>
                    {
                        asToggleGroupItem &&
                        <ToggleGroupItem className="selectToggle" value={`${options.type} yearly`}>
                            <img className="selectTick" src={assets.subsCriptionTick} alt=""/>
                        </ToggleGroupItem>
                    }
                    <div id="savings"> Save ${options.yearlySaving}/year </div>
                </div>
            </div>

        </div>
    )
}
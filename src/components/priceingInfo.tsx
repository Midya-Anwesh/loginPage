import { PricingInfoHeader } from "./pricingInfoHeader"
import { StylePricing } from "../components/stylePricing"

export function PricingInfo(){
    return (
        <div className="pricingContent">
            <PricingInfoHeader />

            <StylePricing />
        </div>
    )
}
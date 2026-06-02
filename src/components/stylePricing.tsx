import type { subsOptionsListType } from "../types/subsOptionsList.type";
import { RenderPricings } from "./renderPricings";

import { substypeList } from "@/dummyData/subscriptionOptions";

export function StylePricing(){
    return (
        <div className="subsTypeList">
            {
                substypeList.map(
                    (subType: subsOptionsListType) => {
                        return <RenderPricings key={subType.id} options={subType}/>
                    }
                )
            }
        </div>
    )
}
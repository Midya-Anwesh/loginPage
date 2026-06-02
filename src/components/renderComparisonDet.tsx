import { dashboardData } from "../dummyData/matchDetInfo";
import { assets } from "@/assets/images";
import React from "react";

import '../styles/winRateComparison.css';

export function CompLogo({ winRate, lossRate }: { winRate?: string, lossRate?: string }){
    return (
        <div className="compLogo spin-3d logo-container">
            <span> V/s </span>
            <div className="compRate">
                <span className="winRate"> <img src={assets.compWinArrow}/> { winRate ?? 50 } </span>
                <div className="separator"></div>
                <span className="lossRate"> {lossRate ?? 50} <img src={assets.compLossArrow}/>  </span>
            </div>
        </div>
    )
}

export function RenderCompDet({ compVal }: { compVal: typeof dashboardData['ratios'][0]['comparison'] }){
    return (
        <>
        {
            compVal.slice(0, 2).map(
                (comparisonData, index) => (
                    <React.Fragment key={index}>
                    <div className="matchComparison" key={comparisonData.id}>
                        <div className="comparisonHeader">
                            { comparisonData.dateRange }
                        </div>

                        <div className="winRate">
                            {comparisonData.winRate} %
                        </div>

                        <span> Win </span>
                    </div>

                    {index === 0 && <CompLogo winRate={compVal[2].winChange} lossRate={compVal[2].lossChange}/>}
                    </React.Fragment>
                )
            )
        }
        </>
    )
}
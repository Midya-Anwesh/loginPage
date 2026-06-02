import React from "react";

import { CustomToggleGroup } from "./customToggleGroup";
import { dashboardData } from "../dummyData/matchDetInfo";
import { Badge } from "./ui/badge";

import '../styles/analysisDashBoardFooter.css';

export function AnalysisDashBoardFooter({ data }: { data: typeof dashboardData['performanceMetrics'] }){
    return (
        <div className="analysisFooter">
            <CustomToggleGroup filters={data.activeTab}/>

            <div className="categoryGroup">
                {
                    data.categories.map(
                        category => (
                            <div className="category" key={category.title}>
                            <span className="title"> <Badge className={`w-3 h-4.5 rounded-full`}
                            style={{backgroundColor: category.color}}/>
                            {category.title}
                            </span>
                            
                            <div className="hisory">
                                {
                                    category.history.map(
                                        (history, index) => (
                                            <React.Fragment key={index}>
                                                <div className="historyDet">
                                                    <span> {history.dateRange} </span>
                                                    <span> Average: {history.average} </span>
                                                </div>
                                                { index < category.history.length-1 && <div className="separator"/> }
                                            </React.Fragment>
                                        )
                                    )
                                }
                            </div>

                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}
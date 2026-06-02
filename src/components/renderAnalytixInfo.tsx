import { type dashboardData } from "../dummyData/matchDetInfo";
import { RefreshCwIcon } from "lucide-react";
import { assets } from "@/assets/images";
import { RenderGoals } from "./renderGoals";
import { RenderCompDet } from "./renderComparisonDet";
import { CustomToggleGroup } from "./customToggleGroup";
import { AnalysisDashBoardFooter } from "./analysisDashBoardFooter";
import { CustomButtonGroup } from "./customBtnGroup";
import { useMemo } from "react";
import { RenderMatchResult } from "./renderMatchResults";
import { RangePicker } from "./rangePicker";

export function RenderAnalyticsInfo({ analytixData }: { analytixData: typeof dashboardData }){

    const buttons = useMemo(
        () => {
            return [
                {
                    id: 1,
                    btnLabel: 'Journal',
                    badgeContent: 7,
                    badgeFillColor: '#91CC00',
                    badgeTextColor: 'black',
                    navigateTo: '/journal'
                },
                {
                    id: 2,
                    btnLabel: 'Generate Report'
                },
                {
                    id: 3,
                    btnIcon: RefreshCwIcon
                }
            ]
        }, []
    )

    return (
        <div className="analysisDiv">
            <div className="analysisHeader">
                <span className="dateRange bounceEffect">

                    <RangePicker />

                    {'/'}

                    <RangePicker />

                    <img className={`datePickerArrow`} src={assets.downArrow} alt=""/>
                </span>

                <CustomButtonGroup grpClassName="btnGroup" btnClass="bounceEffect" buttonOptions={buttons} />
            </div>

            <div className="goals">
                <RenderGoals cls={"goalInfo bounceEffect"} goals={analytixData.goals}/>
            </div>



            <div className="ratioBox">
                {
                    analytixData.ratios.map(
                        ratio => {
                            return (
                                <div className="ratioBoxContent bounceEffect" key={ratio.title}>
                                    <div className="ratioBoxHeader">
                                        <span className={`ratioTitle`}
                                        style={{backgroundColor: ratio.bgColor}}
                                        > {ratio.title} </span>
                                        <span className="toggleGroup">
                                            <CustomToggleGroup filters={ratio.activeFilter}/>
                                        </span>
                                    </div>

                                    <RenderMatchResult ratio={ratio}/>
                                    
                                    <div className="comparisonContainer bounceEffect">
                                        {
                                            <RenderCompDet compVal={ratio.comparison}/>
                                        }
                                    </div>

                                </div>
                            )
                        }
                    )
                }
            </div>

            <AnalysisDashBoardFooter data={analytixData.performanceMetrics}/>

        </div>
    )
}
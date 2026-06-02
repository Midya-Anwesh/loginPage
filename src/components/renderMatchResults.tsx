import { dashboardData } from "../dummyData/matchDetInfo";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { CustomThumbBadge } from "./customThumbIconBadge";
import { Progress } from "./ui/progress";
import { colors } from "@/constants/colors";

export function RenderMatchResult({ ratio }: {ratio: typeof dashboardData['ratios'][0]}){
    return (
        <div className="matchResults">
            {
                ratio.periods.map(
                    period => (
                        <div className="progressBarContainer" key={period.dateRange}>
                            <div className="progressBarHeader">
                                <span> {period.dateRange} </span>
                                <span> Total: {period.total} </span>
                            </div>

                            <div className="progressBarContent">
                                <Progress className="ratioProgressBar" value={(period.wins / period.total)*100}/>
                                <div className="winLossBadge">
                                    <CustomThumbBadge badgeClassName="winBadge bounceEffect" text={period.wins}
                                    LeftIcon={ThumbsUpIcon} iconStroke={colors.winColor} />
                                    <CustomThumbBadge badgeClassName="lossBadge bounceEffect" text={period.wins}
                                    RightIcon={ThumbsDownIcon} iconStroke={colors.lossColor} />
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}
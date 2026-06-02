import { dashboardData } from "../dummyData/matchDetInfo";
import { assets } from "@/assets/images";
import { Progress } from "./ui/progress";

export function RenderGoals({ goals, cls }: { goals: typeof dashboardData['goals'], cls: string }){
    return (
        goals.map(
            goal => {
                return (
                    <div className={cls} key={goal.title}>
                        <div className="goalsHeader">
                            <span className="goalType">
                                <img className="goalLogo" src={assets.targetArrow} />
                                <span> {goal.title} </span>
                            </span>

                            <span className="goalDateRange">
                                {goal.dateRange}
                            </span>
                        </div>

                        <div className="goalsBody">
                            <div className="bodyContent">
                            <span className="achivement"> Achived: {goal.achieved} </span>
                            <span className="target"> Goal: {goal.target} </span>
                            </div>

                            <Progress className="goalProgressBar" value={  (goal.achieved / goal.target) * 100}/>
                        </div>

                    </div>
                )
            }
        )
    )
}
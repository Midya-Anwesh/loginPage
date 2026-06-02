import { Link, useParams, useResolvedPath } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { RenderAnalyticsInfo } from "../components/renderAnalytixInfo";
import { dashboardData } from "../dummyData/matchDetInfo";

import { playerList } from "../dummyData/playerList";

import '../styles/playerAnalysis.css';

export function PlayerAnalysis(){
    const parent = useResolvedPath('..').pathname.slice(1); // Removes the '/', ex: /dashboard -> dashboard
    const params = useParams() as {id: string};
    const id = Number(params.id);

    const player = playerList.find(player => player.id === id);

    const user = 'Dummy User';

    const capitalize = (s: string) => {
        if (!s.length){
            return "";
        }
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    const formatPlayerName = (name: string) => {
        let ret = "";
        for(const fragment of name.split(' ')){
            ret += fragment;
        }
        return ret;
    }

    return (
        <div className="analytixContainer">

            <div className="basicDet">
                <span> {player?.name ?? user} </span>
                <Breadcrumb>
                    <BreadcrumbList className="breadCrumb">
                        <Link to={`/${parent}`}>
                        <BreadcrumbItem> { capitalize(parent) } </BreadcrumbItem>
                        </Link>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem> { formatPlayerName(player?.name ?? user) } </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <RenderAnalyticsInfo analytixData={dashboardData} />

        </div>
    )
}
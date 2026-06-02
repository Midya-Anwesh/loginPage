import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "./ui/empty";
import { assets } from "@/assets/images";

import '../styles/emptyList.css';

export function EmptyPlayerList(){
    return (
        <div className="emptyContainer">
        <Empty className="emptyList">
            <EmptyHeader className="emptyListHeader">
                <EmptyMedia className="emptyListLogo">
                    <img src={assets.emptyMedia} />
                </EmptyMedia>
            </EmptyHeader>

            <EmptyContent className="emptyListContent">
                <EmptyTitle className="emptyListTitle"> 
                    No Player Journals Yet
                </EmptyTitle>

                <EmptyDescription className="emptyListDesc">
                    Once your players grant you access, they will appear here.
                </EmptyDescription>
            </EmptyContent>
        </Empty>
        </div>
    )
}
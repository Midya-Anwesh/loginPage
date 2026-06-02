import { playerList } from "../dummyData/playerList";
import { ItemGroup, Item, ItemMedia, ItemContent } from "./ui/item";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import { CustomAlertDialouge } from "./customAlertDialouge";
import { assets } from "@/assets/images";

import '../styles/playerList.css';
import { Link } from "react-router";

export function RenderPlayerList({ renderList, removePlayer }: { renderList: typeof playerList, removePlayer: (id: number) => void }){
    return (
        <div className="playerList">
            <ItemGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
            {
                

                renderList.map(
                    player => (
                        
                        
                        <Item className="playerItem bounceEffect" key={player.id}>
                            <Link to={{ pathname: `./analysis/${player.id}` }} relative="path">
                            <ItemMedia>
                                <Avatar className="h-16 w-16 rounded-full border-1 border-white ring-1 ring-slate-100">
                                    <AvatarImage src={player.profile_pic}/>
                                    <AvatarFallback> <img src={assets.p1} className="rounded-full" alt=""/> </AvatarFallback>
                                </Avatar>
                            </ItemMedia>
                            </Link>

                            
                            <Link to={{ pathname: `./analysis/${player.id}` }} relative="path">
                            <ItemContent>
                                <div className="playerDet">
                                    
                                    <span className="playerName"> {player.name} </span>
                                    

                                    <div className="playerStats">
                                        <Badge className="bg-[#282926] text-white p-4 rounded-full">
                                            UTR: {player.utr}
                                        </Badge>
                                        <Badge className="bg-[#282926] text-white p-4 rounded-full">
                                            Age: {player.age}
                                        </Badge>
                                    </div>
                                </div>
                            </ItemContent>
                            </Link>

                            <CustomAlertDialouge title="Are you sure?" desc="Are you certain about removing this player from the list?"
                            deleteAction={removePlayer}
                            contentCls="alertContent"
                            titleCls="deleteAlertTitle"
                            headerCls="deleteAlertHeader"
                            deleteActionCls="deleteActions bounceEffect"
                            plyerId={player.id}
                            deleteBtnText="Remove Player"
                            >
                                <Button asChild>
                                    <img className="deleteBin bounceEffect" src={assets.deleteBin} alt=""/>
                                </Button>
                            </CustomAlertDialouge>
                        </Item>
                    )
                )
            }
            </ItemGroup>
        </div>
    )
}
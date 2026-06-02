import { playerList } from "../dummyData/playerList";
import { assets } from "@/assets/images";
import { Separator } from "../components/ui/separator";

import { useEffect, useRef, useState } from "react";
import { RenderPlayerList } from "../components/renderPlayerList";
import { EmptyPlayerList } from "../components/emptlyPlayerList";
import type { dropDownItemType } from "@/types/customDropDown.type";
import { CustomDropDown } from "../components/customDropdown";

export function PlayerListPage(){
    const listRef = useRef(playerList);
    const [dropDownOpen, toggleDropdownOpen] = useState(false);

    const dropdownitems: dropDownItemType[] = [{itemLabel: 'Male'}, {itemLabel: 'Female'}]

    const [renderList, setRenderList] = useState(playerList);
    const [gender, setGender] = useState('*');

    const genderFilter = (gender: string) => {
        setRenderList(
            listRef.current.filter(player => player.gender === gender.toLowerCase() || gender === '*')
        );
    }

    const handleGenderSelect = (clickedGender: string) => {
        if (clickedGender === gender){
            setGender('*');
        }
        else{
            setGender(clickedGender);
        }
        toggleDropdownOpen(prev => !prev);
    }

    const removePlayer = (id: number) => {
        listRef.current = listRef.current.filter(player => player.id !== id);
        setRenderList(
            listRef.current.filter(player => player.gender === gender.toLowerCase() || gender === '*')
        )
    };

    useEffect(
        () => genderFilter(gender),
        [gender]
    );

    return (
        <div className="playerListContainer">
            <div className="playerListHeader">
                <p> Players </p>
                <div className="genderSection">
                    {/* { <>{console.log(`Rendering`)}</> } */}
                    <img className="genderSectionLogo" src={assets.person} alt="img"/>
                    <Separator orientation="vertical"/>

                    
                    <button onClick={() => toggleDropdownOpen(prev => !prev)}> {gender === '*'? 'Gender':gender} </button>
                    <CustomDropDown items={dropdownitems} itemOnClick={handleGenderSelect} Open={dropDownOpen} setOpen={toggleDropdownOpen}/>
                </div>
                
            </div>

            {
            renderList.length > 0? (<RenderPlayerList 
                renderList={renderList} 
                removePlayer={removePlayer}
            />) : <EmptyPlayerList />
            }
            
        </div>
    )
}
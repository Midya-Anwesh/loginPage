import { assets } from "@/assets/images";
import { DatePicker } from "@/components/datePicker";
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router";

import React from "react";

import { matchCardsData } from "@/dummyData/journalData";

import { CommentInput } from '@/components/commentInput.tsx';

import '../styles/journal.css';
import '../styles/datePicker.css';

export function Journal(){
    const navigate = useNavigate();

    return (
        <div className="jounalPage">
            {/* <> {console.log(`Rendering Cards`)} </> */}
            <div className="journalHeader">
                <span className="pageName"> Journal </span>
                <Breadcrumb>
                <BreadcrumbList className="breadCrumbList">

                    <Link to={'/dashboard'}>
                    <BreadcrumbItem>
                         Home
                    </BreadcrumbItem>
                     </Link>
                    <BreadcrumbSeparator />
                    
                    <BreadcrumbItem >
                        <button onClick={() => navigate(-1)}>View Data</button>
                    </BreadcrumbItem>
                    
                </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="journalDatePicker">
                <img className="calenderLogo" src={assets.calendarIcon} alt=""/>
                <Separator orientation="vertical" className="calenderSeparator"/>
                <DatePicker />
            </div>

            <div className="matchCardsContainer">
                {
                    
                    matchCardsData.map(
                        matchCard => (
                            <div key={matchCard.id} className="matchCard">
                                <div className="matchCardHeader">
                                    <div className="playerInfo">
                                        <span className="matchType">{ matchCard.matchType }</span>
                                        {matchCard.opponent && <span className="opponentName"> v/s {matchCard.opponent} </span>}
                                        {matchCard.location && <span className="matchLocation"> {matchCard.location} </span>}
                                    </div>

                                    <div className="matchStats">
                                        <div className="matchResultContainer">
                                            <span className="result"> {matchCard.result} </span>
                                            <span> Result </span>
                                        </div>

                                        <div className="matchSetsContainer">
                                            <span className="sets"> {matchCard.sets} </span>
                                            <span> Sets </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="separator"/>

                                <div className="questionsContainer">
                                    {
                                        matchCard.questions.map(
                                            (question, index) => (
                                                <React.Fragment key={question.id}>
                                                <div className="questionContent">
                                                    <span className="question"> {question.question} </span>
                                                    <div className="score"> {question.score} </div>
                                                </div>
                                                {index < matchCard.questions.length-1 && <div className="separator"/>}
                                                </React.Fragment>
                                            )
                                        )
                                    }
                                </div>

                                <div className="separator"/>

                                <div className="commentSection">

                                    <CommentInput
                                    coachName={matchCard.coach.name}
                                    commentId={matchCard.id}
                                    />

                                </div>
                            </div>
                        )
                    )
                }
            </div>

        </div>
    )
}
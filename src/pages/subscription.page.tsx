import { assets } from "@/assets/images";
import { RenderAdvisoryList } from "@/components/advisoryList";
import type { advisoryListType } from "@/types/advisoryList.type";
import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router";

import { substypeList } from "@/dummyData/subscriptionOptions";

import '../styles/subscription.css';
import '../styles/subscriptionsType.css';
import { RenderPricings } from "@/components/renderPricings";
import type { subsOptionsListType } from "@/types/subsOptionsList.type";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subscriptionValidationSchema } from "@/validation/subscriptionSelect.schema";
import type { inputFormData } from "@/types/inputForm.type";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { updateState } from "@/features/user/userSlice";

type subsCriptionSelect = {
    subscriptionPlan: string;
}

export function Subscription(){

    const navigate = useNavigate();
    
    // const user = JSON.parse(localStorage.getItem('user') ?? 'null') as inputFormData|null;
    const user = useAppSelector((state) => state.user);
    const dispath = useAppDispatch();

    const { handleSubmit, control, formState:{errors} } = useForm<subsCriptionSelect>({
        defaultValues:{
            subscriptionPlan: ''
        }, resolver: yupResolver(subscriptionValidationSchema)
    });

    const onSubmit = (data: subsCriptionSelect) => {
        
        if(user){
            // user.subscribed = true;
            dispath(updateState(Object.assign({...user}, {subscribed: true})));
            // localStorage.setItem('user', JSON.stringify(user));
            navigate('/dashboard');
        }
        else{
            navigate('/');
        }
        
    };

    const advisoryListItems = useMemo(
        () => {
            return [
                {
                    id: 1,
                    leftIcon: assets.reportChart,
                    content: 'Upgrade to Access Player Journals'
                },
                {
                    id: 2,
                    leftIcon: assets.infinitySign,
                    content: 'Generate & Analyze Reports'
                },
                {
                    id: 3,
                    leftIcon: assets.supportIcon,
                    content: '24/7 Support'
                },
                {
                    id: 4,
                    leftIcon: assets.freeTrail,
                    content: '7-day free trial'
                },
                {
                    id: 5,
                    leftIcon: assets.goalSign,
                    content: <React.Fragment>Get Trained on Our Software & App -
                        {' '}
                        <Link to={'https://tennispreneur.com/our-courses/'}> 
                        Learn more
                        </Link>
                        </React.Fragment>
                }
            ] as advisoryListType['items']
        }, []
    )

    return (
        <div className="subscriptionPage">
            <div className="subscriptionPageBody">
                <div className="header">
                    <span className="title"> Pro Plan for Coaches & Mentors <img className="titleRightIcon" src={assets.sparkleIcon} alt=""/> </span>
                    <span> Upgrade to unlock all features </span>
                </div>

                <div className="separator"/>

                <div className="advisoryContainer">
                    <RenderAdvisoryList 
                    advisoryList={{items: advisoryListItems}}
                    listCls="subscriptionAdvisoryList"
                    itemCls="advisoryItems"
                    />

                    <div className="bannerContainer">
                        <img className="banner bounceEffect" src={assets.subsCriptionPageBanner} alt=""/>
                        <div className="playArrowContainer bounceEffect"/>
                        <img className="playArrow bounceEffect squashClick" src={assets.playArrow} alt=""/>
                    </div>
                </div>

                <div className="separator"/>

                <form onSubmit={handleSubmit(onSubmit)} className="subscriptionSelectForm">
                    <Controller 
                    name="subscriptionPlan"
                    control={control}
                    render={
                        ({field}) => (
                        <div className="subsTypeList">
                            <ToggleGroup className="subscriptionToggleGrp" type="single" value={field.value || ''}
                            onValueChange={(val) => field.onChange(val)}
                            >
                            {
                                substypeList.map(
                                    (subType: subsOptionsListType) => {
                                        return(
                                        <RenderPricings key={subType.id} options={subType} asToggleGroupItem={true}/>
                                        )
                                    }
                                )
                            }
                            </ToggleGroup>
                        </div>
                        )
                    }
                    />
                
                <button type="submit" className="submitBtn bounceEffect squashClick"> Start your free trial </button>
                {errors.subscriptionPlan && <p className="subsCriptionSelectError"> {errors.subscriptionPlan.message} </p>}
                </form>
            </div>
        </div>
    )
}
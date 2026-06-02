import type { subsOptionsListType } from "@/types/subsOptionsList.type"

export const substypeList: subsOptionsListType[] = [
        {
            id: 1,
            type: 'Player',
            desc: '1 player includes 1 parent and 1 coach for free.',
            monthlyBill: 9.99,
            yearlyBill: 99,
            yearlySaving: 43.88
        },
        {
            id: 2,
            type: 'Pro',
            desc: 'Up to 10 Players (Ideal for Academies - Squads)',
            monthlyBill: 19.99,
            yearlyBill: 199,
            yearlySaving: 52.88
        },
        {
            id: 3,
            type: 'Elite',
            desc: 'Up to 50 Players (Ideal for High School + College Teams)',
            monthlyBill: 29.99,
            yearlyBill: 299,
            yearlySaving: 47.88
        }
    ]
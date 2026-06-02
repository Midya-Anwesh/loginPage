import { type RouteObject } from 'react-router';
import { LoginPage } from '../pages/login.page';
import { PlayerListPage } from '../pages/playerList.page';
import { DashboardHeader } from '../components/dashBoardHeader';
import { PlayerAnalysis } from '../pages/playerAnalytix.page';
import { RoleSelect } from '@/pages/roleSelect.page';
import { Journal } from '@/pages/journal.page';
import { Subscription } from '@/pages/subscription.page';

export const routes: RouteObject[]  = [
    {
        path: '/',
        Component: LoginPage
    },
    {
        path: '/dashboard',
        Component: DashboardHeader,
        children: [
            {
                index: true,
                Component: PlayerListPage
            },
            {
                path: 'analysis/:id',
                Component: PlayerAnalysis
            },
            {
                path: 'role-select',
                Component: RoleSelect 
            }
        ]
    },
    {
        path: '/journal',
        Component: DashboardHeader,
        children: [
            {
                index: true,
                Component: Journal
            }
        ]
    },
    {
        path: '/subscription',
        Component: DashboardHeader,
        children: [
            {
                index: true,
                Component: Subscription
            }
        ]
    }
]
import React from 'react'
import { useDispatch } from 'react-redux'
import {push, Route} from './slice'


interface RouteItem {
    value: Route,
    displayName: string
}


const routes: RouteItem[] = [
    {
        value: Route.Courses,
        displayName: 'Courses',
    },
    {
        value: Route.Friends,
        displayName: 'Friends',
    },
    {
        value: Route.Market,
        displayName: 'Market',
    }
]

const Navigation = () => {
    const dispatch = useDispatch()

    const goToPage = (page: Route): void => {
        dispatch(push(page))
    } 

    return (
        <div>
            <ul>
                {routes.map(routeItem => 
                    <li 
                        key={routeItem.value}
                        onClick={() => goToPage(routeItem.value)}
                    >
                        {routeItem.displayName}
                    </li>

                )

                }
            </ul>
        </div>
    )
}

export default Navigation
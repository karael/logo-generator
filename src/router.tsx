import React from 'react'
import { Route } from 'react-router-dom'
import routes from './routes'

export default function Router () {
    return (
        <React.Suspense fallback={<RLoading />}>
            <Switch>
                {routes.map((item: RoutesModel, index: number) => (
                    <RPreloaderRoute
                        key={`route-${index}`}
                        {...item}
                    />
                ))}
            </Switch>
        </React.Suspense>
    )
}
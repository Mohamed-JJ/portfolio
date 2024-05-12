import { ThemeContext } from '@/useContext/context';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React, { useContext } from 'react'

const Options = ({ routes, router, HandleClick }: { routes: { name: string; path: string; visibility: string }[], router: AppRouterInstance, HandleClick: (router: AppRouterInstance, path: string) => void }) => {
	const theme = useContext(ThemeContext);
	return (
		<>
			{routes.map((route, key) => {
				return route.visibility === "viewer" ? (
					<div
						key={key}
						className={`text-gray-${theme?.dark ? "300" : "700"
							} cursor-pointer`}
						onClick={() => HandleClick(router, route.path)}
					>
						{route.name}
					</div>
				) : null;
			})}
		</>
	)
}

export default Options
import NavBar from "features/navegation"
import Head from "next/head"
import React, { FC } from "react"

interface Props {
    children: React.ReactNode
}

const Layout: FC<Props> = ({children}) => {
	return (
		<>
			<Head> 
				<title>clase6-integracion</title> 
			</Head>
			<header>
				<NavBar/>
			</header>
			{children}
		</>
	)
}

export default Layout
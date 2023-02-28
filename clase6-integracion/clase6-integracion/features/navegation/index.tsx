import Link from "next/link"
import React from "react"

const NavBar = () => {
	return (
		<nav>
			<Link href="/">Home</Link>
			<Link href="/faqs">preguntas frecuentes</Link>
		</nav>
	)
}

export default NavBar
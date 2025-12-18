
import './globals.css'

import { Bokor } from "next/font/google";
const bokorFont = Bokor({
    subsets:['latin'],
    weight:'400'
})
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={bokorFont.className} >
            <body>{children}</body>
        </html>
    )   

}

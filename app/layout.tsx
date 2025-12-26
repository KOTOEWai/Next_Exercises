
import './globals.css'

import { Inter  } from "next/font/google";
import { Providers }  from "./sessionProvider"
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className} >
            <body>
                <Providers>
                 {children}
                </Providers>
           </body>
        </html>
    )   

}

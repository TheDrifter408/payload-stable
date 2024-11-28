import { Metadata } from "next"

export const metadata: Metadata = {
    title:"Payload CMS",
    description:"Payload/NextJS CMS"
}

export default function RootLayout({ children }: { children:React.ReactNode }){
    
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
        
    )
    
}
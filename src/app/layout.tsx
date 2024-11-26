import { Metadata } from "next"

export const metadata: Metadata = {
    title:"Payload CMS",
    description:"Payload/NextJS CMS"
}

export default function RootLayout({
    children
} : Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    )
}
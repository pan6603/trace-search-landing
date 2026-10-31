import Image from "next/image"
import AppLogoIconSvg from "@/public/images/logos/app-logo.svg"


export default function AppLogoIcon() {
    return (
        <>
            <Image 
                src={AppLogoIconSvg}
                alt="app-logo-icon"
                width={40}
                height={40}
            />
        </>
    )
}
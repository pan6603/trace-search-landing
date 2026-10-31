import Image from "next/image"

import MicrosoftIconSvg from "@/public/icons/microsoft-icon.svg"
import { MicrosoftIconContainer } from "@/styles/icons.styles"



export default function MicrosoftIcon() {
    return (
        <>
            <MicrosoftIconContainer>
                <Image 
                    src={MicrosoftIconSvg}
                    alt="microsoft-icon"
                    width={16}
                    height={16}
                />
            </MicrosoftIconContainer>
        </>
    )
}
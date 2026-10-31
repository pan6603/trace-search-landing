import Image from "next/image"

import ManualIconSvg from "@/public/icons/manual-icon.svg"
import { ManualIconContainer } from "@/styles/icons.styles"



export default function ManualIcon() {
    return (
        <>
            <ManualIconContainer>
                <Image 
                    src={ManualIconSvg}
                    alt="manual-icon"
                    width={32}
                    height={32}
                />
            </ManualIconContainer>
        </>
    )
}
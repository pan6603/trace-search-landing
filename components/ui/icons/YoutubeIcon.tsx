import Image from "next/image"

import YoutubeIconSvg from "@/public/icons/youtube-icon.svg"
import { YoutubeIconContainer } from "@/styles/icons.styles"




export default function YoutubeIcon() {
    return (
        <>
            <YoutubeIconContainer>
                <Image 
                    src={YoutubeIconSvg}
                    alt="youtube-icon"
                    width={32}
                    height={32}
                />
            </YoutubeIconContainer>
        </>
    )
}
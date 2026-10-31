import Image from "next/image"
import GithubIconSvg from "@/public/icons/github-icon.svg"
import { GithubIconContainer } from "@/styles/icons.styles"



export default function GithubIcon() {
    return (
        <>
            <GithubIconContainer>
                <Image 
                    src={GithubIconSvg}
                    alt="github-icon"
                    width={32}
                    height={32}
                />
            </GithubIconContainer>
        </>
    )
}
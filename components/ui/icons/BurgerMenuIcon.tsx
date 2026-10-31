import Image from "next/image"
import { BurgerMenuIconContainer } from "@/styles/icons.styles"
import BurgerMenuIconSvg from "@/public/icons/burger-menu-icon.svg"


export default function BurgerMenuIcon() {
    return (
        <>
            <BurgerMenuIconContainer>
                <Image 
                    src={BurgerMenuIconSvg}
                    alt="burger-menu-icon"
                    width={24}
                    height={24}
                />
            </BurgerMenuIconContainer>
        </>
    )
}



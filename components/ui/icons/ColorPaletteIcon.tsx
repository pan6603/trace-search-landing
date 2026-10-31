import Image from "next/image"

import ColorPaletteIconSvg from "@/public/icons/color-palette-icon.svg"
import { ColorPaletteIconContainer } from "@/styles/icons.styles"

export default function ColorPaletteIcon() {
    return (
        <>
            <ColorPaletteIconContainer>
                <Image 
                    src={ColorPaletteIconSvg}
                    alt="color-palette-icon"
                    width={24}
                    height={24}
                />
            </ColorPaletteIconContainer>
        </>
    )
}
import { ElementType } from "react"
import { ThemeButtonContainer } from "@/styles/buttons.styles"

interface ThemeButtonProps {
    icon: ElementType; 
}

export default function ThemeButton({ icon: Icon }: ThemeButtonProps) {
    return (
        <ThemeButtonContainer>
            <Icon size={24} />
        </ThemeButtonContainer>
    )
}
import { 
    MicrosoftStoreCTAButtonContainer,
    MicrosoftStoreCTAButtonText
} from "@/styles/buttons.styles"
import MicrosoftIcon from "@/components/ui/icons/MicrosoftIcon"


export default function MicrosoftStoreCTAButton() {
    return (
        <>
            <MicrosoftStoreCTAButtonContainer href="">
                <MicrosoftIcon />
                <MicrosoftStoreCTAButtonText>Get from Microsoft Store</MicrosoftStoreCTAButtonText>
            </MicrosoftStoreCTAButtonContainer>
        </>
    )
}
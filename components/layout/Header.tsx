import { 
    HeaderContainer, 
    HeaderWrapper,
    LogoContainer,
    LogoText,
    NavBar,
    MenuLink,
    HeaderActions,
} from "@/styles/header.styles"
import AppLogoIcon from "@/components/ui/icons/AppLogoIcon"
import MicrosoftStoreCTAButton from "@/components/ui/buttons/MicrosoftStoreCTAButton"

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <LogoContainer>
                        <AppLogoIcon />
                        <LogoText>TraceSearch</LogoText>
                    </LogoContainer>

                    <NavBar>
                        <MenuLink href="">Features</MenuLink>
                        <MenuLink href="">Showcase</MenuLink>
                        <MenuLink href="">Privacy</MenuLink>
                        <MenuLink href="">Documentation</MenuLink>
                    </NavBar>

                    <HeaderActions>
                        <MicrosoftStoreCTAButton />
                    </HeaderActions>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    )
}
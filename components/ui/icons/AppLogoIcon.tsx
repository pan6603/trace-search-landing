import styled from "styled-components"
import Image from "next/image"
import AppLogoIconSvg from "@/public/images/logos/app-logo.svg"

export default function AppLogoIcon() {
    return (
        <AppLogoIconContainer>
            <Image 
                src={AppLogoIconSvg}
                alt="app-logo-icon"
                width={40}
                height={40}
                style={{ width: "100%", height: "100%" }} 
            />
        </AppLogoIconContainer>
    )
}

const AppLogoIconContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        width: 34px;  
        height: 34px;
    }

    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        width: 30px;    
        height: 30px;
    }
`;
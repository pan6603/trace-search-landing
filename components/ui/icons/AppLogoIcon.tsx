import styled from "styled-components"
import Image from "next/image"
import AppLogoIconSvg from "@/public/images/logos/app-logo.svg"

// 스타일 컴포넌트 추가
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
`;



export default function AppLogoIcon() {
    return (
        <>
            <AppLogoIconContainer>
                <Image 
                    src={AppLogoIconSvg}
                    alt="app-logo-icon"
                    width={40}
                    height={40}
                />
            </AppLogoIconContainer>
 
        </>
    )
}
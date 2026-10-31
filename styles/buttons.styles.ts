import Link from "next/link";
import styled from "styled-components";



export const ThemeButtonContainer = styled.button`
    max-width: 24px;
    width: 100%;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const MicrosoftStoreCTAButtonContainer = styled(Link)`
    max-width: 210px;
    width: 100%;
    height: 34px;

    background: #0078D4;

    padding-left: 12px;
    padding-right: 12px;

    border-radius: 8px;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 8px;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        max-width: 195px; 
        height: 32px;     
        padding-left: 10px;
        padding-right: 10px;
    }

    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        display: none;
    }
`

export const MicrosoftStoreCTAButtonText = styled.span`
    font-family: 'Plus Jakarta Sans', sans-serif; 
    font-weight: 600; 
    font-size: 12px;  

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        font-size: 11px; 
    }

    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        display: none;
    }
`
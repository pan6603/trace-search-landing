import Link from "next/link";
import styled from "styled-components";


export const HeaderContainer = styled.header`
    max-width: 1920px;
    width: 100%;
    height: 65px;
    background: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        height: 60px;               
        padding: 0 24px;            
    }

    @media (max-width: 768px) {
        height: 56px;               
        padding: 0 16px;       
    }
`

export const HeaderWrapper = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 65px;

    padding-left: 24px;
    padding-right: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        height: 60px;
        padding-left: 20px;
        padding-right: 20px;
    }

    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        height: 56px;           
        padding-left: 16px;     
        padding-right: 16px;
    }
`


export const LogoContainer = styled.div`
    width: fit-content;
    height: 36px;

    display: flex;
    align-items: center;
    gap: 0px;

    cursor: pointer;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        height: 32px; 
        gap: 8px;    
    }

    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        height: 28px;           
        gap: 6px;              
    }
`

export const LogoText = styled.span`
    font-size: 16px;
    color: #404752;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        font-size: 15px; 
    }

    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        font-size: 14px; 
    }
`


export const NavBar = styled.nav`
    max-width: 393px;
    width: 100%;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        max-width: 340px;     
    }

    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        display: none;        
    }
`

export const MenuLink = styled(Link)`
    padding-left: 12px;
    padding-right: 12px;

    padding-top: 6px;
    padding-bottom: 6px;

    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #404752;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        padding-left: 8px;   
        padding-right: 8px;
        font-size: 12px;     
    }
`


export const HeaderActions = styled.div`
    width: fit-content;
    height: 36px;

    display: flex;
    align-items: center;
    gap: 12px;

    /* 태블릿 반응형 (1024px 이하) */
    @media (max-width: 1024px) {
        height: 32px;  
        gap: 10px;     
    }

    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        height: 30px;        
        gap: 8px;            
    }
`

export const VersionBadge = styled.div`
    max-width: 77px;
    width: 100%;
    height: 28px;
    background: #EFEAE0;

    padding-left: 10px;
    padding-right: 10px;

    padding-top: 4px;
    padding-bottom: 4px;

    border-radius: 9999px;
    border: 1px solid #E6DFD3;

    display: flex;
    align-items: center;
    gap: 6px;
`

export const StatusDot = styled.div`
    max-width: 6px;
    width: 100%;
    height: 6px;

    border-radius: 9999px;
    background: #10B981;
`

export const VersionBadgeText = styled.span`
    font-family: 'JetBrains Mono', monospace;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #404752;
`
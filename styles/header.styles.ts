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
`


export const LogoContainer = styled.div`
    width: fit-content;
    height: 36px;

    display: flex;
    align-items: center;
    gap: 0px;

    cursor: pointer;
`

export const LogoText = styled.span`
    font-size: 16px;
    color: #404752;
`


export const NavBar = styled.nav`
    max-width: 393px;
    width: 100%;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MenuLink = styled(Link)`
    padding-left: 12px;
    padding-right: 12px;

    padding-top: 6px;
    padding-bottom: 6px;

    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #404752;

`


export const HeaderActions = styled.div`
    width: fit-content;
    height: 36px;

    display: flex;
    align-items: center;
    gap: 12px;


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
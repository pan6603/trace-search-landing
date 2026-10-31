import styled from "styled-components";


export const ColorPaletteIconContainer = styled.div`
    max-width: 15px;
    width: 100%;
    height: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`


export const MicrosoftIconContainer = styled.div`
        max-width: 16px;
        width: 100%;
        height: 16px;

        display: flex;
        align-items: center;
        justify-content: center;

        /* 태블릿 반응형 (1024px 이하) */
        @media (max-width: 1024px) {
            max-width: 15px;
            width: 100%;
            height: 15px;

            svg {
                width: 15px; 
                height: 15px;
            }
      
        /* 모바일 반응형 (768px 이하) */
        @media (max-width: 768px) {
            max-width: 40px;        
            width: 100%;
            height: 40px;           

            svg {
                width: 40px;        
                height: 40px;
            }
        }
    }
`

export const GithubIconContainer = styled.div`
    max-width: 32px;
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`


export const YoutubeIconContainer = styled.div`
    max-width: 32px;
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`


export const ManualIconContainer = styled.div`
    max-width: 32px;
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`


export const BurgerMenuIconContainer = styled.div`
    display: none;

    max-width: 24px;
    width: 100%;
    height: 24px;

    cursor: pointer;
    


    /* 모바일 반응형 (768px 이하) */
    @media (max-width: 768px) {
        display: block;        
    }
`
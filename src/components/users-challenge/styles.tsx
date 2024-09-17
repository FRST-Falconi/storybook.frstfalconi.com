import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    .avatar-image-only-owner {
        border: 3px solid #e2e8f0 !important;
        border-radius: 50%;
        cursor: pointer;
    }
    .avatar-image-owner {
        border: 2px solid #f26818 !important;
        border-radius: 50%;
        cursor: pointer;
    }
    .avatar-image-user {
        border: 2px solid #e2e8f0 !important;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const AvatarAutor = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    background: #f26818;
    border-radius: 18px;
    right: 0.5rem;
    height: 12px;
    bottom: 10px;
    > p {
        color: #ffffff;
        font-weight: 700;
        font-size: 10px;
    }
`
export const AvatarInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const GoalInfoCompany = styled.p`
    color: #bdbdbd;
    font-family: PT Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const AllAvatarUsers = styled.div`
    margin-left: 10px;
    max-width: 34rem;
    margin-bottom: 6px;
    .list-users {
        font-weight: 700;
        font-size: 16px;
        font-family: 'PT Sans';
        color: #f7f9fc;
        cursor: pointer;
        &:hover {
            color: #f18624;
            text-decoration: underline #f18624;
        }
    }
    .owner {
        color: #f18624;
    }
    .not-owner {
        color: #f7f9fc;
    }
    .more-users {
        color: #f7f9fc;
        font-weight: 700;
        font-size: 16px;
        font-family: 'PT Sans';
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
        &:active {
            text-decoration: underline #f18624;
            color: #f18624;
        }
    }

  
`
export const AvatarsSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .MuiAvatarGroup-avatar {
        margin: -4px !important;
    }
    .plus-users {
        width: 48px !important;
        height: 48px !important;
        background-color: #444444 !important;
        border-radius: 50% !important;
        font-weight: bold !important;
        cursor: pointer;
        border: none !important;

        >span{
            font-size: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: -1px;
    color: #FFFFFF;
}
        }
`

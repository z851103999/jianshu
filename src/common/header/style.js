import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: orange;
    background: url(${logoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    box-sizing: border-box;
    padding-right: 70px;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-szie: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    right:0;
    top:56px;
    //height:56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`

export const SerchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size: 13px;
`

export const SearchInfoItem = styled.a`
    display: inline-block;
    float: left;
    font-size:12px;
    margin-right: 10px;
    margin-bottom: 7px;
    padding:0 5px;
    line-height: 20px;
    border:1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`
export const SerchiInfoList = styled.div`
   overflow: hidden;
   margin-bottom: 10px;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;

    }
    &.open-icon{
        background:#333
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-ative {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-ative {
        width: 160px;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background-color: #ec6149;
    }
`
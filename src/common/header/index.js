import React from "react";
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Button,
    Addition,
    SearchInfo,
    SerchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SerchiInfoList
} from './style'
import {actionCreators} from './store';

const getListArea = (show) => {
    if (show) {
        return(
            <SearchInfo>
                <SerchInfoTitle>热门搜索
                    <SearchInfoSwitch>换一换</SearchInfoSwitch>
                </SerchInfoTitle>
                <SerchiInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SerchiInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href='/'/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe65a;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition timeout={200} in={props.focused} classNames="slide">
                        <NavSearch className={props.focused ? 'focused' : ''}
                                   onFocus={props.handleInputFocus}
                                   onBlur={props.handleInputBlur}></NavSearch>

                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6fa;</i>
                    {getListArea(props.focused)}
                </SearchWrapper>

            </Nav>
            <Addition>
                <Button className='writting'>
                    <i className="iconfont">&#xe65d;</i>写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        // focused: state.get('header').get('focused')
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.serchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.serchBlur())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);


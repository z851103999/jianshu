import React,{Component} from "react";
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch,SearchWrapper,Button,Addition} from './style'

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            focused:true
        }
    }

    render() {
        return(
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe65a;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch className={this.state.focused ? 'focused' : ''}></NavSearch>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe6fa;</i>
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
}

export default Header
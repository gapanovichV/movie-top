import React, {useState} from 'react'
import cn from "classnames"

import cls from './Header.module.scss'
import {RoutePath} from "app/App";
import {Link} from "react-router-dom";

import {Button, SizeButton, VariantButton} from "shared/Button";

import Search from 'shared/assets/icons/search.svg'
import Logo from 'shared/assets/icons/logo.svg'
import Bell from 'shared/assets/icons/bell.svg'
import avatar from 'shared/assets/icons/avatar.jpg'

interface HeaderProps {
    className?: string
}

export const Header  = ({className}: HeaderProps) => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <header>
      <div className={cn('container')}>
        <nav className={cn(cls.header, className)} style={isLogin ? {padding: '2.22rem 0'} : {padding: '2rem 0'}}>
          <Link className={cn(cls.logo)} to={RoutePath.LOGIN}><Logo /></Link>
          <ul className={cn(cls.pages)}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Discover</Link></li>
            <li><Link to='/'>Movie Release</Link></li>
            <li><Link to='/'>Forum</Link></li>
            <li><Link to='/'>About</Link></li>
          </ul>
          <div className={cn(cls.header__right_slide)}>
            <Search className={cn(cls.search)} />
            {isLogin ?
              <div  className={cn(cls.on__login_btn)}>
                <Bell />
                <Link to={RoutePath.PROFILE}><img className={cn(cls.avatar)} src={avatar} alt="avatar"/></Link>
              </div> :
              <div  className={cn(cls.non__login_btn)}>
                <Button variant={VariantButton.BORDER} size={SizeButton.NORMAL}>Sign up</Button>
                <Button variant={VariantButton.PRIMARY} size={SizeButton.NORMAL}>Login</Button>
              </div>
            }
          </div>
        </nav>
      </div>
    </header>
  );
}
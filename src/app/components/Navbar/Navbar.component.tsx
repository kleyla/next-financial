import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RoutesApp } from '@/app/constants/routes'
import logoWhite from '../../../assets/bsol-logo-transparent.png'
import './navbar.component.css'

const Navbar = (): JSX.Element => {
  return (
    <div className="header">
      <nav className="nav">
        <header>
          <Image
            priority={true}
            src={logoWhite}
            alt="Logo Image"
            className="header-logo"
          />
          <div className="header-items">
            <Link href={RoutesApp.HOME.path}>{RoutesApp.HOME.name}</Link>
            <Link href={RoutesApp.EXPENSE_RECORDS.path}>
              {RoutesApp.EXPENSE_RECORDS.name}
            </Link>
            <Link href={RoutesApp.INCOME_RECORDS.path}>
              {RoutesApp.INCOME_RECORDS.name}
            </Link>
          </div>
        </header>
      </nav>
      <div
        style={{
          height: '7px',
          width: '100%',
          marginTop: '0px',
          borderRadius: '20px',
          background:
            'linear-gradient(90deg, #FAB75A 23.96%, #D70C55 69.79%, #630097 100%)'
        }}
      ></div>
    </div>
  )
}

export default Navbar

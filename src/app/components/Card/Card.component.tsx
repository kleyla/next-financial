'use client'

import React, { type MouseEvent } from 'react'
import Card from '@mui/material/Card'
import { CardContent, Typography } from '@mui/material'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import './Card.component.css'

interface CardProps {
  title: string
  icon: string | StaticImageData
  path: string
}

function CardComponent ({
  title,
  icon,
  path
}: CardProps): JSX.Element {
  return (
    <Link href={path} style={{ textDecoration: 'none' }}>
      <Card className='card'>
        <CardContent>
          <Image
            className='card-image'
            priority={true}
            src={icon}
            alt={title}
          />
        </CardContent>
        <Typography className='card-title'>{title}</Typography>
      </Card>
    </Link>
  )
}

export default CardComponent

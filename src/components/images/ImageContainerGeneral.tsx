import React from 'react'

interface imageContainerGeneralInterface {
    path?: string,
    altText?: string
}
export const ImageContainerGeneral = ({path , altText, }: imageContainerGeneralInterface) => {
  return (
    <img src={path} style={{
        width: '100%'
    }} alt={altText} />
  )
}

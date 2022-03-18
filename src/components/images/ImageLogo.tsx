import React from 'react'

const logoPath = "assets/logo.png";

export const ImageLogo = ({size}: any) => <img src={logoPath} style={{
    width: size,
}} alt="Gateway Corp. Logo" />
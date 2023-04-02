import { Stack, Container, Card, CardMedia, CardContent } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import React, { PropsWithChildren } from "react"

type propTypes = {
    src: string, 
    alt: string, 
    position: string,
    aspect: '4/5' | '1/1' | '16/9' | '5/4',
}

const ImageCard: React.FC<PropsWithChildren<propTypes>> = ({ src, alt, position, aspect, children }) => {
    return (
        <Card>
            <CardMedia image={src} title={alt}  sx={{ aspectRatio: aspect, backgroundPosition: position }}>
                {children}
            </CardMedia>
        </Card>
        
    )
}

export default ImageCard

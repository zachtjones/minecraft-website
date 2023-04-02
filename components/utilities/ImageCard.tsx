import { Stack, Container } from "@mui/material"
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
        <Stack maxWidth='md' sx={{ position: 'relative', aspectRatio: aspect }} alignItems='center' justifyContent='center'>
            <Box zIndex={1}>{children}</Box>
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'cover', objectPosition: position }}
            />
            
        </Stack>
        
    )
}

export default ImageCard

import { Container } from "@mui/material"
import Image from "next/image"
import React from "react"

interface propTypes {
    src: string, 
    alt: string, 
    position: string,
    aspect: '4/5' | '1/1' | '16/9'
}

const ImageCard: React.FC<propTypes> = ({ src, alt, position, aspect }) => {
    return (
        <Container maxWidth='md' fixed sx={{ position: 'relative', aspectRatio: aspect }}>
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: 'cover', objectPosition: position }}
            />
            
        </Container>
        
    )
}

export default ImageCard

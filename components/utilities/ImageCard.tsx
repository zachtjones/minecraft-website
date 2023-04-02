import { Card, CardMedia } from "@mui/material"
import React, { PropsWithChildren } from "react"

type propTypes = {
    src: string, 
    alt: string, 
    position: string,
    aspect: '4/5' | '1/1' | '16/9' | '5/4',
    linkTo?: URL;
}

const ImageCard: React.FC<PropsWithChildren<propTypes>> = ({ src, alt, position, aspect, children, linkTo }) => {

    const handleOnClick = () => {
        if(linkTo){
            window.open(linkTo, "_blank");
        }
    }

    return (
        <Card onClick={handleOnClick}>
            <CardMedia 
                image={src} 
                title={alt}  
                sx={{ aspectRatio: aspect, backgroundPosition: position, cursor: linkTo ? 'pointer' : 'default' }}
            >
                <div>
                    {children}
                </div>
            </CardMedia>
        </Card>
        
    )
}

export default ImageCard

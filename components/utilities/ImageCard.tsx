import { Card, CardActionArea, CardMedia } from "@mui/material"
import React, { PropsWithChildren } from "react"

type propTypes = {
    src: string, 
    alt: string, 
    position: string,
    aspect: '4/5' | '1/1' | '16/9' | '5/4',
    linkTo?: URL;
}

const ImageCard: React.FC<PropsWithChildren<propTypes>> = ({ src, alt, position: backgroundPosition, aspect: aspectRatio, children, linkTo }) => {

    const handleOnClick = () => {
        if(linkTo){
            window.open(linkTo, "_blank");
        }
    }

    const backrgoundCoverStyles = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <Card onClick={handleOnClick} sx={{":hover": linkTo ? {'opacity': '85%'}: undefined}}>
            <CardActionArea sx={{ aspectRatio, backgroundPosition, cursor: linkTo ? 'pointer' : 'default', ...backrgoundCoverStyles}}>
                {children}
            </CardActionArea>
        </Card>
        
    )
}

export default ImageCard

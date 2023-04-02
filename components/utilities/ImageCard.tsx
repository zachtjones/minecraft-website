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

    const displayChildrenCenterStyles = {
        display: 'flex', justifyContent: 'center', alignItems :'center', flexDirection: 'column'
    }


    return (
        <Card onClick={handleOnClick} sx={{":hover": linkTo ? {'opacity': '85%'}: undefined}}>
            {linkTo ? (
                <CardActionArea sx={{ aspectRatio, backgroundPosition, cursor: linkTo ? 'pointer' : 'default', ...backrgoundCoverStyles, ...displayChildrenCenterStyles}}>
                    {children}
                </CardActionArea>
            ) : (
                <CardMedia 
                    image={src} 
                    title={alt}  
                    sx={{ aspectRatio, backgroundPosition, ...displayChildrenCenterStyles}}
                > 
                    {children} 
                </CardMedia>
            )}
        </Card>
        
    )
}

export default ImageCard

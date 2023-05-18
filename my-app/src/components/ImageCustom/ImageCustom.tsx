import React, { useState } from 'react';

type Props = {
    src: string;
};

const ImageCustom = ({ src }: Props) => {
    const [imageError, setImageError] = useState(false);
    const onImageError = () => {
        setImageError(true);
    };
    return (
        <img
            src={imageError ? require('../../assets/images/LOGO.jpg') : `http://localhost:5000/${src}`}
            alt={src}
            onError={() => onImageError()}
        />
    );
};

export default ImageCustom;

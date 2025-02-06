import React from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Favorite, Visibility, Share } from '@mui/icons-material';

interface ProductCardProps {
    imageUrl: string;
    discount: string;
    productName: string;
    brand: string;
    originalPrice: string;
    discountedPrice: string;
    rating: number;
    reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    discount,
    productName,
    brand,
    originalPrice,
    discountedPrice,
    rating,
    reviewCount
}) => {
    return (
        <Card className="w-full rounded shadow-lg group mx-3">
            <div className="relative">
                <CardMedia
                component="img"
                image={imageUrl}
                alt={productName}
                className="w-full"/>
                <div className="absolute top-2 left-2 bg-[#00670c] text-white text-xs font-bold px-2 py-1 rounded">
                    {discount}
                </div>
                <div className="absolute flex flex-col gap-1 top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IconButton className="bg-white p-2 rounded-full shadow">
                        <Favorite className='text-[#00670c]' />
                    </IconButton>
                    <IconButton className="bg-white p-2 rounded-full shadow">
                        <Visibility className='text-[#00670c]' />
                    </IconButton>
                    <IconButton className="bg-white p-2 rounded-full shadow">
                        <Share className="text-[#00670c]"/>
                    </IconButton>
                </div>
            </div>

            <CardContent className="px-4 py-2">
                <div className="flex items-center">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className="material-icons">
                                {index < rating ? 'star' : 'star_border'}
                            </span>
                        ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({reviewCount})</span>
                </div>
                <Typography className="text-gray-600 text-sm mt-1">{brand}</Typography>
                <Typography className="text-gray-900 font-bold text-lg mt-1">{productName}</Typography>
                <Typography className="text-gray-500 line-through">{originalPrice}</Typography>
                <Typography className="font-bold text-xl text-[#00670c]">{discountedPrice}</Typography>
            </CardContent>
        </Card>
    );
};


export default ProductCard;
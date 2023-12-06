'use client';
import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { useFavoriteItemsStore } from '@/store/favorites';
import { ProductWithCategory } from '@/types/product';

interface FavoriteButtonProps {
  product: ProductWithCategory;
}

export default function FavoriteButton({ product }: FavoriteButtonProps) {
  const [isMounted, setIsMounted] = useState(false);
  const favoriteItems = useFavoriteItemsStore((state) => state.items);
  const addToFavorites = useFavoriteItemsStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteItemsStore((state) => state.removeFromFavorites);
  const productIsFavorite = favoriteItems.some((item) => item._id === product._id);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={() => (productIsFavorite ? removeFromFavorites(product._id) : addToFavorites(product))}
      className="text-sm w-max flex items-center gap-2 px-2 py-2 rounded-md "
    >
      <FaHeart
        className={` h-5 w-5 ${
          productIsFavorite ? 'text-red-600' : 'text-gray-900'
        } transition-colors duration-500`}
      />
      {productIsFavorite ? 'remover dos favoritos' : 'adicionar aos favoritos'}
    </button>
  );
}

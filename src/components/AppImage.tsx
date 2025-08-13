"use client"; // Diperlukan karena adanya event handler onError

import React from "react";

// Definisikan tipe untuk props
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
}

export default function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}: ImageProps) {
  // Event handler untuk gambar yang gagal dimuat
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Mengganti sumber gambar dengan gambar placeholder
    (e.target as HTMLImageElement).src = "/assets/images/no_image.png";
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}

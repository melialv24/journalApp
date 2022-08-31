import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images }) => {
  console.log(images, "IMAGENES");
  return (
    <ImageList sx={{ width: "100", height: 500 }} cols={4} rowHeight={164}>
      {images.map((image, i) => (
        <ImageListItem key={image.public_id}>
          <img
            src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

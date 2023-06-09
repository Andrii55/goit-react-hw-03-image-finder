import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map(imag => (
        <ImageGalleryItem openModal={openModal} key={imag.id} imag={imag} />
      ))}
    </ul>
  );
};

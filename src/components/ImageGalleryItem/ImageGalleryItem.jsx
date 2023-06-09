export const ImageGalleryItem = ({ imag, openModal }) => {
  return (
    <li style={{ width: 200 }}>
      <img
        onClick={() => openModal(imag.largeImageURL)}
        src={imag.webformatURL}
        alt={imag.tags}
      />
    </li>
  );
};

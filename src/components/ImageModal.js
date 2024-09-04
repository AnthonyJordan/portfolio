import "./ImageModal.css";
function ImageModal({ src, closeModal }) {
  return (
    <div className="modalBackground" onClick={() => closeModal(false)}>
      <div className="modalContainer">
        <div>
          <img className="modalImage" src={src} alt={src} />
        </div>
      </div>
    </div>
  );
}

export default ImageModal;

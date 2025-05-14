import "../stylesheet/ProductInfoModal.css"

export default function ProductInfoModal({onClose, product}) {
    return (
        <>
            <div className="modal">
                <p>{product.productName}</p>
                <img src={product.productImageURL} alt="productImage" />
                <p>{product.productDescription}</p>
                <button className={'modalButton'} onClick={onClose}>Close</button>
            </div>
        </>
    )

}
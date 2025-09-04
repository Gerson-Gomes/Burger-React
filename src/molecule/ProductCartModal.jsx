import "../stylesheet/ProductCartModal.css"

export default function ProductCartModal ({onClose, product})  {
    return (
        <>
            <div className="modal">
                <p>{product.productName}</p>
                <img src={product.productImageURL} alt="productImage" />
                <p>{product.productDescription}</p>
                <button>Adicionar ao Carro</button>
                <button className={'modalButton'} onClick={onClose}>Close</button>
            </div>
        </>
    )
}
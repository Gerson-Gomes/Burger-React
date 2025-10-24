import "../stylesheet/ProductInfoModal.css"


export default function ProductInfoModal({onClose, product}) {
    return (
        <>
            <div className="modal">
                <img src={product.productImageURL} alt="productImage" />
                <div className="flex flex-col justify-around py-8 h-full items-center">
                    <p className="h-1/5">{product.productName}</p>
                    <p className="h-3/5">{product.productDescription}</p>
                    <div className="h-1/5">
                        <button className="bg-indigo-400 py-5 px-12 rounded-md hover:bg-blue-400" onClick={onClose}>Close</button>
                    </div>
                    
                </div>
                
            </div>
        </>
    )

}
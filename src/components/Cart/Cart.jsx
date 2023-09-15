import Cart1 from "../Cart1/Cart1";

const Cart = ({cart}) => {
    return (
        <div className="w-3/4 p-4">
            <h3 className=" py-6 border-b-2 text-blue-600 font-medium text-xl">Credit Hour Remaining</h3>
            <h2 className="text-2xl font-semibold border-b-2 py-6">Course name: {cart.length}</h2>
            {
                    cart.map(cart1 =><Cart1 key={cart1.id} cart1={cart1}></Cart1> )

    
            }

             <p className="text-xl font-medium py-4">Total Credit Hour : </p>
        </div>
    );
};

export default Cart;
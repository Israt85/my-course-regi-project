import Cart1 from "../Cart1/Cart1";

const Cart = ({cart,totalHr,remaining }) => {
    return (
        <div className="w-3/4 h-full bg-gray-100 rounded-2xl px-2 py-4">
            <h3 className=" bg-slate-300 px-2 rounded-xl py-4 border-b-2 text-blue-600 font-bold text-sm">Credit Hour Remaining {remaining} hr </h3>
            <h2 className="bg-slate-300 rounded-xl mt-4 px-2 text-xl font-semibold border-b-2 py-2">Course name: {cart.length}</h2>
           <ol className="list-decimal list-inside py-4">
           {
                    cart.map(cart1 =><Cart1 key={cart1.id} cart1={cart1}></Cart1> )

    
            }
           </ol>
             <p className="text-sm font-medium px-2 bg-slate-300 rounded-xl py-2">Total Credit Hour :{totalHr} </p>
        </div>
    );
};

export default Cart;
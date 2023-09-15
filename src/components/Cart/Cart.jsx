import Cart1 from "../Cart1/Cart1";

const Cart = ({cart,totalHr,remaining }) => {
    return (
        <div className="w-3/4 h-full bg-gray-100 rounded-2xl px-2 py-4">
            <h3 className=" bg-slate-300 px-2 rounded-xl py-6 border-b-2 text-blue-600 font-medium text-lg">Credit Hour Remaining: {remaining} hr </h3>
            <h2 className="bg-slate-300 rounded-xl mt-4 px-2 text-2xl font-semibold border-b-2 py-6">Course name: {cart.length}</h2>
           <ol className="list-decimal list-inside">
           {
                    cart.map(cart1 =><Cart1 key={cart1.id} cart1={cart1}></Cart1> )

    
            }
           </ol>
             <p className="text-xl font-medium px-2 bg-slate-300 rounded-xl py-4">Total Credit Hour :{totalHr} </p>
        </div>
    );
};

export default Cart;
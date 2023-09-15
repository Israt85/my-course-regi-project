const Cart1 = ({cart1}) => {
    const {course_name} = cart1
    return (
          <div>
            <li className="text-lg font-normal">{course_name}</li>
          </div>
         
    );
};

export default Cart1;
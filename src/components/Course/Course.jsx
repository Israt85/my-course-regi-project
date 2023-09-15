const Course = ({course, handleAddToSelect}) => {
    const {img, course_name, details, price, credit} =course;
    return (
        <div className=" h-auto text-center mx-2 p-4 my-10 border-2 bg-slate-300">
            <img className="w-full" src={img} alt="" />
            <h3 className="text-xl font-bold pb-4">{course_name}</h3>
            <p className="text-xl font-light pb-4">{details}</p>
            <div className="flex gap-4 text-xl pb-4">
                <p>$ Price :{price} </p>
                <p>Credit : {credit}hr</p>
            </div>
           <div className="mt-auto">
           <button onClick={()=>handleAddToSelect(course)} className=" text-center font-bold px-20 py-2 rounded-lg bg-blue-700">Select</button>
           </div>
        </div>
    );
};

export default Course;
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToSelect}) => {
    const [courses, setCourses]= useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <div className="grid grid-cols-3">
            {
                courses.map(course =><Course key={course.id} course={course} handleAddToSelect={handleAddToSelect}></Course> )
            }
            </div>
        </div>
    );
};

export default Courses;
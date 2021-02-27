import React from "react";
import {Link} from "react-router-dom";

function CourseCard({course}) {
    return(
        <div className="col-3">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of the
                        card's content.</p>
                    <Link to="/courses/editor" className="btn btn-primary">{course.title}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard
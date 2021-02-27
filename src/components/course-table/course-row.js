import React, {useState} from "react";
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        title,
        owner,
        lastModified
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse ={
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (<tr>
        <td>
            {!editing && <Link to="/courses/editor">
                {title}
            </Link>}
            {editing && <input
                onChange={(event) => setNewTitle(event.target.value)}
                value={newTitle}
                className="form-control"/>}
        </td>
        <td>{owner}</td>
        <td>{lastModified}</td>
        <td>
            <i onClick={() => deleteCourse(course)} className="fas mda-icon fa-trash"></i>
            {editing && <i onClick={() => saveTitle()} className="fas mda-icon fa-check"></i>}
            {!editing && <i onClick={() => setEditing(true)} className="fas mda-icon fa-edit"></i>}
        </td>

    </tr>)
}

export default CourseRow
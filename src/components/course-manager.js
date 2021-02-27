import React from "react";
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/CourseGrid";
import CourseEditor from "./course-editor";
import NavigationBar from "./navigation-bar";
import {Route, Link} from "react-router-dom";
import courseService from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses: []
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses
            }))
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModified: "never"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState
                            .courses
                            .filter(course => course !== courseToDelete)
                }))
        })
    }

    updateCourse = (updatedCourse) => {
        courseService.updateCourse(updatedCourse._id, updatedCourse)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses:
                        prevState.courses.map(course =>
                            course._id === updatedCourse._id ? updatedCourse : course)
                }))
            })
    }

    render() {
        return (
            <div className="container-fluid mda-background">
                <NavigationBar addCourse={this.addCourse}/>
                <div className="mda-page-content">

                    <Route path="/courses/table">
                        <CourseTable
                            courses={this.state.courses}
                            addCourse = {this.addCourse}
                            deleteCourse = {this.deleteCourse}
                            updateCourse = {this.updateCourse}/>
                    </Route>

                    <Route path="/courses/grid">
                        <CourseGrid
                            courses={this.state.courses}
                            addCourse = {this.addCourse}
                            deleteCourse = {this.deleteCourse}
                            updateCourse = {this.updateCourse}/>
                    </Route>

                    <Route path="/courses/editor" render={(props) => <CourseEditor props={props}/>}>
                    </Route>

                </div>
            </div>

        )
    }

}

export default CourseManager
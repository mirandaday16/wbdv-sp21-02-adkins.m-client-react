import React from "react";
import {Link, Route, useParams} from "react-router-dom";
import ModuleList from "./module-list";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import moduleService from '../../services/module-service'

// const store = createStore(moduleReducer)
const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

// componentDidUpdate() {
//     moduleService.findModulesForCourse()
//         .then(modules => this.setState({
//             modules
//         }))
// }

const CourseEditor = ({props}) => {
    const {courseId, moduleId} = useParams();
    return (<Provider store={store}>
        <div className="mda-page-content">
            <div class="container shadow mda-widget-window">
                {/*// Headline*/}
                <h1 className="mda-h1">Course Editor
                    <i onClick={() => props.history.goBack()}
                       className="fas fa-times-circle float-right mda-clickable-icon"></i>
                </h1>

                <div class="form-group row">
                    <label class="col-4 col-form-label"></label>
                    <Route path="/courses/editor/:courseId/:moduleId">
                        {/*Should only be visible when a module is selected*/}
                        <LessonTabs/>
                    </Route>
                </div>
                <div class="row mda-widget-body">
                    <ModuleList/>
                    <Route path="/courses/editor/:courseId/:moduleId/:lessonId">
                        {/*Should only be visible when a lesson is selected*/}
                        <TopicPills/>
                    </Route>
                    {/*// Content intentionally left blank!*/}
                </div>
            </div>
        </div>
    </Provider>)
}

export default CourseEditor
import React from 'react'
import {connect} from 'react-redux'

const LessonTabs = (
    {
        lessons=[
            {_id: "123", title: "Lesson A"},
            {_id: "456", title: "Lesson B"},
            {_id: "789", title: "Lesson C"},
        ]
    }) =>
    <div className="col-8">
        <ul className="nav nav-tabs justify-content-end">
            {
                lessons.map(lesson =>
                    <li className='nav-item'>
                        <a className="nav-link" aria-current="page" href="#">{lesson.title}</a>
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({})

export default connect()(LessonTabs)
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseAction';
// import { bindActionCreators } from "redux";
import CourseList from './CourseList';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render(){
    const {courses} = this.props;
    return (
      <div className="jumbotron">
        <h1>Courses:</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
  // createCourse: PropTypes.func.isRequired
};

//what state is available
function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  };
}

//what action are available in the component
function mapDispatchToProps(dispatch){
  return {
    // actions: bindActionCreators(courseActions, dispatch), // => this.props.actions.courseActions
    // createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

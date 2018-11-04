import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CourseList from './CourseList';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state={
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  render(){
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  let course = {id:"", watchHref:"", title:"", authorId:"", length:"", category:""};
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " +author.lastName
    };
  });
  return{
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title} />

        <SelectInput
          name="authorId"
          label="Author"
          value={course.authorId}
          defaultOption="Select Author"
          options={allAuthors}
          onChange={onChange}
          error={errors.authorId} />

    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.string.isRequired,
  allAuthors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  loading: PropTypes.string,
  errors: PropTypes.array
};

export default CourseForm;

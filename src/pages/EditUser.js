import React, { useEffect, useState } from 'react';
import {
  Form,
  TextField,
  Select,
  SelectBox,
  Button,
} from 'choerodon-ui/pro';
import { getUsers, updateUser } from '../helper/userApi';
import { useParams } from 'react-router-dom';
import { showError, showSuccess } from '../helper/notify';

const { Option } = Select;

const EditUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const users = getUsers();
    const user = users.find((u) => u.id === parseInt(id));
    setFormData(user || null);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.forms['editForm'];
    const nameValue = form.name.value.trim();

    if (!nameValue) {
      showError('Name cannot be empty!');
      return;
    }

    const updated = {
      id: parseInt(id),
      name: nameValue,
      code: form.code?.value || '',
      sex: form.sex?.value || '',
      active: form.active?.checked || false,
    };

    updateUser(updated);
    showSuccess('User updated successfully');
    window.location.href = '/users';
  };

  if (!formData) return <p>Loading user...</p>;

  return (
    <Form
      id="editForm"
      style={{ width: '4rem' }}
      labelWidth="auto"
      onSubmit={handleSubmit}
    >
      <TextField name="name" label="Name" required defaultValue={formData.name} />
      <TextField name="code" label="Code" required defaultValue={formData.code} />
      <SelectBox name="sex" label="Sex" required defaultValue={formData.sex}>
        <Option value="Male">Male</Option>
        <Option value="Female">Female</Option>
      </SelectBox>
      <div>
        <Button type="submit" color="primary">Save</Button>
        <Button
          type="reset"
          style={{ marginLeft: 8 }}
          onClick={() => (window.location.href = '/users')}
          color="red"
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default EditUser;

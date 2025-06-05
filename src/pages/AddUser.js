import React from 'react';
import {
  Form,
  TextField,
  Select,
  SelectBox,
  Button,
} from 'choerodon-ui/pro';
import { getUsers, addUser } from '../helper/userApi';
import { showError, showSuccess } from '../helper/notify';

const { Option } = Select;

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.forms['addForm'];
    const nameValue = form.name.value.trim();

    if (!nameValue) {
      showError('Name cannot be empty!');
      return;
    }

    const users = getUsers();
    const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;

    const newUser = {
      id: newId,
      name: nameValue,
      code: form.code?.value || '',
      sex: form.sex?.value || '',
      active: form.active?.value === 'true', // value from radio button is string
    };

    addUser(newUser);
    showSuccess('User added successfully!');

    setTimeout(() => {
      window.location.href = '/users';
    }, 500);
  };

  return (
    <Form
      id="addForm"
      style={{ width: '4rem' }}
      labelWidth="auto"
      onSubmit={handleSubmit}
    >
      <TextField name="name" label="Name" required />
      <TextField name="code" label="Code" required />
      <SelectBox name="sex" label="Sex" required>
        <Option value="Male">Male</Option>
        <Option value="Female">Female</Option>
      </SelectBox>
      <SelectBox name="active" label="Status" required>
        <Option value="true">Active</Option>
        <Option value="false">Non-Active</Option>
      </SelectBox>
      <div>
        <Button type="submit" color="primary">Add</Button>
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

export default AddUser;

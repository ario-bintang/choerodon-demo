import React, { useEffect, useState } from 'react';
import {
  Form,
  TextField,
  Password,
  NumberField,
  EmailField,
  UrlField,
  DatePicker,
  Select,
  SelectBox,
  Button,
  Menu,
  Dropdown,
  Icon,
} from 'choerodon-ui/pro';
import { getUsers, updateUser } from '../helper/userApi';
import { useParams } from 'react-router-dom';

const { Option } = Select;

function passwordValidator(value, name, form) {
  if (value !== form.getField('password').getValue()) {
    return 'Passwords do not match';
  }
  return true;
}

function validationRenderer(error, props) {
  if (error.ruleName === 'valueMissing' && props.name === 'password') {
    return (
      <span style={{ color: 'blue' }}>
        {error.validationMessage}(Custom)
      </span>
    );
  }
}

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://choerodon.io/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://choerodon.com.cn/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-hand/choerodon-ui">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const dropdown = (
  <Dropdown overlay={menu}>
    <Button funcType="flat" size="small">
      Click me <Icon type="arrow_drop_down" />
    </Button>
  </Dropdown>
);

const EditUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);
  const phoneRef = React.useRef();

  useEffect(() => {
    const users = getUsers();
    const user = users.find((u) => u.id === parseInt(id));
    setFormData(user || null);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.forms['editForm'];
    const updated = {
      id: parseInt(id),
      name: form.name.value,
      code: form.code?.value || '',
      sex: form.sex?.value || '',
      active: form.active?.checked || false,
    };
    updateUser(updated);
    window.location.href = '/easy-table'; // go back manually
  };

  if (!formData) return <p>Loading user...</p>;

  return (
    <Form id="editForm" style={{ width: '4rem' }} labelWidth="auto" onSubmit={handleSubmit}>
      <TextField name="name" label="Name" required defaultValue={formData.name} />
      <TextField name="code" label="Code" required defaultValue={formData.code} />
      <SelectBox name="sex" label="Sex" required defaultValue={formData.sex}>
        <Option value="Male">Male</Option>
        <Option value="Female">Female</Option>
      </SelectBox>
      <Select name="language" label="Language" required defaultValue="en-us">
        <Option value="zh-cn">Simplified Chinese</Option>
        <Option value="en-us">English (US)</Option>
        <Option value="ja-jp">Japanese</Option>
      </Select>
      <EmailField name="email" label="Email" addonAfter={dropdown} />
      <UrlField name="homepage" label="Homepage" addonBefore="Http://" />
      <DatePicker name="birth" label="Birthday" />
      <div>
        <Button type="submit">Save</Button>
        <Button
          type="reset"
          style={{ marginLeft: 8 }}
          onClick={() => (window.location.href = '/easy-table')}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default EditUser;

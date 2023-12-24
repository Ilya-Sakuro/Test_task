import React, { useState } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { useHistory } from 'react-router-dom';

const EditProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState('/img/avatars/3551739.jpg');
  const history = useHistory();

  const avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';

  const onFinish = (values) => {
    const key = 'updatable';
    message.loading({ content: 'Updating...', key });
    setTimeout(() => {
      message.success({ content: 'Done!', key, duration: 2 });
      console.log(JSON.stringify(values, null, 2));
      setTimeout(() => {
        history.push(`${APP_PREFIX_PATH}/dashboards/clients/list`);
      }, 1000);
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onUploadAavater = (info) => {
    const key = 'updatable';
    if (info.file.status === 'uploading') {
      message.loading({ content: 'Uploading...', key, duration: 1000 });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (imageUrl) => setAvatarUrl(imageUrl));
      message.success({ content: 'Uploaded!', key, duration: 1.5 });
    } else if (info.file.status === 'error') {
      message.error({ content: 'Image upload failed. Please try again.', key, duration: 2 });
    }
  };

  const onRemoveAvater = () => {
    setAvatarUrl('');
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  return (
    <>
      <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
        <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
        <div className="ml-md-3 mt-md-0 mt-3">
          <Upload onChange={onUploadAavater} showUploadList={false} action={avatarEndpoint}>
            <Button type="primary">Change Avatar</Button>
          </Upload>
          <Button className="ml-2" onClick={onRemoveAvater}>
            Remove
          </Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form name="basicInformation" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Please enter a valid email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Date of Birth" name="dateOfBirth">
                    <DatePicker className="w-100" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phoneNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Address" name="address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Post code" name="postcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default EditProfile;

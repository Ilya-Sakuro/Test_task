import React, { useState, useEffect, useContext } from 'react';
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from 'components/shared-components/Loading';
import { ClientsContext } from 'contexts/ClientsContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const ClientsList = () => {
  const { users, setUsers, fetchUserData } = useContext(ClientsContext);
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((item) => item.id !== userId));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const showUserProfile = (userInfo) => {
    setUserProfileVisible(true);
    setSelectedUser(userInfo);
  };

  const closeUserProfile = () => {
    setUserProfileVisible(false);
    setSelectedUser(null);
  };

  const tableColumns = [
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <Link to={`${APP_PREFIX_PATH}/setting/clients/list/${record.name}`}>
            <AvatarStatus
              src={record.name && '/img/avatars/3551739.jpg'}
              name={record.name}
              subTitle={record.email}
            />
          </Link>
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      sorter: {
        compare: (a, b) => a.phone.length - b.phone.length,
      },
    },
    {
      title: 'User name',
      dataIndex: 'username',
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => {
                showUserProfile(elm);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteUser(elm.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];
  if (users.length === 0) {
    return <Loading align="" cover="" />;
  }
  return (
    <Card bodyStyle={{ padding: '0px' }}>
      <Table columns={tableColumns} dataSource={users} rowKey="id" />
      <UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile} />
    </Card>
  );
};

export default ClientsList;

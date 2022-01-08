import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDidMount } from 'hooooks';
import { menus } from '@/data/config';
import { Button, Toast, Modal, Input, Divider } from 'antd-mobile';
import { AddOutline, CloseOutline } from 'antd-mobile-icons';
import './index.less';

const Settings = () => {
  const History = useHistory();

  const [menuArr, setMenuArr] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const handleDeleteMenu = (index: number) => {
    const tempMenuArr: string[] = menuArr.concat([]);
    tempMenuArr.splice(index, 1);
    setMenuArr(tempMenuArr);
  };

  const handleAddMenu = () => {
    console.log(111);
    const tempMenuArr: string[] = menuArr.concat([]);
    console.log(222, menuArr, tempMenuArr);
    tempMenuArr.push(inputValue);
    console.log(333);
    setMenuArr(tempMenuArr);
    console.log(444);
    setVisible(false);
  };

  const handleConfirm = () => {
    localStorage.setItem('menus', JSON.stringify(menuArr));
    Toast.show({
      content: '修改成功',
      icon: 'success',
    });
  };

  const handelGoOrder = () => {
    History.push('/');
  };

  useDidMount(() => {
    const menuStorage: string[] = JSON.parse(
      localStorage.getItem('menus') || '[]',
    );
    setMenuArr(menuStorage.length ? menuStorage : menus);
  });

  return (
    <div className='settings-page'>
      <div className='menu-content'>
        <div
          className='menu-item button-add'
          onClick={() => {
            setVisible(true);
          }}
        >
          添加
          <AddOutline color='#999' fontSize='18' />
        </div>
        {menuArr.map((i, index) => {
          return (
            <div className='menu-item' key={index}>
              <span>{i}</span>
              <CloseOutline
                color='666'
                fontSize='18'
                onClick={() => {
                  handleDeleteMenu(index);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className='button-wrapper'>
        <Button color='primary' onClick={handleConfirm}>
          确认修改
        </Button>
        <Button color='primary' onClick={handelGoOrder}>
          返回点菜
        </Button>
      </div>
      <Modal
        visible={visible}
        showCloseButton={true}
        content={
          <Input
            placeholder='请输入喜欢的菜品'
            type='text'
            value={inputValue}
            clearable
            onChange={(val) => {
              setInputValue(val);
            }}
          />
        }
        bodyStyle={{
          padding: '64px 16px 16px 16px',
        }}
        onClose={() => {
          setInputValue('');
          setVisible(false);
        }}
        actions={[
          {
            key: 'confirm',
            primary: true,
            text: '确认',
            onClick: handleAddMenu,
          },
        ]}
      />
    </div>
  );
};

export default Settings;

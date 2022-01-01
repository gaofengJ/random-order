import React, { useState } from 'react';
import { useDidMount } from 'hooooks';
import { menus } from '@/data/config';
import { Button } from 'antd-mobile';
import './index.less';

let timer: any = null;

const Order = () => {
  const [menuArr, setMenuArr] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [isOrdering, setIsOrdering] = useState<boolean>(false);

  const handleOrder = () => {
    if (isOrdering) {
      console.log('isOrdering', isOrdering);
      clearInterval(timer);
      setIsOrdering(false);
      return;
    }
    setIsOrdering(true);
    const len = menuArr.length;
    if (!len) return;
    timer = setInterval(() => {
      const num = Math.floor(Math.random() * (len + 1));
      setIndex(num);
    }, 50);
  };

  useDidMount(() => {
    const menuStorage: string[] = JSON.parse(
      localStorage.getItem('menus') || '[]',
    );
    setMenuArr(menuStorage.length ? menuStorage : menus);
  });

  return (
    <div className='order-page'>
      <div>还在犹豫吗？马上随机点餐，拯救选择困难症~</div>
      <div className='menu-content'>{menuArr[index]}</div>
      <div className='button-wrapper'>
        <Button color='primary' onClick={handleOrder}>
          {isOrdering ? '停止点菜' : '开始点菜'}
        </Button>
        <Button color='primary'>修改菜单</Button>
      </div>
    </div>
  );
};

export default Order;

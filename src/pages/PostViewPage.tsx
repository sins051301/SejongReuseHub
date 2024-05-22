import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PostViewPage.module.scss';
import BoardList from '../components/board/BoardList';

function PostViewPage() {
  return (
    <div className={styles['Post-wrapper']}>
      <BoardList />
    </div>
  );
}

export default PostViewPage;

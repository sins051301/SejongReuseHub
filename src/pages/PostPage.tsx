import MapModal from 'components/mapModal/MapModal';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './PostPage.module.scss';
import SelectLocation from '../components/selectLocation/SelectLocation';

interface FormData {
  title: string;
  content: string;
  author: string;
  password: string;
  category: string;
  latitude: number;
  longitude: number;
}

export default function PostPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.target as HTMLFormElement);
    const categoryData = fd.get('category') ?? '';
    const data: FormData = {
      title: fd.get('title') as string,
      content: fd.get('content') as string,
      author: fd.get('author') as string,
      password: fd.get('password') as string,
      category: categoryData as string,
      latitude: location ? location.lat : 0,
      longitude: location ? location.lng : 0,
    };

    console.log(data);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <form className={styles.postForm} onSubmit={handleSubmit}>
          <label
            className={`${styles.label} ${styles.writer}`}
            htmlFor="author"
          >
            <div className={styles.leftBox}>작성자</div>
            <div className={styles.rightBox}>
              <input
                type="text"
                id="author"
                name="author"
                className={styles.formWriter}
              />
            </div>
          </label>
          <label
            className={`${styles.label} ${styles.category}`}
            htmlFor="category"
          >
            <div className={styles.leftBox}>카테고리</div>
            <div className={styles.rightBox}>
              <select
                id="category"
                name="category"
                className={styles.formCategory}
              >
                <option value="share">나눔</option>
                <option value="exchange">교환</option>
                <option value="sale">판매</option>
              </select>
            </div>
          </label>
          <label className={`${styles.label} ${styles.title}`} htmlFor="title">
            <div className={styles.leftBox}>제목</div>
            <div className={styles.rightBox}>
              <input
                type="text"
                id="title"
                name="title"
                className={styles.formTitle}
              />
            </div>
          </label>
          <label
            className={`${styles.label} ${styles.content}`}
            htmlFor="content"
          >
            <div className={styles.leftBox}>내용</div>
            <div className={styles.rightBox}>
              <textarea
                id="content"
                name="content"
                className={styles.formContent}
              />
            </div>
          </label>
          <label className={`${styles.label} ${styles.pwd}`} htmlFor="password">
            <div className={styles.leftBox}>비밀번호:</div>
            <div className={styles.rightBox}>
              <input
                type="password"
                id="password"
                name="password"
                className={styles.formPWD}
              />
            </div>
          </label>
          <div className={styles.label}>
            <div className={styles.leftBox}>위치 설정:</div>
            <div className={styles.rightBox}>
              <div className={styles.positionBox}>
                <div className={styles.positionText}>
                  <div className={styles.textWidth}>
                    위도 :
                    <span>{location ? location.lat.toFixed(4) : null}</span>
                  </div>
                  <div className={styles.textWidth}>
                    경도 :
                    <span>{location ? location.lng.toFixed(4) : null}</span>
                  </div>
                </div>
                <button
                  className={styles.mapModal}
                  type="button"
                  onClick={openModal}
                >
                  {null}
                </button>
              </div>
            </div>
          </div>
          {isOpen ? (
            <MapModal
              isOpen={isOpen}
              closeModal={closeModal}
              lat={location ? location.lat : 0}
              lon={location ? location.lng : 0}
            >
              <SelectLocation setLocation={setLocation} />
            </MapModal>
          ) : (
            ''
          )}
          <input type="submit" value="제출" className={styles.form__submit} />{' '}
        </form>
      </div>
    </div>
  );
}

import { Button } from '@mui/material';
import React, { useState, ChangeEvent } from 'react';
import styles from './ImageUploader.module.scss';

interface UploaderProps {
  PreviewURL: any;
  setImage: (image: { image_file: any; preview_URL: any }) => void;
}

function ImageUploader({ PreviewURL, setImage }: UploaderProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  let inputRef: any;

  const saveImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      fileReader.readAsDataURL(file);
    }
    fileReader.onload = () => {
      setImage({
        image_file: e.target.files ? e.target.files[0] : null,
        preview_URL: fileReader.result,
      });
    };
  };

  const getDisplayFileName = (name: string) => {
    if (name.length > 15) {
      return `${name.substring(0, 10)}...`;
    }
    return name;
  };

  return (
    <div className={styles['uploader-wrapper']}>
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        ref={(refParam: any) => {
          inputRef = refParam;
        }}
        style={{ display: 'none' }}
      />
      <div className={styles['img-wrapper']}>
        {/* <img src={PreviewURL} alt="Preview" /> */}
      </div>
      <div className={styles['upload-button']}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => inputRef.click()}
        >
          사진 고르기
        </Button>
      </div>
      {fileName && (
        <div className={styles['file-name']}>
          {getDisplayFileName(fileName)}
        </div>
      )}
    </div>
  );
}

export default ImageUploader;

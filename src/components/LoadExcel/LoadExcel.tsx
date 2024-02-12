
import React, { useRef } from 'react';
import styles from './LoadExcel.module.css'

const LoadExcel: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files || [];
    handleFiles(files as FileList);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files as FileList);
  };

  const handleFiles = (files: FileList) => {
    if (files.length > 0) {
      const file = files[0];
      if (
        file.type === 'application/vnd.ms-excel' ||
        file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) {
        console.log('Файл успешно загружен:', file.name);
      } else {
        alert('Пожалуйста, загрузите файл в формате Excel (.xls, .xlsx)');
      }
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={styles.root}
    >
      <input
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <p>Пожалуйста, перетащите файл сюда или нажмите для выбора файла</p>
      <button className={styles.excel__btn} onClick={() => fileInputRef.current?.click()}>Выбрать файл</button>
    </div>
  );
};

export default LoadExcel;
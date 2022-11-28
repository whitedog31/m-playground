import { useState, useRef, useEffect } from 'react';

export function useHandleUpload() {
  const [currentFile, setCurrentFile] = useState<any>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputDirRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const handleDirUploadClick = () => {
    if (inputRef.current) {
      inputDirRef.current?.click();
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.target;
    const reader = new FileReader();
    if (files) {
      reader.onload = () => {
        setCurrentFile(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
      e.currentTarget.value = '';
    }
  };

  useEffect(() => {
    if (inputDirRef.current !== null) {
      inputDirRef.current.setAttribute('directory', '');
      inputDirRef.current.setAttribute('webkitdirectory', '');
    }
  }, [inputDirRef]);

  return {
    inputRef,
    inputDirRef,
    currentFile,
    handleUploadClick,
    handleDirUploadClick,
    handleChangeFile,
  };
}

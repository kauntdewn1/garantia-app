import React, { useState } from 'react';
import { uploadFile } from '../utils/storage';
import toast from 'react-hot-toast';

function ImageUpload({ onUploadComplete }) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadFile(file);
      onUploadComplete(url);
      toast.success('Upload realizado com sucesso!');
    } catch (error) {
      // Error is already handled in uploadFile
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/gif,application/pdf"
        disabled={uploading}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-primary file:text-white
          hover:file:bg-secondary
          disabled:opacity-50"
      />
      {uploading && (
        <div className="mt-2 text-sm text-gray-500">
          Enviando arquivo...
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
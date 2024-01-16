// GlobalImageUploader.js
import { ref } from 'vue';

const useImageUploader = () => {
    const uploadedImage = ref(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = () => {
            uploadedImage.value = reader.result;
        };

        reader.readAsDataURL(file);
        } else {
        console.error('Invalid file format. Please upload an image.');
        }
    };

    const removeImage = ()=>{
        uploadedImage.value = null ;
    }

  return {
    uploadedImage,
    handleImageUpload,
    removeImage
  };
};

export default useImageUploader;

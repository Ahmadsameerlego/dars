// // GlobalImageUploader.js
// import { ref } from 'vue';
// // import pdfjs from 'pdfjs-dist';

// const useImageUploader = () => {
//   const uploadedImages = ref([]);

//   const handleImageUpload = async (event) => {
//     const files = event.target.files;

//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];

//       if (file.type === 'application/pdf') {
//         // If the file is a PDF, convert it to an image using pdfjs
//         const pdfData = await pdfjs.getDocument(URL.createObjectURL(file));
//         const page = await pdfData.getPage(1); // Fetch the first page of the PDF

//         const canvas = document.createElement('canvas');
//         const context = canvas.getContext('2d');
//         const viewport = page.getViewport({ scale: 1 });

//         canvas.width = viewport.width;
//         canvas.height = viewport.height;

//         const renderContext = {
//           canvasContext: context,
//           viewport: viewport,
//         };

//         await page.render(renderContext);
        
//         // Convert the canvas content to a data URL
//         const dataURL = canvas.toDataURL('image/png');
        
//         uploadedImages.value.push({
//           file: file,
//           dataURL: dataURL,
//         });
//       } else if (file.type.startsWith('image/')) {
//         // If the file is an image, handle it as usual
//         const reader = new FileReader();

//         reader.onload = () => {
//           uploadedImages.value.push({
//             file: file,
//             dataURL: reader.result,
//           });
//         };

//         reader.readAsDataURL(file);
//       } else {
//         console.error('Invalid file format. Please upload an image or a PDF.');
//       }
//     }
//   };

//   const removeImage = (index) => {
//     uploadedImages.value.splice(index, 1);
//   };

//   return {
//     uploadedImages,
//     handleImageUpload,
//     removeImage,

    
//   };
// };

// export default useImageMultiUploader;






export const fileUpload = async(file) => {
const url = 'https://api.cloudinary.com/v1_1/dflxhnzgs/upload'
const formData = new FormData();
formData.append('upload_preset','ensayo')   
formData.append('file',file)   
   const res= await fetch(url, {
          method : 'POST',
          body: formData,
            
        })  
        const urlCloud = await res.json();
        return urlCloud.secure_url;
}




// upload-preset, ensayo


// https://api.cloudinary.com/v1_1/dflxhnzgs/image/upload
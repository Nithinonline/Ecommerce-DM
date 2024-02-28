import React, { useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    Typography,
    Paper,
    Container,
    Input,
} from '@mui/material';
import storage from "../../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';


const EditProduct = () => {


    const [formData, setFormData] = useState({
        id:'',
        category: '',
        name: '',
        description: '',
        image_Url: "",
        price: '',
    });
    const [image_Url, setImage_Url] = useState('')
    const [uploaded, setUploaded] = useState('')

    console.log(formData)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        onEditProduct(formData);
        setFormData({
            id:'',
            category: '',
            name: '',
            description: '',
            image_Url: '',
            price: '',
        });
    };

 const onEditProduct=async(formdata)=>{
    axios.patch(`http://localhost:5500/api/product/update/${formdata.id}/65dde1ca63e78ffd6191eece`,{
        category:formdata.category,
        name:formdata.name,
        description:formData.description,
        image_Url:formdata.image_Url,
        price:formdata.price
    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
 }

    console.log(uploaded)


    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name
            const storageRef = ref(storage, `items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setFormData((prev) => {
                            return { ...prev, image_Url: downloadURL };
                        });
                        setUploaded((prev) => prev + 1)
                        console.log('File available at', downloadURL);
                    });
                }
            );



        });
    };


    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: image_Url, label: "img" },

        ])
    }




    return (
        <Container component="main" maxWidth="sm" sx={{ marginTop: "10vh", marginBottom: "10vh" }}>
            <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h2" variant="h4">
                    Edit Product
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 1 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Product id"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <label htmlFor="img1" >

                                <input type="file" name="image_Url" id="img1" style={{ display: 'flex' }}
                                    onChange={(e) => setImage_Url(e.target.files[0])}
                                />
                                <img src="https://i.postimg.cc/bNSZ63VV/image-add-2.png"
                                    className='100 me-5 mb-3' alt=""
                                    style={{ height: '150px' }} />

                            </label>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    {!uploaded ? (
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleUpload}>
                            Upload Edit
                        </Button>
                    ) : (

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
                            Complete Edit
                        </Button>
                    )}
                </form>
            </Paper>
        </Container>
    );
};

export default EditProduct;

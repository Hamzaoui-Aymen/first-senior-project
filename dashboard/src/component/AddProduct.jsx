import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import axios from 'axios';



const AddProduct=({open,handleClickOpen,handleClose})=>{
const [data,setData]=useState([])
 const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const[price,setPrice]=useState('')
  const [stock,setStock]=useState('')
  const [category,setCategory]=useState('')
  const [picture ,setPicture]=useState()
  const addProd = (picture,category, stock, price,description, name) => {
    axios
      .post("http://localhost:4000/apii/post", {
        picture:picture,
        stock: stock,
        category: category,
        name: name,
        description:description,
        price: price,
      })
      .then((res) =>setData(res.data) )
      .catch((err) => console.log(err));
  };
  const handlAdd=()=>{
    addProd(picture,category, stock, price,description, name)
  }
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setPicture(file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "product");
    
    try {
      const response = await axios.post(
      
        "https://api.cloudinary.com/v1_1/dzonlv8oi/image/upload",

        formData
      );

      console.log("Image uploaded successfully:", response.data);
      setPicture(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <React.Fragment>
   
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
    
            handleClose();
          },
        }}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add Product 
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setName(e.target.value)}}
            value={name}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="desription"
            label="description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setDescription(e.target.value)}}
            value={description}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="price"
            label="price"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e)=>{setPrice(e.target.value)}}
            value={price}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="stock"
            label="stock"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setStock(e.target.value)}}
            value={stock}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="category"
            label="category"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setCategory(e.target.value)}}
            value={category}
          />
          <div  style={{alignItems:"flex-end"}}>
  <Grid
container
spacing={0}

alignItems="center"
justifyContent="center"
sx={{ minHeight: '100vh' }}
>
          <Box
  component="img"
  
  sx={{
   
    height: 200,
    width: 250,
    maxHeight: { xs: 200, md: 167 },
    maxWidth: { xs: 250, md: 200},
    
    
    borderRadius: '50%',
     }}
  alt="The product from the offer."
  src={picture}
/>
         <input type="file" 
        
         onChange={(e) => {handleImageUpload(e)}} />
          
  </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handlAdd}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default AddProduct
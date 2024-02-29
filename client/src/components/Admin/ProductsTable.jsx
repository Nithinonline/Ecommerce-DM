import { useEffect,useState } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';




const ProductTable = () => {

    const [products, setProducts] = useState([])



    const getProducts = async () => {
        await axios
            .get("http://localhost:5500/api/product/allProducts")
            .then((res) => {
                setProducts(res.data.Products)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getProducts()
    }, [products])


    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5500/api/product/delete/${id}/65dde1ca63e78ffd6191eece`)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>console.log(err))
    }
    

  return (
    <>

    {/*Table*/}
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell>{product._id}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>
                <Avatar alt={product.name} src={product.image_Url} />
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
                   <TableCell>
                    <div onClick={()=>handleDelete(product._id)}>
                    <DeleteIcon/>
                    </div>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>

  );
};

export default ProductTable;

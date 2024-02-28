import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';




const columns = [
    { id: 'SlNo', label: 'SlNo', minWidth: 100 },
    { id: 'Name', label: 'Name', minWidth: 80 },
    {
        id: 'Description',
        label: 'Description',
        minWidth: 80,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'Price',
        label: '$Price',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },

];

function createData(SlNo, Name, Description, Price) {
    return { SlNo, Name, Description, Price };
}

const rows = [
    createData('1', 'Shirt', "zwexctryubio", 256),
    createData('2', 'CN', "jnc hubwubfuwd", 290),
    createData('3', 'IT', "vsuvqdiubqd", 1990),
    createData(' 4', 'Shirt', "hbwf8ysfbiw", 152),
    createData('5', 'CA', "hjwfbuew", 560),
    createData('6', 'AU', "dwdbyuw", 500),
    createData('7', 'DE', 'dww h', 1500),
    createData('8', 'Shirt', "mcneiuc", 499),
    createData('9', 'MX', "hbwu2idf", 1972550),
    createData('10', 'JP', "ruewubfw", 1499),
    createData('11', 'FR', "qhdiqvyihw", 1010),
    createData('12', 'GB', "wugidbw", 2000),
    createData('13', 'RU', "whrebf7duh", 1299),
    createData('14', 'NG', " ewhfuknkvw", 1999),
    createData('15', 'BR', "bwgikbd qkc", 1233),
];



const style = {
    width: '50vh', // Adjust the width as needed
    maxWidth: 300, // Set a maximum width if necessary
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function AddProduct() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

console.log(products);
    return (
        <>


           
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add a new product
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <TextField
                                label="Product Name"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                }}
                            />
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Product Category</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                                    label="Specifications"
                                />
                            </FormControl>


                        </div>
                        <div>

                            {/* <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Product Image</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <img
                                                src="path_to_your_image.jpg" // Replace with the path to your image
                                                alt="Product Image"
                                                style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%' }}
                                            />
                                        </InputAdornment>
                                    }
                                    label="Product Image"
                                />
                            </FormControl> */}


                            <FormControl fullWidth sx={{ m: 1 }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                                    label="Specifications"
                                />
                            </FormControl>
                        </div>
                        <div>

                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Product Price</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                            </FormControl>
                            <label htmlFor="img1" >

                                <input type="file" name="" id="img1" style={{ display: 'none' }} />
                                <img src="https://i.postimg.cc/bNSZ63VV/image-add-2.png"
                                    className='100 me-5 mb-3' alt=""
                                    style={{ height: '250px' }} />

                            </label>
                        </div>
                        <Button
                            color='success'
                            startIcon={<AddIcon />}
                            variant="contained"
                            sx={{ marginLeft: '30px' }} // Adjust the value as needed
                        >
                            Add Product
                        </Button>
                    </Typography>
                </Box>
            </Modal>

            <div sx={{ textAlign: 'center', margin: '5px 0' }}>
                <h4 style={{ textAlign: 'center', margin: '0', fontWeight: 'bold' }}>PRODUCT LIST</h4>
            </div>


            <Paper sx={{ width: '100%', overflow: 'hidden', margin: '5px 0' }} className='border'>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">

                        <TableHead>
                            <TableRow>

                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default AddProduct;

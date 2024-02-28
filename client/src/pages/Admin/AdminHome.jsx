import React from 'react'
import AdminHeader from '../../components/Admin/AdminHeader'
import ProductTable from '../../components/Admin/ProductsTable'
import AddProductForm from '../../components/Admin/AddProductForm'
import EditProduct from '../../components/Admin/EditProduct'

const AdminHome = () => {
  return (
    <div>
        <AdminHeader/>
        <ProductTable/>
        <div style={{
          display:"flex",
          flexWrap:"wrap"
        }}>
        <AddProductForm/>
        <EditProduct/>
        </div>
       
    </div>
  )
}

export default AdminHome
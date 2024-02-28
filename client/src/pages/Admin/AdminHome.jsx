import React from 'react'
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminDashboard from '../../components/Admin/AdminDashboard'
import ProductTable from '../../components/Admin/ProductsTable'
import AddProductForm from '../../components/Admin/AddProductForm'

const AdminHome = () => {
  return (
    <div>
        <AdminHeader/>
        <ProductTable/>
        <AddProductForm/>
    </div>
  )
}

export default AdminHome
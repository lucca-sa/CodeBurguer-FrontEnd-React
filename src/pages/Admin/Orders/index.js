import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import ApiService from '../../../services/apiService'
import Row from './row'
import { Container } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    setRows(orders.map(ord => createData(ord)))
  }, [orders])

  useEffect(() => {
    async function loadOrders() {
      const { data } = await ApiService.get('orders')
      setOrders(data)
    }
    loadOrders()
  }, [])

  function createData(order) {
    return {
      name: order.user.name,
      id: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products
    }
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Preço Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders

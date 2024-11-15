'use client'

import { Input } from '@nextui-org/input'
import {
  Button,
  Pagination,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'

import { ShurikenIcon } from '@/core'
import { MdEdit, MdOutlineAdd } from 'react-icons/md'
import { OrderStatus } from '../../components'
import { useHomeOrderModel } from './home_order_model'

export const HomeOrderView = (
  methods: ReturnType<typeof useHomeOrderModel>
) => {
  const {
    ordersData,
    ordersLoading,
    currentPage,
    totalPages,
    orderType,
    setCurrentPage,
    setOrderType
  } = methods

  return (
    <div className="relative flex size-full flex-col">
      <h1>Orders</h1>
      <p className="txt-medium mt-4">
        A list of all the orders in your account.
      </p>

      {/* <Example /> */}

      <div className="mt-4 flex justify-between">
        <Input className="max-w-xs" placeholder="Search by name" />

        <div className="flex w-full justify-end gap-4">
          <Select
            items={status}
            className="max-w-60 items-center"
            defaultSelectedKeys={['All']}
            label="Status:"
            labelPlacement="outside-left"
          >
            {(item) => <SelectItem key={item.name}>{item.name}</SelectItem>}
          </Select>
          <Select
            className="max-w-60 items-center"
            defaultSelectedKeys={['MakeReady']}
            label="Type:"
            labelPlacement="outside-left"
            selectedKeys={[orderType]}
            onSelectionChange={(value) => setOrderType(value.currentKey || '')}
          >
            <SelectItem key={'MakeReady'}>Make ready</SelectItem>
            <SelectItem key={'Qos'}>Qos</SelectItem>
            <SelectItem key={'Map'}>Map</SelectItem>
          </Select>
          <Button color="primary">
            <MdOutlineAdd size={20} />
            Add new order
          </Button>
          {/* <Button color="danger">
            <MdDelete size={20} />
            Delete
          </Button> */}
        </div>
      </div>

      <p className="txt-regular my-4">
        Total Users: {ordersData?.orders.length || 0}
      </p>

      <Table
        className="h-full"
        selectionMode="multiple"
        color="primary"
        isStriped
      >
        <TableHeader>
          {headers.map((header) => (
            <TableColumn key={header.id}>{header.name}</TableColumn>
          ))}
        </TableHeader>

        <TableBody
          items={ordersData?.orders || []}
          isLoading={ordersLoading}
          loadingContent={
            <ShurikenIcon className="fixed top-1/2 animate-spin" />
          }
          emptyContent={'No rows to display.'}
        >
          {(item) => (
            <TableRow key={item.code}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.createdAtFormatted}</TableCell>
              <TableCell>{item.openedBy.fullname}</TableCell>
              <TableCell>{item.closedBy.fullname}</TableCell>
              <TableCell>
                <OrderStatus status={item.status} />
              </TableCell>
              <TableCell className="flex gap-4">
                <Button size="sm" variant="flat" color="primary">
                  <MdEdit size={20} /> Edit
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="mt-2 flex w-full items-center justify-between">
        <p className="txt-regular my-4">
          0 of {ordersData?.orders.length || 0} selected
        </p>

        <Pagination
          initialPage={1}
          total={totalPages}
          page={currentPage}
          onChange={setCurrentPage}
        />

        <div>
          <Button
            className="mr-4"
            isDisabled={currentPage <= 1}
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
            }
          >
            Previous
          </Button>
          <Button
            isDisabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage(
                currentPage < totalPages ? currentPage + 1 : currentPage
              )
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

const headers = [
  { id: 1, name: 'ORDER ID' },
  { id: 2, name: 'TITLE' },
  { id: 3, name: 'CREATED AT' },
  { id: 4, name: 'CREATED BY' },
  { id: 5, name: 'CLOSED BY' },
  { id: 6, name: 'STATUS' },
  { id: 7, name: 'ACTIONS' }
]

const status = [
  { id: 1, name: 'Open' },
  { id: 2, name: 'Progress' },
  { id: 3, name: 'Done' },
  { id: 4, name: 'Stopped' },
  { id: 5, name: 'Pending' },
  { id: 6, name: 'Suspended' },
  { id: 7, name: 'Canceled' },
  { id: 8, name: 'All' }
]

const stats = [
  { name: 'Number of deploys', value: '405' },
  { name: 'Average deploy time', value: '3.65', unit: 'mins' },
  { name: 'Number of servers', value: '3' },
  { name: 'Success rate', value: '98.5%' }
]

export default function Example() {
  return (
    <div className="absolute right-0 top-0 z-10 bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-gray-900 px-4 py-1 sm:px-6 lg:px-8"
            >
              <p className="text-sm/6 font-medium text-gray-400">{stat.name}</p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
                {stat.unit ? (
                  <span className="text-sm text-gray-400">{stat.unit}</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

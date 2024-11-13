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
import { faker } from '@faker-js/faker'
import { MdOutlineAdd } from 'react-icons/md'
import { OrderStatus } from '../../components'

export const HomePage = () => {
  return (
    <div className="relative flex size-full flex-col">
      <h1>Orders</h1>
      <p className="txt-medium mt-4">
        A list of all the orders in your account.
      </p>

      <div className="mt-4 flex justify-between">
        <Input className="max-w-xs" placeholder="Search by name" />

        <div className="flex w-full justify-end gap-4">
          <Select className="max-w-40" defaultSelectedKeys="all">
            <SelectItem key={'status'}>Status</SelectItem>
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

      <p className="txt-regular my-4">Total Users: {items.length}</p>

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
          items={items || []}
          //   isLoading={isLoading}
          loadingContent={
            <ShurikenIcon className="fixed top-1/2 animate-spin" />
          }
          emptyContent={'No rows to display.'}
        >
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.orderId}</TableCell>
              <TableCell>{item.number}</TableCell>
              <TableCell>{item.createdAt.toLocaleDateString()}</TableCell>
              <TableCell>{item.createdBy}</TableCell>
              <TableCell>{item.assignedTo}</TableCell>
              <TableCell>
                <OrderStatus status={item.status} />
              </TableCell>
              {/* <TableCell className="flex gap-4">
                <Button size="sm" variant="flat" color="primary">
                  <MdEdit size={20} /> Edit
                </Button>
              </TableCell> */}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="mt-2 flex w-full items-center justify-between">
        <p className="txt-regular my-4">0 of {items.length} selected</p>

        <Pagination total={10} initialPage={1} />

        <div>
          <Button className="mr-4">Previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  )
}

const headers = [
  { id: 1, name: 'ORDER ID' },
  { id: 2, name: 'NUMBER' },
  { id: 3, name: 'CREATED AT' },
  { id: 4, name: 'CREATED BY' },
  { id: 5, name: 'ASSIGNED TO' },
  { id: 6, name: 'STATUS' }
]

const items = [
  {
    id: faker.number.int(),
    orderId: faker.number.int(),
    number: faker.number.int(),
    createdAt: faker.date.anytime(),
    createdBy: faker.name.fullName(),
    assignedTo: faker.name.fullName(),
    status: 'Open'
  },
  {
    id: faker.number.int(),
    orderId: faker.number.int(),
    number: faker.number.int(),
    createdAt: faker.date.anytime(),
    createdBy: faker.name.fullName(),
    assignedTo: faker.name.fullName(),
    status: 'Progress'
  },
  {
    id: faker.number.int(),
    orderId: faker.number.int(),
    number: faker.number.int(),
    createdAt: faker.date.anytime(),
    createdBy: faker.name.fullName(),
    assignedTo: faker.name.fullName(),
    status: 'Done'
  },
  {
    id: faker.number.int(),
    orderId: faker.number.int(),
    number: faker.number.int(),
    createdAt: faker.date.anytime(),
    createdBy: faker.name.fullName(),
    assignedTo: faker.name.fullName(),
    status: 'stopped'
  },
  {
    id: faker.number.int(),
    orderId: faker.number.int(),
    number: faker.number.int(),
    createdAt: faker.date.anytime(),
    createdBy: faker.name.fullName(),
    assignedTo: faker.name.fullName(),
    status: 'pending'
  },
  {
    id: faker.number.int(),
    orderId: faker.number.int(),
    number: faker.number.int(),
    createdAt: faker.date.anytime(),
    createdBy: faker.name.fullName(),
    assignedTo: faker.name.fullName(),
    status: 'suspended'
  },
  {
    id: faker.number.int(),
    orderId: faker.number.int(),
    number: faker.number.int(),
    createdAt: faker.date.anytime(),
    createdBy: faker.name.fullName(),
    assignedTo: faker.name.fullName(),
    status: 'canceled'
  }
]

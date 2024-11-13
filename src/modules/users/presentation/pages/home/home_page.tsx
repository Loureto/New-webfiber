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
import { useHomeModel } from './home_model'
import { UserStatus, UserStatusProps } from '../../components'
import { MdDelete, MdEdit, MdOutlineAdd } from 'react-icons/md'

interface HomePageProps {
  methods: ReturnType<typeof useHomeModel>
}

export const HomePage = ({ methods }: HomePageProps) => {
  const { data, isLoading } = methods

  return (
    <div className="relative flex size-full flex-col">
      <h1>Users</h1>
      <p className="txt-medium mt-4">Registred users info and status</p>

      <div className="mt-4 flex justify-between">
        <Input className="max-w-xs" placeholder="Search by name" />

        <div className="flex w-full justify-end gap-4">
          <Select className="max-w-40" defaultSelectedKeys="all">
            <SelectItem key={'status'}>Status</SelectItem>
          </Select>
          <Button color="primary">
            <MdOutlineAdd size={20} />
            Add new
          </Button>
          <Button color="danger">
            <MdDelete size={20} />
            Delete
          </Button>
        </div>
      </div>

      <p className="txt-regular my-4">Total Users: {data?.user.length}</p>

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
          items={data?.user || []}
          isLoading={isLoading}
          loadingContent={
            <ShurikenIcon className="fixed top-1/2 animate-spin" />
          }
          emptyContent={'No rows to display.'}
        >
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fullname}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>
                <UserStatus status={item.status as UserStatusProps['status']} />
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
        <p className="txt-regular my-4">0 of {data?.user.length} selected</p>

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
  { id: 1, name: 'NAME' },
  { id: 2, name: 'USERNAME' },
  { id: 3, name: 'PHONE NUMBER' },
  { id: 4, name: 'ROLE' },
  { id: 5, name: 'STATUS' },
  { id: 6, name: 'ACTIONS' }
]

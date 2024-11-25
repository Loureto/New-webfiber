'use client'

import { Input } from '@nextui-org/input'
import {
  Button,
  Pagination,
  Select,
  SelectItem,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure
} from '@nextui-org/react'

import { ShurikenIcon } from '@/core'
import { MdDelete, MdEdit, MdOutlineAdd } from 'react-icons/md'
import { UserStatus, UserStatusProps } from '../../components'
import { CreateUserViewModel } from '../createUser'
import { useHomeUserModel } from './home_user_model'

interface HomePageProps {
  methods: ReturnType<typeof useHomeUserModel>
}

export const HomeUserView = ({ methods }: HomePageProps) => {
  const { userList, isLoading, currentPage, totalPages, setCurrentPage } =
    methods

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  return (
    <>
      <div className="relative flex size-full flex-col">
        <h1>Users</h1>
        <p className="txt-medium mt-4">Registred users info and status</p>

        <div className="mt-4 flex justify-between">
          <Input className="max-w-xs" placeholder="Search by name" />

          <div className="flex w-full justify-end gap-4">
            <Select className="max-w-40" defaultSelectedKeys="all">
              <SelectItem key={'status'}>Status</SelectItem>
            </Select>
            <Button color="primary" onClick={onOpen}>
              <MdOutlineAdd size={20} />
              Add new
            </Button>
            <Button color="danger">
              <MdDelete size={20} />
              Delete
            </Button>
          </div>
        </div>

        <p className="txt-regular my-4">
          Total Users: {userList?.data?.length}
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
            items={userList?.data || []}
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
                  <UserStatus
                    status={item.status as UserStatusProps['status']}
                  />
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
            0 of {userList?.data?.length} selected
          </p>

          {totalPages === 0 && isLoading && (
            <Skeleton className="h-8 w-32 rounded-md" />
          )}
          {!(totalPages === 0 && isLoading) && (
            <Pagination
              initialPage={1}
              page={currentPage}
              total={totalPages}
              onChange={setCurrentPage}
            />
          )}

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

      <CreateUserViewModel
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </>
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

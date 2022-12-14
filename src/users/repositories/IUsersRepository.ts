import { Role } from '@/roles/entities/Role'
import { User } from '../entities/User'

export interface CreateUserDTO {
  name: string
  email: string
  password: string
  isAdmin: boolean
  role: Role
}

export interface UsersPaginateParams {
  page: number
  skip: number
  take: number
}

export interface UsersPaginateProperties {
  per_page: number
  total: number
  current_page: number
  data: User[]
}

export interface IUsersRepository {
  create({ name, email, password, isAdmin, role }: CreateUserDTO): Promise<User>
  update(user: User): Promise<User>
  delete(user: User): Promise<void>
  findByName(name: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  findAll({ page, skip, take }: UsersPaginateParams): Promise<UsersPaginateProperties>
}

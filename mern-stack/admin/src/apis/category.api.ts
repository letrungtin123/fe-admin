import { TCategory } from '@/types/category.type'
import { TResponseNoPagination } from '@/types/common.type'
import api from './base-url.api'

export const getCategories = async (token: string, query?: string): Promise<TResponseNoPagination<TCategory>> => {
  const response = await api.get<TResponseNoPagination<TCategory>>(`/categories${query ? query : ''}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

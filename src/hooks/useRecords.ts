import {useEffect, useState} from 'react'
import useUpdate from './useUpdate'

export type TRecord = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string
}

export const useRecords = () => {
  const [records, setRecords] = useState<TRecord[]>([])

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  }, [])
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records))
  }, [records])

  const addRecord = (record: TRecord) => {
    setRecords([...records, record])
  }

  return {records, addRecord}
}

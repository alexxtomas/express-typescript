import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'

import diaryData from './diaries.json'
// Esto es una asercion de datos
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (typeof entry !== 'undefined') {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiary: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry: DiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiary
  }

  diaries.push(newDiaryEntry)
  return newDiaryEntry
}

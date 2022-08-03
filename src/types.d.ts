import { Weather, Visibility } from './enums'
// export type Weather = 'sunny' |'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' |'good' | 'ok' | 'poor'
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Con el pick elegimos que es lo que queremos importar de la interfaz de DiaryEntry el comment no nos lo traera
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' |'date'|'weather'|'visibility'>

// Con el omit le decimos que es lo que no queremos importar de la interfaz DiaryEntry en este caso el comment
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

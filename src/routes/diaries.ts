import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.json(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diaryEntry = diaryServices.findById(+req.params.id)

  if (typeof diaryEntry === 'undefined') res.status(404).json('This id does not belong to any diary entry')

  res.json(diaryEntry)
})

router.post('/', (req, res) => {
  try {
    // const { date, weather, visibility, comment } = req.body
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router

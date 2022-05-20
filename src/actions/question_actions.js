import {createAction} from '@reduxjs/toolkit'

const recieveQuestions = createAction('RECIEVE_QUESTIONS')
const revieveQuestion = createAction('RECIEVE_QUESTION')

export const fetchQuestions = () => async dispatch => {
 try {
  dispatch()
 } catch (error) {
  console.log(`${error} - in fetch`)
 }


}

export const submitQuestion = question => async dispatch => {
  try {
    dispatch()
   } catch (error) {
    console.log(`${error} - in submit`)
   }
}

export const updateQuestion = question => async dispatch => {
  try {
    dispatch()
   } catch (error) {
    console.log(`${error} - in update`)
   }
}

export const destroyQuestion = question => async dispatch => {
  try {
    dispatch()
   } catch (error) {
    console.log(`${error} - in destroy`)
   }
}

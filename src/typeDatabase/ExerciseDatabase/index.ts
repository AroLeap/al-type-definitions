import { ExerciseDictDataType } from './types'

// import bicepExercises from './Biceps'
// import tricepExercises from './Triceps'
// import legExercises from './Legs'
// import chestExercises from './Chest'
// import coreExercises from './Core'
// import shoulderExercises from './Shoulders'
// import backExercises from './Back'
// import cardioExercises from './Cardio'


// export const exerciseDict: ExerciseDictDataType = {
//     ...bicepExercises,
//     ...tricepExercises,
//     ...backExercises,
//     ...chestExercises,
//     ...legExercises,
//     ...coreExercises,
//     ...shoulderExercises,
//     ...cardioExercises
// }

type ExerciseDictVersionType = {
    version: number,
    ts: number
}

export const exerciseDictVersion: ExerciseDictVersionType = {
    version: 2,
    ts: Date.now()
}

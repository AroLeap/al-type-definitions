import {MainMuscleGroupsDictDataType, DeepMuscleGroupDictType} from './types'

export const mainMuscleGroupsDict: MainMuscleGroupsDictDataType = {
    'chest': {
        title: 'Chest',
        muscleGroupId: 'chest'
    },
    'biceps': {
        title: 'Biceps',
        muscleGroupId: 'biceps'
    },
    'triceps': {
        title: 'Triceps',
        muscleGroupId: 'triceps'
    },
    'legs': {
        title: 'Legs',
        muscleGroupId: 'legs'
    },
    'back': {
        title: 'Back',
        muscleGroupId: 'back'
    },
    'shoulders': {
        title: 'Shoulders',
        muscleGroupId: 'shoulders'
    },
    'core': {
        title: 'Core',
        muscleGroupId: 'core'
    }
}



export const deepMuscleGroupsDict: DeepMuscleGroupDictType = {
    upperTraps: {
        muscleGroupId: 'shoulders',
        title: 'Shoulder Traps',
    },
    lowerTraps: {
        muscleGroupId: 'back',
        title: 'Back Traps',
    },
    anteriorDeltoids: {
        muscleGroupId: 'shoulders',
        title: 'Anterior Delts',
    },
    posteriorDeltoids: {
        muscleGroupId: 'shoulders',
        title: 'Posterior Delts',
    },
    pecs: {
        muscleGroupId: 'chest',
        title: 'Pecs',
    },
    biceps: {
        muscleGroupId: 'biceps',
        title: 'Biceps',
    },
    triceps: {
        muscleGroupId: 'triceps',
        title: 'Triceps',
    },
    forearm: {
        muscleGroupId: 'biceps',
        title: 'Forearms',
    },
    abs: {
        muscleGroupId: 'core',
        title: 'Abs',
    },
    obliques: {
        muscleGroupId: 'core',
        title: 'Obliques',
    },
    quads: {
        muscleGroupId: 'legs',
        title: 'Quads',
    },
    lats: {
        muscleGroupId: 'back',
        title: 'Lats',
    },
    middleBack: {
        muscleGroupId: 'back',
        title: 'Middle Back',
    },
    lowerBack: {
        muscleGroupId: 'back',
        title: 'Lower Back',
    },
    glutes: {
        muscleGroupId: 'legs',
        title: 'Glutes',
    },
    hamstrings: {
        muscleGroupId: 'legs',
        title: 'Hamstrings',
    },
    calves: {
        muscleGroupId: 'legs',
        title: 'Calves',
    }


}
import {BackExerciseKeys} from './Back/types'
import {BicepExerciseKeys} from './Biceps/types'
import {CardioExerciseKeys} from './Cardio/types'
import {ChestExerciseKeys} from './Chest/types'
import {CoreExerciseKeys} from './Core/types'
import {LegExerciseKeys} from './Legs/types'
import {ShoulderExerciseKeys} from './Shoulders/types'
import {TricepExerciseKeys} from './Triceps/types'
import {MobilityExerciseKeys} from './Mobility/types'



export type MuscleGroupIDs = 'shoulders' | 'biceps' | 'back' | 'triceps' | 'core' | 'chest' | 'legs'
export type MainMuscleGroupsType = {
    title: string,
    muscleGroupId: string
}
export type MainMuscleGroupsDictDataType = Record<MuscleGroupIDs, MainMuscleGroupsType | undefined>
export type MainMuscleGroupsDictType = {[key: string]: MainMuscleGroupsType}

export type DeepMuscleGroupsType = {
    muscleGroupId: MuscleGroupIDs,
    title: string,
}

export type DeepMuscleGroupDictType = {
    [key: string]: DeepMuscleGroupsType | undefined
}





export type ExerciseDictKeysType = BackExerciseKeys 
| BicepExerciseKeys 
| CardioExerciseKeys 
| ChestExerciseKeys 
| TricepExerciseKeys 
| LegExerciseKeys 
| ShoulderExerciseKeys
| CoreExerciseKeys
| MobilityExerciseKeys

export type ExerciseInfoType = {
    title: string
    description: string,
    formInstructions: string[],
    videoUrl: string | null,
    videoUrlCDN?: string | null,
    videoUrlCDNForm?: string | null,
    imageUrl: string | null,
    imageUrlCDN?: string | null,
    type: 'strength' | 'cardio' | 'mobility',
    format: 'lift' | 'bodyweight' | 'lift-bodyweight'
    mainMuscleGroupsDict: (MainMuscleGroupsType & {weight: number})[],
    deepMuscleGroupsDict: DeepMuscleGroupsType[],
    props: 'bench' | 'mat' | 'none',
    armsOrientation: string,
    singleSided: boolean,
    alternatingMove: boolean,
    accessories: 'Rope' | 'Barbell' | 'D-handles' | 'Ankle straps'| 'None',
    suggestionRef: {
        refExerciseId: null,
        equivalenceFactor: number | null
    },
    shootDone?: boolean,
  }

export type ExerciseDictType = {[key: string]: ExerciseInfoType | undefined}

export type ExerciseDictDataType = Record<ExerciseDictKeysType, ExerciseInfoType | undefined>


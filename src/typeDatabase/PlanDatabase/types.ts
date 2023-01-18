import {CoachIdsType} from '../Coaches/types'
import {ExerciseDictKeysType} from '../ExerciseDatabase/types'

export type DailySmartWorkoutInfoType = {
    intro: {
        startTs: number,
        endTs: number
    } | null,
    outro: {
        startTs: number,
        endTs: number
    } | null,
    warmUp: {
        startTs: number,
        endTs: number
    } | null,
    coolDown: {
        startTs: number,
        endTs: number
    } | null,
    exercise: {
        startTs: number,
        endTs: number
    } | null,
    dayWorkoutList: (
        {
            exerciseId: ExerciseDictKeysType,
            clipStartTs: number,
            clipLoopStartTs: number,
            clipEndTs: number,
            side?: 'left' | 'right' | 'none' | null,
            isTimeBased?: boolean,
            suggestedTime?: number,
            restTime?: number,
            suggestedReps?: number,
            strengthTypeFormat?: 'strength' | 'conditioning'
        } 
        | undefined 
        | null
    )[],
    videoUrl: string | null,
    videoUrlCDN?: string | null, 
    thumbnailUrlCDN?: string | null 
    coachId: CoachIdsType | null,
    videoTime: number,
    walking?: number,
    note?: string | null,
    muscleGrpArray?: string[],
    shootDone?: boolean
}

export type PlanInfoType = {
    title: string,
    coachId: (CoachIdsType | null)[],
    addedOn: number,
    level: string,
    type: 'gainMuscle' | 'loseFat' | 'getLean' | 'mobility' | 'strength_conditioning' | 'stability',
    dailyPlanList: (DailySmartWorkoutInfoType | null)[],
    versionNumber: number,
    planExpectation: string | null,
    updatedOn: number,
    introVideoUrl?: string | null,
    planId: string
}

export type StandAloneWorkoutInfoType = {
    title: string,
    coachId: CoachIdsType | null,
    addedOn: number,
    level: string,
    workout: DailySmartWorkoutInfoType | null,
    versionNumber: number,
    workoutExpectation: string | null,
    workoutType: "strength_conditioning" | "mobility" | "yoga"
    videoTime: number,
    updatedOn: number,
    cumulativeRating: number,
    rating: number,
    numOfSessions: number,
    checked: boolean,
    workoutId: string
}
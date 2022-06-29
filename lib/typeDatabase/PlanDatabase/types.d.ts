import { CoachIdsType } from '../Coaches/types';
import { ExerciseDictKeysType } from '../ExerciseDatabase/types';
export declare type DailySmartWorkoutInfoType = {
    intro: {
        startTs: number;
        endTs: number;
    } | null;
    outro: {
        startTs: number;
        endTs: number;
    } | null;
    warmUp: {
        startTs: number;
        endTs: number;
    } | null;
    coolDown: {
        startTs: number;
        endTs: number;
    } | null;
    exercise: {
        startTs: number;
        endTs: number;
    } | null;
    dayWorkoutList: ({
        exerciseId: ExerciseDictKeysType;
        clipStartTs: number;
        clipLoopStartTs: number;
        clipEndTs: number;
        side?: 'left' | 'right' | 'none' | null;
        isTimeBased?: boolean;
        suggestedTime?: number;
        restTime?: number;
        suggestedReps?: number;
        strengthTypeFormat?: 'strength' | 'conditioning';
    } | undefined | null)[];
    videoUrl: string | null;
    videoUrlCDN?: string | null;
    thumbnailUrlCDN?: string | null;
    coachId: CoachIdsType | null;
    videoTime: number;
};
export declare type PlanInfoType = {
    title: string;
    coachId: (CoachIdsType | null)[];
    addedOn: number;
    level: string;
    type: 'gainMuscle' | 'loseFat' | 'getLean';
    dailyPlanList: (DailySmartWorkoutInfoType | null)[];
    versionNumber: number;
    planExpectation: string | null;
};
export declare type StandAloneWorkoutInfoType = {
    title: string;
    coachId: (CoachIdsType | null)[];
    addedOn: number;
    level: string;
    workout: DailySmartWorkoutInfoType | null;
    versionNumber: number;
    workoutExpectation: string | null;
    workoutType: "strength_conditioning" | "mobility" | "yoga";
    videoTime: number;
};

import { BackExerciseKeys } from './Back/types';
import { BicepExerciseKeys } from './Biceps/types';
import { CardioExerciseKeys } from './Cardio/types';
import { ChestExerciseKeys } from './Chest/types';
import { CoreExerciseKeys } from './Core/types';
import { LegExerciseKeys } from './Legs/types';
import { ShoulderExerciseKeys } from './Shoulders/types';
import { TricepExerciseKeys } from './Triceps/types';
import { MobilityExerciseKeys } from './Mobility/types';
import { CoachIdsType } from '../Coaches/types';
export declare type MuscleGroupIDs = 'shoulders' | 'biceps' | 'back' | 'triceps' | 'core' | 'chest' | 'legs';
export declare type MainMuscleGroupsType = {
    title: string;
    muscleGroupId: string;
};
export declare type MainMuscleGroupsDictDataType = Record<MuscleGroupIDs, MainMuscleGroupsType | undefined>;
export declare type MainMuscleGroupsDictType = {
    [key: string]: MainMuscleGroupsType;
};
export declare type DeepMuscleGroupsType = {
    muscleGroupId: MuscleGroupIDs;
    title: string;
};
export declare type DeepMuscleGroupDictType = {
    [key: string]: DeepMuscleGroupsType | undefined;
};
export declare type ExerciseDictKeysType = BackExerciseKeys | BicepExerciseKeys | CardioExerciseKeys | ChestExerciseKeys | TricepExerciseKeys | LegExerciseKeys | ShoulderExerciseKeys | CoreExerciseKeys | MobilityExerciseKeys;
export declare type ExerciseInfoType = {
    title: string;
    description: string;
    formInstructions: string[];
    videoUrl: string | null;
    videoUrlCDN?: string | null;
    videoUrlCDNForm?: string | null;
    imageUrl: string | null;
    imageUrlCDN?: string | null;
    firebaseStorageImgUrl?: string | null;
    type: 'strength' | 'cardio' | 'mobility';
    format: 'lift' | 'bodyweight' | 'lift-bodyweight' | 'free-weight';
    movementCategory: "isolation" | "compound" | null;
    mainMuscleGroupsDict: (MainMuscleGroupsType & {
        weight: number;
    })[];
    deepMuscleGroupsDict: DeepMuscleGroupsType[];
    props: 'bench' | 'mat' | 'none';
    armsOrientation: string;
    singleSided: boolean;
    alternatingMove: boolean;
    accessories: 'Rope' | 'Barbell' | 'D-handles' | 'Ankle straps' | 'None';
    suggestionRef: {
        refExerciseId: null;
        equivalenceFactor: number | null;
    };
};
export declare type ExerciseInfoTypeEditable = ExerciseInfoType & {
    date: number;
    coachId: CoachIdsType;
    harDiskCopied: 'HD-1' | 'HD-2' | 'HD-3' | 'HD-4' | 'none';
    postProduction: boolean;
    shootDone: boolean;
    flagExercise: boolean;
    remarks: string | null;
    lastEditedBy: string;
    lastEditedOn: number;
};
export declare type ExerciseDictType = {
    [key: string]: ExerciseInfoType | undefined;
};
export declare type ExerciseDictDataType = Record<ExerciseDictKeysType, ExerciseInfoType | undefined>;

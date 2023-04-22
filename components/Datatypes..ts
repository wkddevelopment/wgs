
type genericStateType<TData> = {
    value: TData
}

export type JahrgangsType = genericStateType<{value: number}> 
   
export type WheelScaleType = genericStateType<{value: number}> 

export type EbenenType = genericStateType<{value: number}> 

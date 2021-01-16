export interface APIData {
    country: string
    name: string
    weather: {
        temperature: Temperature
        summary: Summary
        wind: Wind
        clouds: Clouds
    }
}

export interface QueryParams {
    name: string
    config: ConfigInput
}
interface ConfigInput {
    units: Unit
    lang: string
}

export enum Unit {
    metric = 'metric',
    imperial = 'imperial',
    kelvin = 'kelvin',
}

interface Temperature {
    actual: number
    feelsLike: number
    min: number
    max: number
}

interface Summary {
    title: string
    description: string
}

interface Wind {
    speed: number
    deg: number
}

interface Clouds {
    all: number
    visibility: number
    humidity: number
}

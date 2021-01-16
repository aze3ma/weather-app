import { gql } from 'graphql-request'

export const GET_CITY_BY_NAME = gql`
    query getCityByName($name: String!, $config: ConfigInput) {
        getCityByName(name: $name, config: $config) {
            name
            country
            weather {
                temperature {
                    actual
                    feelsLike
                    min
                    max
                }
                summary {
                    title
                    description
                }
                wind {
                    speed
                    deg
                }
                clouds {
                    all
                    visibility
                    humidity
                }
            }
        }
    }
`

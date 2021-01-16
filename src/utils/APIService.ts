import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.REACT_APP_API_URL || 'https://graphql-weather-api.herokuapp.com'

const client = new GraphQLClient(endpoint, { headers: {} })

export default client

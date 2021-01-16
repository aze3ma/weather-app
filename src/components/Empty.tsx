import React from 'react'
import { Box, Text } from 'theme-ui'

const Empty = (): React.ReactElement => {
    return (
        <Box marginTop={5}>
            <Text
                sx={{
                    fontSize: 4,
                    fontWeight: 'thin',
                    textAlign: 'center',
                    color: 'muted',
                    textTransform: 'uppercase',
                }}
            >
                Please write a city name above...
            </Text>
        </Box>
    )
}

export default Empty

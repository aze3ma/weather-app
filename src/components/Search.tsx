/** @jsxRuntime classic */
/** @jsx jsx*/
import { jsx } from 'theme-ui'

import React, { useState } from 'react'
import { Flex, Box, Input, Select } from 'theme-ui'

import { Unit } from '../types'

interface IState {
    name: string
    units: Unit
}
interface IProps {
    searchHandler: (value) => void
}

const Search = ({ searchHandler }: IProps): React.ReactElement => {
    const [values, setValues] = useState<IState>({ name: '', units: Unit.metric })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        searchHandler({ name: values.name, config: { units: values.units } })
    }

    const handleChange = (
        event: React.ChangeEvent<{ name: string; value: string } | HTMLInputElement | HTMLSelectElement>,
    ): void => {
        setValues({ ...values, [event.target.name]: event.target.value } as Pick<IState, keyof IState>)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <Box marginRight={2} sx={{ flex: '4 1 auto' }}>
                    <Input
                        paddingLeft={3}
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="London etc..."
                    />
                </Box>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Select name="units" defaultValue={values.units} onChange={handleChange}>
                        <option value="metric">Metric</option>
                        <option value="imperial">Imperial</option>
                        <option value="kelvin">Kelvin</option>
                    </Select>
                </Box>
            </Flex>
        </form>
    )
}

export default Search

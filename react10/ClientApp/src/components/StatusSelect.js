import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function StatusSelect() {
    const [age, setAge] = React.useState(3);
    const [color, setColor] = React.useState('#FFFFFF');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        if (event.target.value === 1) {
            setColor('#CEFDED')
        }
        if (event.target.value === 2) {
            setColor('#FFCCDD')
        }
        if (event.target.value === 3) {
            setColor('#FFFFFF')
        }
    };

    return (
        <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    style={{backgroundColor: color} }
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label=""
                    onChange={handleChange}
                >
                    <MenuItem value={1}>В работе</MenuItem>
                    <MenuItem value={2}>На паузе</MenuItem>
                    <MenuItem value={3}>Выполнена</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

import React, { useState } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Skill(props) {

    const [value, setValue] = useState(props.value);

    return (
        <Box sx={{ '& > legend': { mt: value }, }}         >
            <Typography component="legend">{props.name}</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />

        </Box>
    )

}

export default Skill;
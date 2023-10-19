import React, { useState } from 'react';
import { Autocomplete, Button, FormControl, Grid, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const FirstSection = () => {
    // State to track the selected location
    const [location, setLocation] = useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
    ]
    return (
        <>
            <div className="animate__animated animate__backInLeft" style={{ height: '500px', display: 'grid', placeItems: 'center' }}>
                <div>
                    <h1 className='FirstSectionHeadinng'>Home services, on demand. 👇</h1>

                    <Grid container bgcolor={'#fff'} spacing={0}>
                        <Grid item xs={12} sm={4} md={6} lg={3} xl={3}>
                            <Select
                                fullWidth
                                value={location}
                                onChange={handleLocationChange}
                                // variant='filled'
                                displayEmpty
                                inputProps={{ 'aria-label': 'Location' }}
                                sx={{ borderRadius: '0px' }}
                            >
                                <MenuItem value="" disabled>
                                    Select Location
                                </MenuItem>
                                <MenuItem value="location1">Ashiyana</MenuItem>
                                {/* <MenuItem value="location2">Location 2</MenuItem> */}
                                {/* Add more locations as needed */}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6} lg={9} xl={9} >
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                sx={{ borderRadius: '0px' }}
                                options={top100Films}
                                // sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} placeholder='Select or Type Service Name' />}
                            />
                        </Grid>
                    </Grid>

                    <div className="text-center mt-2">
                        <Button sx={{ color: '#eedc30' }} variant='contained'>Search Now</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstSection;

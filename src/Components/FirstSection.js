import React, { useState } from 'react';
import { Autocomplete, FormControl, Grid, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const FirstSection = () => {
    // State to track the selected location
    const [location, setLocation] = useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };
    return (
        <>
            <div className="animate__animated animate__backInLeft" style={{ height: '500px', display: 'grid', placeItems: 'center' }}>
                <div>
                    <h1 className='FirstSectionHeadinng'>Home services, on demand. 👇</h1>

                    <FormControl className='BorderRadiusSearch' fullWidth variant="outlined">
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={4} md={6} lg={2} xl={2}>
                                <Select
                                    fullWidth
                                    value={location}
                                    onChange={handleLocationChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Location' }}
                                    sx={{ borderRadius: '0px' }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Location
                                    </MenuItem>
                                    <MenuItem value="location1">Location 1</MenuItem>
                                    <MenuItem value="location2">Location 2</MenuItem>
                                    {/* Add more locations as needed */}
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={8} md={6} lg={10} xl={10} >
                                <Autocomplete
                                    id="search-autocomplete"
                                    freeSolo
                                    options={[]}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            placeholder="Search..."
                                            sx={{ borderRadius: '0px' }}
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Search color='#eedc30' />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </FormControl>
                </div>
            </div>
        </>
    );
};

export default FirstSection;

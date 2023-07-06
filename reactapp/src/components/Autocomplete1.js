import React from 'react'
import { Autocomplete } from '@mui/material'
import { TextField } from '@mui/material'

const Navbar = () => {
  let top13Films=[
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
    { label: "harry potter", id: 3 },
    { label: 'inception', id: 4 },
    { label: 'Shuttle island', id: 5 },
    { label: 'Pulp Fiction', id: 6 },
    { label: 'Love Again', id: 7 },
    { label: 'Titanic', id: 8 },
    { label: 'The Nun', id: 9 },
    { label: 'Anabel', id: 10 },
    { label: 'Veronica', id: 11 },
    { label: 'Conjuiring', id: 12 },
    { label: 'Xmen', id: 13 }
  ]
  return (
    <div style={{'marginLeft':'170px','display':'flex','marginTop':'7%'}}>
        <br/>
      <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={top13Films}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/>
&nbsp;&nbsp;
&nbsp;&nbsp;
<Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top13Films.map((option) => option.label)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
    </div>
  )
}

export default Navbar



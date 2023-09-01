import React, { useState } from "react";
import { Button, TextField, Typography, MenuItem, Select, InputLabel,FormControl } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { countries } from "../../assets/helpers/countries";
import SendIcon from '@mui/icons-material/Send'
import Swal from 'sweetalert2'; 
export default function Contact({ data, backgroundColorPrimary, textColor, fontColor }) {
    const theming = createTheme({
        palette: {
            primary: {
                main: textColor
            }
        },
    });
    
    const [form, setForm] = useState({name:'',email:'',country:'',message:''})
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        var data = new FormData(event.target)
        try {
            const response = await fetch('https://formspree.io/f/xgejknll', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: data.contact.alert.success.title,
                    text: data.contact.alert.success.subtitle,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: data.contact.alert.error.title,
                    text: data.contact.alert.error.subtitle,
                    footer:data.contact.alert.error.subtitle2
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: data.contact.alert.error.title,
                text: data.contact.alert.error.subtitle,
                footer:data.contact.alert.error.subtitle2
            });
        }
    };
    return (
        <form onSubmit={handleSubmit} method="POST" style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColorPrimary, padding: ' 10vh 10vw', }}>
            {/* {countries.map((e, i) => <div key={i}><p>{e.name}</p><img src={e.flag} alt={e.name} /></div>)} */}
            <ThemeProvider theme={theming}>
                <div style={{ maxWidth:'700px'}}>
                    <Typography variant="h6" display="block" gutterBottom sx={{ color: theming.palette.primary.main, marginBottom: '5vh' }} >
                        {data.contact.title}
                    </Typography>
                    <TextField 
                    name="name"
                        id="outlined-multiline-flexible"
                        label={data.contact.label[0]}
                        onChange={(e)=>handleChange(e)}
                        sx={{ mt: 2, color: fontColor }}
                        variant="outlined" fullWidth
                        required
                    />
                    <TextField
                    name="email"
                    value={form['email']}
                    onChange={(e)=>handleChange(e)}
                        id="outlined-multiline-flexible"
                        label={data.contact.label[1]}
                        sx={{ mt: 2, color: fontColor }}
                        variant="outlined" fullWidth
                        required
                    />
                    <FormControl fullWidth
                            sx={{ mt: 2, color: fontColor }}
                            variant="outlined">
                        <InputLabel id="demo-controlled-open-select">{data.contact.label[2]}</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select"
                            id="demo-controlled"
                            value={form['country']}
                            name="country"
                            onChange={(e)=>handleChange(e)}
                            label={data.contact.label[2]}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem> 
                            {countries.map((e, i) => <MenuItem key={i} value={e.name} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <img src={e.flag} alt={e.name} style={{width:'auto',height:'10px',marginRight:'5px' }}/><span>{e.name}</span></MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-multiline-flexible"
                        name="message"
                        value={form['message']}
                        onChange={(e)=>handleChange(e)}
                        label={data.contact.label[3]}
                        multiline
                        rows={4} sx={{ mt: 2, color: fontColor }}
                        variant="outlined" fullWidth
                        required
                    />
                    <Button sx={{ my: 3, width: '100%' }} type="submit" variant="contained" endIcon={<SendIcon />}>{data.contact.button}</Button>
                </div>
            </ThemeProvider>
        </form>
    )
}
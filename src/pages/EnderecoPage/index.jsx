import Box  from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography  from "@mui/material/Typography";
import { Axios } from "axios";
import { useState } from "react";


const EndereçoPage =() =>{
    const [cep, setCep] =useState("");
    const [rua, setRua] =useState("");
    const [cidade, setCidade] =useState("");
    const [estado, setEstado] =useState("");
    const [latitude, setLatitude] =useState("");
    const [longitude, setLongitude] =useState("");




    consultarCEP= async () =>{
        try{ const resposta = await axios.get("")

        }catch (erro){
            console.erro("Um erro aconteceu ao buscar o CEP")
        }
    }



    return(
<Box 
display="flex"
justifyContent="center"
alignContent="center"
flexDirection="colum"
marginTop={2}
gap={2}
width="70vw"
>

    <Stack alignItems="center" gap={1} > 
        <Typography variant="h4">Consulte seu cep</Typography>
        <Link target="_blank" href="https://brasilapi.com.br/" 
        underline="always"
        >
            Via Brasil API
            </Link>
    </Stack>

    <Stack alignItems="center" gap={1} direction="row"> 
    <TextField 
    placeholder="50012007" 
    required
    inputProps={{maxLenght: 8}} 
    value={cep}
    onChange = {(event) => setCep(event.target.value)}
    />
    <Button variant = "contained" onClick={}>Buscar</Button>
    
    </Stack>


<Stack>
<TextField label="Rua" fullWidth readOnly value={rua}/>
<TextField label="Cidade" fullWidth readOnly value={cidade}/>
<TextField label="Estado" fullWidth readOnly value={estado}/>
<TextField label="Latidute" fullWidth readOnly value={latitude}/>
<TextField label="Longitude" fullWidth readOnly value={longitude}/>
</Stack>


</Box>
);
};

export default EndereçoPage;
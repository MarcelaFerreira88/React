import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const SobreMimPage = () => {

const imagemUrl = "fotomarcela2.jpg";


return (<Box margin="10px" display="flex" alignItems="center" justifyContent="center">


<Box
  component="div"
  sx={{
    marginRight: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <img
    src={imagemUrl}
    alt="Nome do Usuário"
    style={{
      width: '450px',
      height: '450px',
      borderRadius: '50%',
    }}
  />
</Box>


<Box textAlign="center" flex="1" display="flex" flexDirection="column" alignItems="center">
  <Typography variant="h3">Sobre mim</Typography>
  <Typography>
    Comecei minha carreira aos 16 como empacotadora e, em seguida, mudei para a área de telemarketing.<br />
    Me formei em administração em 2012 e finalmente consegui meu primeiro trabalho na área administrativa em 2019.<br /><br />

    Em 2022, recebi uma promoção de assistente administrativo para analista financeiro, focando em inadimplência e análise de dados.<br />
    Foi nesse período que meu interesse pela área de tecnologia começou a crescer.<br />
    Comecei a pesquisar na internet sobre mulheres pretas na área de tecnologia, em busca de inspiração e referências encontrei a <a href="https://www.pretalab.com/" target="_blank" >PRETALAB</a>.<br /><br />

    Agora, estou embarcando em uma nova fase, combinando minha experiência em administração com o fascinante mundo da tecnologia.<br />
    É uma jornada desafiadora, mas estou empolgada com as possibilidades e determinada a seguir esse caminho único.<br /><br />

    Atualmente estudo ferramentas de FrontEnd e Análise de dados.
  </Typography>

  <Box marginTop={2}>
    <a href="https://www.linkedin.com/in/marcela-ferreira-89b46552/" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon style={{ fontSize: '30px', marginRight: '10px', color: '#333' }} />
    </a>

    <a href="https://github.com/MarcelaFerreira88" target="_blank" rel="noopener noreferrer">
      <GitHubIcon style={{ fontSize: '30px', marginRight: '10px', color: '#333' }} />
    </a>
  </Box>
</Box>
</Box>
);
};

export default SobreMimPage;
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const SobrePretaLabPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Paper elevation={3} style={{ flex: 1, margin: 16, padding: 16 }}>
        <Stack spacing={2} justifyContent="flex-start">
          <Typography variant="h4">Quem é a PretaLab?</Typography>
          <Typography variant="h6">
            A PretaLab é uma iniciativa do Olabi, organização social que trabalha para trazer diversidade para a tecnologia e inovação. <br />
            
            <br />
            E se descreve como: "Somos uma plataforma que conecta mulheres negras que são ou gostariam de ser da tecnologia, por meio dos nossos ciclos formativos, rede de profissionais, mercado de trabalho, consultorias e estudos.".
          </Typography>
        </Stack>
      </Paper>

      <Paper elevation={3} style={{ flex: 1, margin: 16, padding: 16 }}>
        <Stack spacing={2} justifyContent="flex-start">
          <Typography variant="h4">Depoimento sobre o Preta Lab?</Typography>
          <Typography variant="h6">
            A PretaLab me fez sentir pertencente e proporcionou um ambiente seguro para aprender e adquirir novos conhecimentos.<br /><br />

            <strong>Habilidades técnicas aprendidas:</strong><br />
            HTML5 e CSS3, Lógica de programação,<br />
            JavaScript - entrada, processamento e saída de dados.,ReactJS,Testes unitários,<br />
            Git/Github.<br />

            Tópicos do pilar de autoconhecimento: autonomia, segurança, pertencimento, gestão emocional e de conflitos,
            comunicação, liderança situacional, plano de carreira, feedbacks assertivos e autoavaliação.



          </Typography>
        </Stack>
      </Paper>
    </div>
  );
};

export default SobrePretaLabPage;
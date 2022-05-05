import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2),
    },

    paper: {
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        marginBottom: 12,
    },

    settingOption: {
        marginLeft: "auto",
    },

    margin: {
        margin: theme.spacing(1),
    },

    color: {
        color: "#0241AD"
    },

    text: {
        marginLeft: "42px",
    },

    textP: {
        marginLeft: "42px",
    },

}));

const Api = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <h2>Documentação para envio de mensagens</h2>

                <h2 className={classes.color}>Métodos de Envio</h2>

                <p className={classes.text}>1. Mensagens de Texto</p>
                <p className={classes.text}>2. Mensagens de Mídia</p>

                <h2 className={classes.color}>Instruções</h2>
                <p><b>Observações Importantes</b></p>
                <ul>
                    <li>Para pegar o token da API, vá em TOKENS que seu token estará la, sem ele não será possivel enviar mensagens.</li>
                    <li>O número para envio não deve ter mascara ou caracteres especiais e deve ser composto por:</li>
                    <br />
                    <ol>
                        <ul>
                            <li>Código do pais - Ex: 55 (Brasil)</li>
                            <li>DDD</li>
                            <li>Número</li>
                        </ul>
                    </ol>
                </ul>
                <h2 className={classes.color}>1. Mensagens de Texto</h2>
                <p>Seguem abaixo lista de informacoes necessárias para envio das mensagens de texto:</p>
                <p className={classes.textP}><b>URL: </b>{process.env.REACT_APP_BACKEND_URL}/api/messages/send</p>
                <p className={classes.textP}><b>Metódo: </b>POST</p>
                <p className={classes.textP}><b>Headers: </b>Authorization: Bearer (token) e Content-Type application/json</p>
                <p className={classes.textP}><b>Body: </b>"number": "5599999999999", "body": "Enviado via api"</p>

                <h2 className={classes.color}>2. Mensagens de Mídia</h2>
                <p>Seguem abaixo lista de informacoes necessárias para envio de midias:</p>
                <p className={classes.textP}><b>URL: </b>{process.env.REACT_APP_BACKEND_URL}/api/messages/send</p>
                <p className={classes.textP}><b>Metódo: </b>POST</p>
                <p className={classes.textP}><b>Headers: </b>Authorization: Bearer (token) e Content-Type multipart/form-data</p>
                <p className={classes.textP}><b>Body: </b>"number": "5599999999999", "medias": "aqui vai sua midia", "body": "Enviado via api"</p>
            </Container>
        </div>
    );
};

export default Api; 

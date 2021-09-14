export const BASE_URL= process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
/* O ?? na linha acima indica um operador de coalecencia nula
    Significa  que se a variável REACT_APP_BACKEND_URL não estiver definida, a aplicação pega o localhost
    Resumindo: se rodar localmente pega o localhost, pois a variável REACT_APP_BACKEND_URL não está definida
    Se rodar no netifly a variável está definida e portanto pega o link do back end definido lá.
*/
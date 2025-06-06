
# Flood Alert App

Aplicativo React Native com Expo para simulação de detecção, alerta e contenção de enchentes.

## Funcionalidades

- Tela de Boas-vindas
- Monitoramento de sensores (nível da água, temperatura)
- Exibição de alertas
- Envio de ações de controle (ex: ativar barreiras)
- Histórico de ações

## Como rodar

1. Altere o IP no arquivo `api.js` para o IP local onde o backend Spring Boot está rodando.
2. Instale as dependências:

```
npm install
```

3. Rode o app com:

```
npx expo start
```

4. Escaneie o QR code com o Expo Go (Android) ou use um emulador.

## Requisitos

- Node.js
- Expo CLI
- Backend Spring Boot funcional rodando em rede local

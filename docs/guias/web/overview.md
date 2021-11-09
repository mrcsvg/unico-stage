---
sidebar_label: 'Visão geral'
sidebar_position: 1
hide_title: true
---

# Visão Geral

## Sobre este SDK

O SDK Web do **Unico Check** permite a construção, de forma rápida e fácil, de uma grande experiência de reconhecimento facial em seu web-app. Fornecemos um frame para a captura biométrica via JavaScript nativo utilizando algoritimos de abertura de câmera modernos e visão computacional, com o objetivo de auxiliar no enquandramento das imagens as otimizando para aumentar a acurácia na resposta do nosso motor biométrico.

Nosso SDK Web utiliza os recursos nativos do HTML 5, JavaScript e CSS e funciona em todos os browsers modernos.

## Compatibilidade


### Sistemas Operacionais

O frame de captura, disponibilizado por meio de nosso SDK, da suporte aos seguintes sistemas operacionais e versões:
- **iOS**: A partir da 11.0
- **Android**: A partir da 5.1

Além de sistemas operacionais de dispositivos móveis, também oferecemos compatibilidade a **Windows** e **MacOs**.

:::caution

Nas versões desktop o usuário pode encontrar dificuldades em efetuar as capturas (ou mesmo em ter as imagens validadas pelo motor biométrico) devido a má qualidade de algumas câmeras VGA.

:::


### Browsers

O frame de captura disponibilizado por meio de nosso SDK, é compativel com as seguintes combinações de browsers e sistemas operacionais:

<div className="compatibility-table">

| Sistema operacional  | Chrome  | Firefox  | Opera  | Edge  | Safari |
|--------------------|---------|----------|--------|-------|--------|
| Windows (desktop)  | ![Supported](/img/icons/yes.svg) | ![Supported](/img/icons/yes.svg) |  ![Not supported](/img/icons/no.svg) |  ![Not supported](/img/icons/no.svg) | ![Not supported](/img/icons/no.svg)   |
| Android            | ![Supported](/img/icons/yes.svg) | ![Supported](/img/icons/yes.svg) | ![Not supported](/img/icons/no.svg) | ![Not supported](/img/icons/no.svg) | ![Not supported](/img/icons/no.svg) |
| iOS mobile/Macbook | ![Not supported](/img/icons/no.svg) | ![Not supported](/img/icons/no.svg) | ![Not supported](/img/icons/no.svg) | ![Not supported](/img/icons/no.svg) | ![Supported](/img/icons/yes.svg) |

</div>


De forma geral, nosso SDK da suporte a WebRTC e versões mais recentes dos browsers listados acima. Por questões de compatibilidade e segurançca, não garantimos o funcionamento em versões muito antigas destes browsers.

:::caution Atenção 

Não damos suporte á WebView ou Browsers de fábrica.

:::

## Funcionalidades disponíveis 

Atualmente, nosso SDK Web possui as seguintes funcionalidades disponíveis:

- Reconhecimento facil;
    - Captura com Camêra Manual;
    - Captura com Camêra Inteligênte;
- Captura de documentos;

:::info Fallback para *Câmera Inteligente* 

Alguns celulares antigos, como aparelhos com Android 6 ou iPhone 4, podem não possuir suporte aos recursos necessários para o funcionamento das técnologia de visão computacional, como face-api e tjfs, que são utilizadas em nossa funcionalidade de *Câmera Inteligente*.

Nestes casos, a funcionalidade de *Câmera Normal* irá ser acionanada como fallback, permitindo que o usuário faça a captura manual.

:::

## Como funciona este SDK?

Nosso SDK, client-side, é responsável por simplificar sua integração com o **Unico Check**, abstraindo toda a complexidade referente a manipulação da câmera e captura. 

Caso a captura seja feita com sucesso, nosso SDK irá retornar um objeto que deverá ser enviado para as nossas APIs, completando assim a validação biométrica.



## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Entre em contato atrvés de nosso e-mail [suporte.unicocheck@unico.io](mailto:suporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Proximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Como Começar - Importando nosso SDK](como-comecar);
- [Guia para implantação de reconhecimento facial](reconhecimento-facial);
- [Guia para implantação de captura de documentos](verificacao-documento);
- [API Reference do SDK](API);


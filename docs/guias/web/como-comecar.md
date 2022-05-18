---
sidebar_label: 'Como começar'
sidebar_position: 2
hide_title: true
---

# Como começar

Esta página irá te auxiliar na configuração de sua conta da **Unico** para a utilização de nosso SDK, assim como sua instalação e configuração em seu projeto. Após essas etapas, você estará pronto para começar a construir sua integração.

## Obtendo suas credenciais

Para utilizar nossos SDKs você precisará importar suas credenciais (Client API Key) em seu projeto através de um arquivo JSON. Utilize o passo-a-passo a seguir para gerar e importar as credenciais em seu projeto.

### Criando ou editando uma *API Key*;

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Crie ou edite uma nova *API Key*;
4. Caso deseje utilizar o **Smartlive com interação** em seu app, verifique se o campo "**Utiliza liveness com interação**" está como **SIM**, caso esteja como **NÃO** (ou não esteja aparecendo) entre em contato com nosso suporte e solicite a habilitação;

:::info Smartlive com interação

Saiba mais sobre o Smartlive com interação [neste guia](#)

:::

5. Marque o campo **"Utiliza autenticação segura na SDK"** como **SIM**;
6. Expanda a seção SDK JS, adicione o nome de sua aplicação JS e hostname (incluindo http/https);
7. Salve as alterações.

### Embarcando as credenciais em seu projeto

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Ao lado da *API Key* desejada, pressione o botão de **Download**;
4. Selecione a opção **JS**;
5. Clique em "**Gerar**";
6. Uma nova aba será aberta em seu navegador contendo informações do projeto em formato JSON.

:::caution Atenção aos bloqueadores de Pop-up
Caso a nova aba não abra, por favor, verifique se o seu navegador está bloqueando os popups.
:::

7. Salve o conteúdo desta nova aba em um novo arquivo **JSON**;
8. Adicione o arquivo salvo em seu projeto. Explicaremos como e onde utilizar o arquivo ao longo de nossos guias.

<!-- TODO Destacar que o arquivo precisa estar em um lugar público -->

:::info Localização do arquivo em seu projeto
O arquivo JSON deve estar em um local público e visível para a Web dentro de seu projeto.
:::

### Embarcando outros arquivos do Unico Check em seu projeto

:::note Passo opcional
Este passo é opcional e depende da configuração e opções utilizadas em seu projeto
:::

A tabela abaixo lista arquivos de recursos adicionais disponíveis para inclusão em seu projeto. Você deve baixa-los e incluí-los em seu projeto dependendo das funcionalidades que deseja utilizar.

<!-- TODO Entender o que sao os arquivos adicionais e pra que servem -->

| Descrição	| Link para download |
| --------- | ------------------ |
| Recursos adicionais do Unico Check para a funcionalidade de Facetec  | [Download](https://cdn.unico.io/sdk/check/facetec/unico-sdk-resources.zip)  |
| Arquivos de AI do Unico Check SDK JS | [Download](https://cdn.unico.io/sdk/check/bio/models.zip)  |

:::info Localização do arquivo em seu projeto
Da mesma forma que o JSON do passo anterior, os arquivos adicionais devem estar em um local público e visível para a Web dentro de seu projeto.
:::

## Instalação

Atualmente, disponibilizamos nosso SDK Web através de um pacote npm ou de nosso cdn. Para a instalação, siga os passos abaixo dependendo de sua preferência:

:::tip Dica
Sempre recomendamos o uso das versões mais recentes de nossos SDKs. Para isto, fique atento a nossos [Release notes](release-notes) ;).
:::

#### Instalação através de nosso pacote npm
Para instalar nosso SDK em seu projeto através via [npm](https://www.npmjs.com/package/unico-webframe), basta executar o comando abaixo: 

```bash
npm install unico-webframe
```

#### Instalação através de nosso cdn
Para instalar nosso SDK em seu projeto por meio de nosso cdn, basta efetuar o download do arquivo abaixo e importa-lo em seu projeto.

- [Download](https://cdn.unico.io/sdk/check/bio/unico-webframe-3.4.2.zip) da versão `3.4.2` 


:::note Nota sobre o *Câmera Inteligente* e modelos de IA
Para utilizar o *Câmera Inteligente*, é necessário adicionar ao projeto alguns modelos de IA para que tudo funcione bem. Para isto, faça download dos modelos [neste link](https://cdn.unico.io/sdk/check/bio/models.zip) e os adicione ao seu projeto. 

Os modelos **deverão** estar disponíveis em uma pasta de nome `models` **acessível publicamente** através da url base de sua aplicação. Por exemplo:  `https://www.seudominio.com/models` ou `https://localhost:8000/models`.
:::

## Importação

Após a instalação de nosso SDK, basta importa-lo da maneira correta em seu projeto. 

#### Caso tenha instalado o SDK através de nosso pacote npm

Caso tenha instalado nosso pacote via npm:
```javascript
import { UnicoCheckBuilder, SelfieCameraTypes, UnicoThemeBuilder, DocumentCameraTypes } from 'unico-webframe'
```

#### Caso tenha instalado o SDK através de nosso cdn

Caso tenha instalado nosso pacote via cdn:
```javascript
import { UnicoCheckBuilder, SelfieCameraTypes, UnicoThemeBuilder, DocumentCameraTypes } from '../js/unico-webframe-version.min.js'
```  

## Renderização

A forma que nosso componente será renderizada irá depender se você tem ou não a funcionalidade de **Smartlive** (Prova de vida) com interação ou não.

### Sem utilizar o **Smartlive com interação Facetec**

O frame para captura será renderizado dentro de um `div` que deverá possuir seu `id` necessáriamente **igual** a `"box-camera"`.

*Exemplo:*
```html
<div id="box-camera"></div>
```

:::caution Atenção
O identificador deste div deverá ser sempre igual a `id='box-camera'`.
:::

### Utilizando o **Smartlive com interação Facetec** 

Caso seu projeto utilize o **Smartlive com interação** você não precisa criar um `div` em seu código para a renderização. Neste caso, abriremos um modal dentro da mesma janela (Que ocupará toda a tela).

## Precisando de ajuda?

:::info Ajuda com alguns frameworks

Caso esteja utilizando Angular ou React-scripts 5 você poderá encontrar algumas dificuldades. Disponibilizamos algumas soluções rápida através de nosso artigo de [Solução de Problemas](solucao-problemas).

:::


Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/verificacao-documentos)


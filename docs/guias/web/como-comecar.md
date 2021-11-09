---
sidebar_label: 'Como começar'
sidebar_position: 2
hide_title: true
---

# Como começar

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

- [Download](https://cdn.unico.io/sdk/check/bio/unico-webframe-2.0.0.min.js.zip) da versão `2.0.1` 


:::note Nota sobre o *Câmera Inteligente* e modelos de IA
Para utilizar o *Câmera Inteligente*, é necessário adicionar ao projeto alguns modelos de IA para que tudo funcione bem. Para isto, faça download dos modelos [neste link](https://cdn.unico.io/sdk/check/bio/models.zip) e os adicione ao seu projeto. 

Os modelos **deverão** estar disponíveis em uma pasta de nome `models` **acessível publicamente** através da url base de sua aplicação. Por exemplo:  `https://www.seudominio.com/models` ou `https://localhost:8000/models`.
:::

## Importação

Após a instalação de nosso SDK, basta importa-lo da maneira correta em seu projeto. 

#### Caso tenha instalado o SDK atrvés de nosso pacote npm

Caso tenha instalado nosso pacote via npm:
```javascript
import * as acessoWebFrame from 'unico-webframe';
```

#### Caso tenha instalado o SDK atrvés de nosso cdn

Caso tenha instalado nosso pacote via cdn:
```javascript
import * as acessoWebFrame from '../js/unico-webframe-version.min.js'
```  

## Renderização

O frame para captura será renderizado dentro de um `div` que deverá possuir seu `id` necessáriamente **igual** a `"box-camera"`.

*Exemplo:*
```html
<div id="box-camera"></div>
```

:::caution Atenção
O identificador deste div deverá ser sempre igual a `id='box-camera'`.
:::

## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Entre em contato atrvés de nosso e-mail [uporte.unicocheck@unico.io](mailto:uporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Proximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Guia para implantação de reconhecimento facial](/guias/web/reconhecimento-facial)
- [Guia para implantação de captura de documentos](/guias/web/reconhecimento-facial)
- [API Reference do SDK](/guias/web/API)


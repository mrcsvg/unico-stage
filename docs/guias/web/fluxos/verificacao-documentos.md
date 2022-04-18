---
sidebar_label: 'Captura de documentos'
sidebar_position: 4
---

# Verificação de documentos

## Sobre este guia

Este guia foi elaborado para ajudá-lo a integrar nosso SDK Web de forma rápida e fácil. 
Buscamos trazer conceitos básicos, exemplos de implementação dos SDKs e também de como interagir com as APIs REST de nosso motor biométrico.

:::info Vale lembrar
Vale lembrar que este guia foca no processo de captura de imagens. Caso esteja buscando informações sobre as APIs REST do **Unico Check**, sugerimos que visite nosso [API Reference](https://www3.acesso.io/identity/services/v3/docs/), nosso guia de APIs ou nossa página de página [Visão Geral](../overview).
:::

Através deste guia, em poucos minutos você será capaz de:

- Implementar a abertura da câmera e captura de imagens;
- Entender como manipular os dados de retorno;
- Entender como utilizar o retorno de nosso SDK com nossas APIs;

## Antes de começar

Certifique-se que você seguiu nosso passo-a-passo para instalação e importação de nosso SDK através [deste guia](../como-comecar). É importante também ter em conta as funcionalidades disponíveis neste SDK, como explicado na página de [Visão Geral](../overview).

## Recursos disponíveis

Nosso SDK é responsável por renderizar um frame contendo uma silhueta que se ajusta automaticamente com base na proporção da tela do usuário final. Possibilitamos a captura dos seguintes tipos de documentos:

- **CNH:** Captura da CNH aberta;
- **CNH frente:** Captura da frente da CNH;
- **CNH verso:** Captura do verso da CNH;
- **CPF:** Captura do documento de CPF;
- **RG frente:** Captura da frente do RG;
- **RG verso:** Captura do verso do RG;
- **Novo RG frente:** Captura a frente do novo tipo de RG;
- **Novo RG verso:** Captura o verso do novo tipo de RG;
- **Outros:** Captura documento genérico. Para este tipo de captura você deve informar o título do documento que será mostrado na captura para o usuário usando a propriedade `optional.LABEL_DOCUMENT_TYPE_OTHERS`.


import imgDocumento from '/static/img/guias/img_documentos.png';

<img src={imgDocumento} alt="Captura Manual" className="imgCenter" />


## Implementação

Abaixo um passo-a-passo para ter nosso SDK funcionando em poucos minutos em seu WebApp. 

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>

<li>

### Inicializar nosso SDK

Como primeiro passo, você deverá efetuar 3 passos simples em seu projeto: 

Instancie um novo Builder:

```javascript
const unicoCameraBuilder = new UnicoCheckBuilder();
```

Especifique o caminho dos arquivos adicionais (caso adicionados em seu projeto):

```javascript
unicoCameraBuilder.setResourceDirectory("/resources");
```

</li>

<li>

### Configurar o tamanho do frame

Como primeiro passo, sugerimos que você configure o tamanho de nosso frame dentro de sua aplicação, a fim de otimizar a área de captura dentro de seu WebApp. Confira abaixo como fazer esta configuração para Web Desktop ou Mobile.

:::tip Dica

Muitas vezes o funcionamento de nosso frame pode ser afetado por alguns design-systems que possuam algum tipo de grid-system como, por exemplo, bootstrap ou material-ui. Para minimizar este risco, certifique-se de posicionar nosso frame (`id="box-camera"`) em algum lugar do código que não herde regras indesejadas de css.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="desktop" label="Desktop" default>

Nas versões Web Desktop, é possível restringir o tamanho de nosso frame para que o mesmo não utilize toda a dimensão de seu WebApp. Para isto, basta envolver nosso frame (`id="box-camera"`) em outra tag html, como no exemplo abaixo:

```html
<div class="container">
  <div id="box-camera"></div>
</div>
```

Idealmente, você deve tentar manter uma proporção adequada entre altura e largura, o que irá facilitar o enquadramento da face do usuário. Abaixo um exemplo:

```css
.container {
  width: 800px;
  height: 600px;
  position: relative;
}
```

Seguindo o exemplo acima, o nosso frame respeitara o tamanho do elemento "pai", neste caso representado pelo container. Desta forma, você tem a flexibilidade para implementar nosso frame da forma mais conveniente para sua aplicação (Como em um modal, por exemplo).

:::caution Testando diversos tamanhos de tela

Testes alterando o tamanho da tela através do modo desenvolvedor de seu browser não irão funcionar. Recomendamos que este tipo de teste seja feito alterando o tamanho da janela de seu browser.
:::

  </TabItem>

  <TabItem value="mobile" label="Mobile">

Diferente do que sugerimos na versão Web Desktop, para uma view Web Mobile recomendamos que o frame de captura ocupe 100% da tela para evitar problemas com nossos algorítimos de visão computacional. Caso a área de captura esteja distorcida, nossa funcionalidade de captura automática (Câmera Inteligente) poderá apresentar problemas de calculo no tracking da face dos usuários.

Sendo assim, recomendamos que na view Web Mobile: 
- O frame de captura ocupe 100% da tela do dispositivo (`100vw/vh`);
- Evitar o scroll horizontal ou vertical (isso pode ser minimizado com um modal);

Você pode conferir um exemplo de implementação através de um projeto que deixamos [nesta página](recursos-adicionais/exemplos) (Angular).

:::caution Testes com  simulador de devices

Testes de devices utilizando o modo desenvolvedor de seu browser não irão funcionar, dado que, a camera utilizada pelo seu browser é a mesma de seu desktop, que possui uma resolução totalmente diferente da camera de um dispositivo móvel. Recomendamos que este tipo de teste seja feito diretamente no device.
:::

  </TabItem>
</Tabs>

</li>

<li>

### Configurar funções de callback

Um dos objetos que devemos passar como parâmetro ao método responsável por renderizar o frame de captura é o de **callback**. Este objeto deverá conter funções de callback para casos de sucesso e erro, como exemplificados abaixo.

```javascript
  var callback = {
    on: {
      success: function(obj) {
        console.log(obj.base64);
      },
      error: function(error) {
        console.error(error)
        //confira na aba "Configurações" sobre os tipos de erros
      }
    }
  };

```

Este objeto é obrigatório e caso não seja corretamente implementado (contemplando todos os eventos de `success` ou `error` irá gerar uma exceção, que caso não tratada, será exibida no console do usuário).

Para mais detalhes sobre os códigos de erro retornados por nosso SDK, consulte [este guia](../referencias#códigos-de-erro).

<!-- Para mais detalhes sobre o objeto de `callback`, consulte nossa a [API Reference](api/callback) de nosso SDK Web. -->


</li>

<li>

### Configurar layout do frame

:::note Passo opcional
Este é um passo opcional, porém recomendado.
  
:::

Oferecemos a possibilidade de customização do frame de captura por meio do nosso **Theme Builder**. Para efetuar a customização do frame basta gerar uma instância da classe `UnicoThemeBuilder` e invocar os métodos que customizam cada uma das propriedades do frame de captura, como exemplificados abaixo:

```javascript
const unicoTheme = new UnicoThemeBuilder()
.setColorSilhouetteSuccess("#0384fc")
.setColorSilhouetteError("#D50000")
.setColorSilhouetteNeutral("#fcfcfc")
.setBackgroundColor("#dff1f5")
.setColorText("#0384fc")
.setBackgroundColorComponents("#0384fc")
.setColorTextComponents("#dff1f5")
.setBackgroundColorButtons("#0384fc")
.setColorTextButtons("#dff1f5")
.setBackgroundColorBoxMessage("#fff")
.setColorTextBoxMessage("#000")
.setHtmlPopupLoading(`<div style="position: absolute; top: 45%; right: 50%; transform:
translate(50%, -50%); z-index: 10; text-align: center;">Carregando...</div>`)
.build();
```

Após a geração do objeto de tema, conforme exemplificado acima, devemos passa-lo como parâmetro para o método `setTheme` do builder `unicoCameraBuilder`

```javascript
unicoCameraBuilder.setTheme(unicoTheme);
```

<!-- Para mais detalhes sobre o `UnicoThemeBuilder`, consulte nossa a [API Reference](api/UnicoThemeBuilder) de nosso SDK Web. -->
</li>


<li>

### Configurar modo de captura e iniciar a camera

Finalmente, devemos iniciar a câmera com as configurações feitas até aqui. Para isto, criaremos uma instância de nosso **builder** através do método `build()`.

```javascript
const unicoCamera = unicoCameraBuilder.build();
```

A preparação da câmera será efetuada a partir do método `prepareSelfieCamera()`, disponibilizado a partir do **builder**. Este método recebe 2 parâmetros:
- O arquivo JSON com suas credenciais (Gerado através deste [guia](../como-comecar#criando-ou-editando-uma-api-key);
- Tipo de documento a ser capturado, sendo eles:
  - `DocumentCameraTypes.CNH`: Frame para captura de CNH.
  - `DocumentCameraTypes.CNH_FRENTE`: Frame para captura da frente da CNH.
  - `DocumentCameraTypes.CNH_VERSO`: Frame para captura do verso da CNH.
  - `DocumentCameraTypes.CPF`: Frame para captura CPF.
  - `DocumentCameraTypes.OUTROS("descrição")`: Frame somente com o retângulo onde pode ser usado para outros tipos de documentos. Neste tipo, haverá um parâmetro com a descrição do documento. (Ex. contrato)
  - `DocumentCameraTypes.RG_FRENTE`: Frame para captura da frente do RG.
  - `DocumentCameraTypes.RG_VERSO`: Frame para captura da parte traseira do RG.
  - `DocumentCameraTypes.RG_FRENTE_NOVO`: Frame para captura da frente do novo RG.
  - `DocumentCameraTypes.RG_VERSO_NOVO`: Frame para captura da parte traseira do novo RG.

Este método gera uma *promisse* que ao ser resolvida, devolve um objeto que será utilizado para efetivamente abrir a câmera através do método `open`, que recebe como parâmetro as funções de `callback` configuradas [neste passo](#configurar-funções-de-callback).

<!-- Entender o tipo do objeto do cameraOpener -->

Abaixo um exemplo utilizando a captura de CPF:

```javascript
const cameraPromised = unicoCamera.prepareDocumentCamera("/services.json",
DocumentCameraTypes.CNH);

cameraPromised.then(cameraOpener => cameraOpener.open(callback));
```



</li>

<li>

### Chamar nossas APIs

<<<<<<< HEAD
A captura das imagens é apenas a primeira parte da nossa jornada. Após a capturar, você deverá enviar o `JWT` gerado para nossas APIs, selecionando um dos fluxos disponíveis detalhados [nesta documentação](https://www3.acesso.io/identity/services/v3/docs). 
=======
A captura das imagens é apenas a primeira parte da nossa jornada. Após a capturar, você deverá enviar o `base64` gerado para nossas APIs, selecionando um dos fluxos disponíveis (detalhados [neste artigo](#)). Exemplo abaixo:

```bash
curl --location --request POST 'https://example.com/services/v3/AcessoService.svc/processes' \
--header 'APIKEY: 11111111-1111-1111-1111-111111111111' \
--header 'Authorization: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
  "subject": {
    "Code": "12345678910",
    "Name": "Bob",
    "Gender": "M",
    "BirthDate": "01/01/0001",
    "Email": "email@example.com",
    "Phone": "5543999999999"
  },
  "onlySelfie": true,
  "imagebase64": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAgSURBVDhPY/wPBAwUACYoTTYYNWDUABAYNWDgDWBgAABrygQclUTopgAAAABJRU5ErkJggg=="
}'

```

</li>

</ol>
</Steps>
>>>>>>> parent of 70d82be (Merge pull request #31 from unico-labs/MTruffi-patch-8)


## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Entre em contato através de nosso e-mail [suporte.unicocheck@unico.io](mailto:suporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos.

- [Guia para implantação de captura de Selfies](/guias/web/fluxos/captura-selfies);
<!-- - [API Reference do SDK](/guias/web/API); -->

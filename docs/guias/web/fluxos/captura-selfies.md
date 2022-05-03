---
sidebar_label: 'Captura de Selfies'
sidebar_position: 4
hide_title: true
---

<!-- TODO Arrumar regência dos títulos  -->

# Captura de Selfies

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

Nosso SDK é responsável por renderizar um frame contendo uma silhueta que se ajusta automaticamente com base na proporção da tela do usuário final. A captura da imagem para o captura de Selfies pode ser feita de três formas descritas ao longo desse guia. São elas:

### Captura Manual

Neste tipo de experiência existe um frame de captura para auxiliar o usuário a posicionar sua face corretamente. Após se posicionar corretamente, o usuário deve clicar em um botão para capturar a imagem. 

A SDK não efetua nenhum tipo de validação do que está sendo capturado. Caso a imagem capturada não possua uma face biométricamente válida, o `JWT` será recusado pelas APIs de nosso motor de biometria.

import imgCapturaManual from '/static/img/guias/img_cameranormal.png';

<img src={imgCapturaManual} alt="Captura Manual" className="imgCenter" />


### Captura Automática

Neste tipo de experiência, identificamos a face do usuário automaticamente através de algoritmos de visão computacional e o auxiliamos para que se posicione de forma correta dentro da área de captura. Após se posicionar corretamente, capturamos a imagem de forma automática.

Por ajudar o usuário a enquadrar sua face na área de captura, esta opção pode diminuir problemas ao enviar o `JWT` às APIs de nosso motor biométrico.

import imgCapturaAutomatica from '/static/img/guias/img_camerainteligente.png';

<img src={imgCapturaAutomatica} alt="Captura Manual" className="imgCenter" />

### Smartlive com interação Facetec

Neste tipo de experiência o usuário é instruído a realizar alguns movimentos simples durante a captura, que são acompanhados por algoritmos de visão computacional com o intuito de garantir que ele está tirando foto naquele momento.

Por exigir a movimentação do usuário este tipo de captura possui uma camada extra de segurança contra fraudes.
Tal como na Captura Automática a imagem é capturada sem a necessidade do usuário pressionar um botão. Desta forma tende a diminuir problemas ao enviar o `JWT` às APIs de nosso motor biométrico.

:::info Ativação do Smartlive com interação Facetec
Esta funcionalidade deve ser ativada através do portal do cliente, como explicado [neste artigo](../como-comecar#criando-ou-editando-uma-api-key).
:::

## Implementação
### Smartlive com interação Facetec

Também conhecido como prova de vida, neste tipo de experiência o usuário é instruído a realizar alguns movimentos simples durante a captura, que são acompanhados por algoritmos de visão computacional com o intuito de garantir que ele está tirando foto naquele momento. 

Por exigir a movimentação do usuário este tipo de captura possui uma camada extra de segurança contra fraudes.

:::info Ativação do Smartlive com interação Facetec
Esta funcionalidade deve ser ativada através do portal do cliente, como explicado [neste artigo](../como-comecar#criando-ou-editando-uma-api-key).
:::

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

Especifique o caminho dos arquivos dos modelos de IA, caso utilize a funcionalidade de Câmera Inteligente

```javascript
unicoCameraBuilder.setModelsPath("https://meusite.com.br/models");

```

</li>

<li>

### Configurar o tamanho do frame

:::note Passo não requerido para modo **Smartlive com interação Facetec**

Este passo só é necessário caso você **não** esteja utilizando o **Smartlive com interação Facetec**, pois neste modo o SDK renderiza um frame que ocupa todo o espaço da tela e se ajusta automaticamente.

:::

Caso não esteja utilizando **Smartlive com interação Facetec**, sugerimos que você configure o tamanho de nosso frame dentro de sua aplicação, a fim de otimizar a área de captura dentro de seu WebApp. Confira abaixo como fazer esta configuração para Web Desktop ou Mobile.

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

Este objeto é obrigatório e caso não seja corretamente implementado (contemplando todos os eventos de `success` ou `error`) irá gerar uma exceção, que caso não tratada, será exibida no console do usuário.

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

Em seguida, com a câmera "montada", iremos configurar o modo de captura da camera. Como explicamos [acima](captura-selfies#recursos-disponíveis) existem três modos de captura disponíveis.

Caso **não** esteja utilizando o modo **Smartlive com interação Facetec**, neste passo você poderá escolher entre o modo de captura **Manual** ou **Automático**.


:::tip Dica

Caso você esteja utilizando o modo **Smartlive com interação Facetec**, a configuração do tipo de câmera passa a ser irrelevante, pois este modo oferece uma experiência pré-definida que não pode ser alterada.

No entanto, sugerimos que você configure um tipo de câmera em seu builder (como descrito neste passo), pois caso você desabilite o modo **Liveness com interação Facetec** em seu portal do cliente (e gere um novo JSON), você não precisará alterar seu código.

:::

A preparação da câmera será efetuada a partir do método `prepareSelfieCamera()`, disponibilizado a partir do **builder**. Este método recebe 2 parâmetros:
- O arquivo JSON com suas credenciais (Gerado através deste [guia](../como-comecar#criando-ou-editando-uma-api-key);
- Modo de câmera desejado, sendo eles:
  - `SelfieCameraTypes.NORMAL` para o modo de câmera normal;
  - `SelfieCameraTypes.SMART` para o modo de câmera inteligênte;

Este método gera uma *promisse* que ao ser resolvida, devolve um objeto que será utilizado para efetivamente abrir a câmera através do método `open`, que recebe como parâmetro as funções de `callback` configuradas [neste passo](#configurar-funções-de-callback).


<!-- Entender o tipo do objeto do cameraOpener -->

<Tabs>
  <TabItem value="manual" label="Captura Manual" default>

#### Captura manual

Caso deseje utilizar a captura manual, passe o parâmetro `Unico.SelfieCameraTypes.NORMAL` para o método `prepareSelfieCamera`.

```javascript

  const cameraPromised = unicoCamera.prepareSelfieCamera("/services.json", SelfieCameraTypes.NORMAL);
  
  cameraPromised.then(cameraOpener => cameraOpener.open(callback));
```

  </TabItem>

  <TabItem value="automatico" label="Captura Automática">

#### Captura inteligente (automática)

Caso deseje utilizar a captura automática, passe o parâmetro `Unico.SelfieCameraTypes.SMART` para o método `prepareSelfieCamera`.

Para a captura inteligente, os modelos de visão computacional também devem ser carregados através do método `setModelsPath`, conforme explicado no primeiro passo deste guia.

```javascript
  const cameraPromised = unicoCamera.prepareSelfieCamera("/services.json", SelfieCameraTypes.SMART);

  cameraPromised.then(cameraOpener => cameraOpener.open(callback));
```

  </TabItem>
</Tabs>

</li>

<li>

### Chamar nossas APIs

A captura das imagens é apenas a primeira parte da nossa jornada. Após a capturar, você deverá enviar o `JWT` gerado para nossas APIs, selecionando um dos fluxos disponíveis detalhados [nesta documentação](https://www3.acesso.io/identity/services/v3/docs).


</li>

</ol>
</Steps>

## Ficou com dúvidas?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos.

- [Guia para implantação de captura de documentos](captura-selfies);
- [Artigo de referencias do SDK Web](../referencias);










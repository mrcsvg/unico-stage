---
sidebar_label: 'Captura de Selfies'
sidebar_position: 1
---

# Captura de Selfies

## Sobre este guia

Este guia foi elaborado para ajudá-lo a integrar nosso SDK Flutter de forma rápida e fácil. 
Buscamos trazer conceitos básicos, exemplos de implementação dos SDKs e também de como interagir com as APIs REST de nosso motor biométrico.

:::info Vale lembrar
Vale lembrar que este guia foca no processo de captura de imagens. Caso esteja buscando informações sobre as APIs REST do **Unico Check**, sugerimos que visite nosso [API Reference](https://www3.acesso.io/identity/services/v3/docs/), nosso guia de APIs ou nossa página de página [Visão Geral](../overview).
:::

Através deste guia, em poucos minutos você será capaz de:

- Implementar a abertura da câmera e captura de imagens;
- Entender como manipular os dados de retorno;
- Entender como utilizar o retorno de nosso SDK com nossas APIs;

## Antes de começar

Certifique-se que você seguiu nosso passo-a-passo para instalação e importação de nosso SDK através [deste guia](../como-comecar). É importante também ter em conta as funcionalidades disponíveis neste SDK, como explicado na página de [Visão Geral](../overview) deste SDK.

## Recursos disponíveis

Nosso SDK oferece um componente para captura de imagem contendo uma silhueta que ajuda o usuário a se posicionar de forma correta para a foto. A captura da imagem para o captura de Selfies pode ser feita de duas formas, descritas ao longo desse guia. Sendo elas:

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

Ao seguir este passo-a-passo, em poucos minutos você terá todo o potencial de nosso SDK embarcado em sua aplicação Flutter.

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>
<li>

### Inicializar nosso SDK

Para iniciar, crie uma instância do builder (gerado através da interface `UnicoCheckBuilder`, fornecendo como parâmetro o *contexto* em questão e a implementação da classe `UnicoListener`. 

A implementação dessa classe é bem simples e pode ser feita com poucas linhas de código. Tudo que precisa fazer é sobrescrever nossos métodos de callback com as lógicas de negócio de sua aplicação.

<!-- :::info Documentação Adicional
Você pode encontrar mais detalhes sobre a classe [AcessoBioListener](API#acessobiolistener) e sua implementação em nosso API Reference.
::: -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="dart" label="Dart" default>

```dart
class _MyHomePageState extends State<MyHomePage> implements UnicoListener {

    late UnicoCheckBuilder _unicoCheck;

    
      @override
      void onErrorUnico(UnicoError error) {}

      @override
      void onUserClosedCameraManually() {}

      @override
      void onSystemChangedTypeCameraTimeoutFaceInference() {}

      @override
      void onSystemClosedCameraTimeoutSession() {}
}
```

  </TabItem>

</Tabs>

**Implementação das funções de callback**

Note que, conforme o exemplo anterior, o trabalho de implementação da classe UnicoListener é, em grande parte, a configuração dos métodos de callback. Cada método será chamado em uma situação específica de retorno de nosso SDK, como detalhado abaixo. 

Basta sobrescrever os métodos exemplificados no passo anterior com as lógicas de negócio de sua aplicação:

#### `onErrorUnico(UnicoError error)`
Este método será invocado sempre quando qualquer erro de implementação ocorrer ao utilizar algum de nossos métodos, como por exemplo, ao informar um tipo de documento incorreto para a funcionalidade de captura de documentos.

Ao ser invocado, o método receberá um parâmetro do tipo `UnicoError` que contem detalhes do erro. Saiba mais sobre o tipo `UnicoError` em nosso documento de [referências](../referencias#unicoerror) de nosso SDK.

#### `onUserClosedCameraManually()`
Este método será invocado sempre quando o usuário fechar a câmera de forma manual, como por exemplo, ao clicar no botão "Voltar".

#### `onSystemClosedCameraTimeoutSession()`
Este método será invocado assim que o tempo máximo de sessão for atingido (Sem capturar nenhuma imagem).

:::info  Tempo máximo da sessão
O tempo máximo da sessão pode ser configurado em nosso **builder** através do método `setTimeoutSession`. Este método deve receber o tempo máximo da sessão em **segundos**.

<!-- Saiba mais sobre  método `setTimeoutSession()` no [API Reference](API#settimeoutsession) de nosso SDK. -->
:::

#### `onSystemChangedTypeCameraTimeoutFaceInference()`
Este método será invocado assim que o tempo máximo para detecção da face de um usuário for atingido (sem ter nada detectado). Neste caso, o modo de câmera é alterado automaticamente para o modo manual (sem o smart frame).


<!-- Para mais detalhes sobre os `listeners`, consulte nossa a [API Reference](API#acessobiolistener) de nosso SDK Flutter. -->

:::caution Atenção

Todos os métodos acima devem ser criados da forma indicada em seu projeto (mesmo que sem nenhuma lógica). Caso contrário, o projeto não compilará com sucesso.

:::

</li>

<li>

### Configurar modo da câmera

Em seguida, iremos configurar o modo de captura da camera. Como explicamos [acima](captura-selfies#recursos-disponíveis) existem três modos de captura disponíveis. Caso **não** esteja utilizando o modo **Smartlive com interação Facetec**, neste passo você poderá escolher entre o modo de captura **Manual** ou **Automático**.

:::tip Dica

Caso você esteja utilizando o modo **Smartlive com interação Facetec**, a configuração do tipo de câmera passa a ser irrelevante, pois este modo oferece uma experiência pré-definida que não pode ser alterada.

No entanto, sugerimos que você configure um tipo de câmera em seu builder (como descrito neste passo), pois caso você desabilite o modo **Liveness com interação Facetec** em seu portal do cliente (e gere um novo JSON), você não precisará alterar seu código.

:::

Nosso SDK tem configurado e habilitado por padrão o *enquadramento inteligente* e a *captura automática*. Para utilizar a câmera em modo normal, desabilite ambas funcionalidades através dos métodos `setAutoCapture` e `setSmartFrame`. Os exemplos a seguir demonstram como você pode configurar cada um dos modos de câmera.


----

#### Modo inteligente (Captura automática - Smart Camera)

Por padrão, nosso SDK possui o enquadramento inteligente e a captura automática habilitados. Caso decida utilizar este modo de câmera, não será necessário alterar nenhuma configuração. 

Caso as configurações da câmera tenham sido alteradas previamente em seu App, é possível restaurá-las através dos métodos `setAutoCapture` e `setSmartFrame`:

<Tabs>
<TabItem value="dart" label="Dart" default>

```dart

UnicoCheckCameraOpener _opener = new UnicoCheck (this)
    .setAutoCapture(autoCapture: true)
    .setSmartFrame(smartFrame: true)
    .build();

```
</TabItem>

</Tabs>

:::caution Atenção

Não é possível implementar o método `setAutoCapture(autoCapture: true)` com o método `setSmartFrame(smartFrame: false)`. Ou seja, não é possível manter a captura automática sem o Smart Frame, pois ele é quem realiza o enquadramento inteligênte.

:::

#### Modo manual 

Por padrão, nosso SDK possui o enquadramento inteligente e a captura automática habilitados. Neste caso, para utilizar o modo manual ambas configurações relacionadas a *Smart Camera* devem ser desligadas através dos métodos `setAutoCapture` e `setSmartFrame`:

<Tabs>
  <TabItem value="dart" label="Dart" default>

```dart {2-3}
UnicoCheckCameraOpener _opener = new UnicoCheck (this)
    .setAutoCapture(autoCapture: false)
    .setSmartFrame(smartFrame: false)
    .build();
```
  </TabItem>

</Tabs>

:::tip Dica - SmartFrame

Mesmo em modo manual é possível utilizar o Smart Frame. Neste caso, exibiremos a silhueta para identificar o enquadramento para então habilitar o botão. Para isto, basta configurar `setAutoCapture(autoCapture: false)` e `setSmartFrame(smartFrame: true)`

:::

</li>
<li>

### Customizar o frame de captura

:::note Passo opcional
Este é um passo opcional, porém recomendado. 
:::

Oferecemos a possibilidade de customização do frame de captura por meio do nosso SDK. Para customizar o frame, basta utilizar o método correspondente a propriedade a ser customizada, e posteriormente, aplicar o novo estilo através do método `setTheme()`.

Entenda um pouco mais sobre o método `setTheme()`, exemplos de utilização e o que pode ser customizado em nossa página de [Referências](../referencias#customizações) deste SDK.

</li>

<li>

### Efetuar abertura da câmera

O último passo é disparar a abertura da câmera. Vamos dividir este processo em algumas etapas:

#### Implementar listeners para eventos da câmera

O método de abertura da câmera precisa saber o que fazer ao conseguir capturar uma imagem ou ao ter algum erro no processo. Informaremos "o que fazer" ao método de abertura da câmera através da implantação de *listeners* que serão chamados em situações de sucesso ou erro.

Através da implementação dos *listeners*, você poderá especificar o que acontecerá em seu App em situações de erro (método `onErrorSelfie`) ou sucesso (método `onSuccessSelfie`) na captura de imagens.

##### Método `onSuccessSelfie`

```dart
@override
void onSuccessSelfie(ResultCamera result) { }
```

Ao efetuar uma captura de imagem com sucesso, este método será invocado e retornará um objeto do tipo `ResultCamera` que será utilizado posteriormente na chamada de nossas APIs REST. 

<!-- Saiba mais sobre o tipo `ResultCamera` no [API Reference](API#resultcamera) de nosso SDK. -->

##### Método `onErrorSelfie`

```dart
@override
void onErrorSelfie(UnicoError error) { }
```

Ao ocorrer algum erro na captura de imagem, este método será invocado e retornará um objeto do tipo [`UnicoError`](#). 

<!-- Saiba mais sobre o tipo `ErrorBio` no [API Reference](API#errorbio) de nosso SDK. -->

:::note Implementação dos listeners
A implementação destes métodos (*listeners*) deverá ser feita através de uma instância da classe `UnicoSelfie`.

<!-- Saiba mais sobre a classe `iAcessoBioSelfie` no [API Reference](API#iacessobioselfie) de nosso SDK. -->
:::

#### Abrir câmera
Devemos abrir a câmera utilizando o método `openCameraSelfie`. Este método recebe como parâmetro a implementação da classe `UnicoSelfie` e o JSON com as credenciais, gerado [nesse passo](../como-comecar).

O exemplo abaixo ilustra os passos acima (configuração dos listeners e abertura da câmera):

 <Tabs>
  <TabItem value="dart" label="Dart" default>

```dart
_opener.openCameraSelfie(jsonFileName: androidJsonFileName, listener: this)
```
  </TabItem>

</Tabs>

Em caso de sucesso, o objeto `ResultCamera` retornará 2 atributos: `base64` e `encrypted`. O

- O atributo `base64` pode ser utilizado caso você queira exibir um preview da imagem em seu app;
- O atributo `encrypted` deverá ser enviado na chamada de nossas APIs REST do **unico check** (detalhado [neste passo](#chamar-nossas-apis));  

</li>

<li>

### Chamar nossas APIs

A captura das imagens é apenas a primeira parte da nossa jornada. Após a capturar, você deverá enviar o `encrypted` gerado para nossas APIs, selecionando um dos fluxos disponíveis (detalhados [neste artigo](#)). Exemplo abaixo:

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

## Ficou com dúvidas?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos.

- [Guia para implantação de captura de documentos](captura-selfies);
<!-- - [API Reference do SDK](API); -->
















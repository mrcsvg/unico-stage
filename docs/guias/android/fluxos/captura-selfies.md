---
sidebar_label: 'Captura de Selfies'
sidebar_position: 1
---

# Captura de Selfies

## Sobre este guia

Este guia foi elaborado para ajudá-lo a integrar nosso SDK Android de forma rápida e fácil. 
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

Ao seguir este passo-a-passo, em poucos minutos você terá todo o potencial de nosso SDK embarcado em sua aplicação Android.

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>
<li>

### Inicializar nosso SDK

Para iniciar, crie uma instância do builder (gerado através da interface `IAcessoBioBuilder`, fornecendo como parâmetro o *contexto* em questão e a implementação da classe `AcessoBioListener`. 

A implementação dessa classe é bem simples e pode ser feita com poucas linhas de código. Tudo que precisa fazer é sobrescrever nossos métodos de callback com as lógicas de negócio de sua aplicação.

<!-- :::info Documentação Adicional
Você pode encontrar mais detalhes sobre a classe [AcessoBioListener](API#acessobiolistener) e sua implementação em nosso API Reference.
::: -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="java" label="Java" default>

```java
public class MainActivity extends AppCompatActivity {

    private AcessoBioListener callback = new AcessoBioListener() {
        @Override
        public void onErrorAcessoBio(ErrorBio errorBio) { }

        @Override
        public void onUserClosedCameraManually() { }

        @Override
        public void onSystemClosedCameraTimeoutSession() { }

        @Override
        public void onSystemChangedTypeCameraTimeoutFaceInference() { }
    };

    private IAcessoBioBuilder acessoBioBuilder = new AcessoBio(this, callback);
}
```

  </TabItem>

  <TabItem value="kotlin" label="Kotlin">

```kotlin
internal class MainActivity : AppCompatActivity() {

    private val callback = object : AcessoBioListener {
        override fun onErrorAcessoBio(errorBio: ErrorBio?) { }
    
        override fun onUserClosedCameraManually() { }
    
        override fun onSystemClosedCameraTimeoutSession() { }
    
        override fun onSystemChangedTypeCameraTimeoutFaceInference() { }
    }

    private val acessoBioBuilder: IAcessoBioBuilder = AcessoBio(this, callback)
}
```

  </TabItem>
</Tabs>

**Implementação das funções de callback**

Note que, conforme o exemplo anterior, o trabalho de implementação da classe AcessoBioListener é, em grande parte, a configuração dos métodos de callback. Cada método será chamado em uma situação específica de retorno de nosso SDK, como detalhado abaixo. 

Basta sobrescrever os métodos exemplificados no passo anterior com as lógicas de negócio de sua aplicação:

#### `onErrorAcessoBio(ErrorBio errorBio)`
Este método será invocado sempre quando qualquer erro de implementação ocorrer ao utilizar algum de nossos métodos, como por exemplo, ao informar um tipo de documento incorreto para a funcionalidade de captura de documentos.

Ao ser invocado, o método receberá um parâmetro do tipo `ErrorBio` que contem detalhes do erro. Saiba mais sobre o tipo `ErrorBio` em nosso documento de [referências](../referencias#errorbio) de nosso SDK.

#### `onUserClosedCameraManually()`
Este método será invocado sempre quando o usuário fechar a câmera de forma manual, como por exemplo, ao clicar no botão "Voltar".

#### `onSystemClosedCameraTimeoutSession()`
Este método será invocado assim que o tempo máximo de sessão for atingido (Sem capturar nenhuma imagem).

:::info  Tempo máximo da sessão
O tempo máximo da sessão pode ser configurado em nosso **builder** através do método `setTimeoutSession`. Este método deve receber uma o tempo máximo da sessão em **segundos**.

<!-- Saiba mais sobre  método `setTimeoutSession()` no [API Reference](API#settimeoutsession) de nosso SDK. -->
:::

#### `onSystemChangedTypeCameraTimeoutFaceInference()`
Este método será invocado assim que o tempo máximo para detecção da face de um usuário for atingido (sem ter nada detectado). Neste caso, o modo de câmera é alterado automaticamente para o modo manual (sem o smart frame).


<!-- Para mais detalhes sobre os `listeners`, consulte nossa a [API Reference](API#acessobiolistener) de nosso SDK Android. -->

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
<TabItem value="java" label="Java" default>

```java

UnicoCheckCamera unicoCheckCamera = acessoBioBuilder
    .setAutoCapture(true)
    .setSmartFrame(true)
    .build();

```
</TabItem>

<TabItem value="kotlin" label="Kotlin">


```kotlin

val unicoCheckCamera: UnicoCheckCamera = acessoBioBuilder
    .setAutoCapture(true)
    .setSmartFrame(true)
    .build()

```

</TabItem>
</Tabs>

:::caution Atenção

Não é possível implementar o método `setAutoCapture(true)` com o método `setSmartFrame(false)`. Ou seja, não é possível manter a captura automática sem o Smart Frame, pois ele é quem realiza o enquadramento inteligênte.

:::

#### Modo manual 

Por padrão, nosso SDK possui o enquadramento inteligente e a captura automática habilitados. Neste caso, para utilizar o modo manual ambas configurações relacionadas a *Smart Camera* devem ser desligadas através dos métodos `setAutoCapture` e `setSmartFrame`:

<Tabs>
  <TabItem value="java" label="Java" default>

```java {2-3}
UnicoCheckCamera unicoCheckCamera = acessoBioBuilder
    .setAutoCapture(false)
    .setSmartFrame(false)
    .build();
```
  </TabItem>

  <TabItem value="kotlin" label="Kotlin">

```kotlin {2-3}
val unicoCheckCamera: UnicoCheckCamera = acessoBioBuilder
    .setAutoCapture(false)
    .setSmartFrame(false)
    .build()
```

  </TabItem>
</Tabs>

:::tip Dica - SmartFrame

Mesmo em modo manual é possível utilizar o Smart Frame. Neste caso, exibiremos a silhueta para identificar o enquadramento para então habilitar o botão. Para isto, basta configurar `setAutoCapture=false` e `setSmartFrame=true`

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

### Configurar credenciais
É necessário informar as credenciais geradas na API Key para que a SDK funcione, para isso utilizaremos uma classe de configuração (AcessoBioConfigDataSource). A codificação da classe pode seguir como o exemplo abaixo:

#### Implementação por classe
 <Tabs>
  <TabItem value="java" label="Java" default>

```java
AcessoBioConfigDataSource unicoConfig = new AcessoBioConfigDataSource() {

    @Override
    public String getHostKey() {
        return HOST_KEY;
    }

    @Override
    public String getHostInfo() {
        return HOST_INFO;
    }

    @Override
    public String getBundleIdentifier() {
        return BUNDLE_IDENTIFIER;
    }

    @Override
    public String getMobileSdkAppId() {
        return MOBILE_SDK_APP_ID;
    }

    @Override
    public String getProjectId() {
        return PROJECT_ID;
    }

    @Override
    public String getProjectNumber() {
        return PROJECT_NUMBER;
    }
};
```
</TabItem>
  <TabItem value="kotlin" label="Kotlin">

```kotlin
val unicoConfig = object : AcessoBioConfigDataSource {
    override fun getProjectNumber(): String {
        return PROJECT_NUMBER
    }

    override fun getProjectId(): String {
        return PROJECT_ID
    }

    override fun getMobileSdkAppId(): String {
        return MOBILE_SDK_APP_ID
    }

    override fun getBundleIdentifier(): String {
        return BUNDLE_IDENTIFIER
    }

    override fun getHostInfo(): String {
        return HOST_INFO
    }

    override fun getHostKey(): String {
        return HOST_KEY
    }
}
```
  </TabItem>
</Tabs>
</li>

<li>

### Efetuar abertura da câmera

O último passo é disparar a abertura da câmera. Vamos dividir este processo em algumas etapas:

#### Implementar listeners para eventos da câmera

O método de abertura da câmera precisa saber o que fazer ao conseguir capturar uma imagem ou ao ter algum erro no processo. Informaremos "o que fazer" ao método de abertura da câmera através da implantação de *listeners* que serão chamados em situações de sucesso ou erro.

Através da implementação dos *listeners*, você poderá especificar o que acontecerá em seu App em situações de erro (método `onErrorSelfie`) ou sucesso (método `onSuccessSelfie`) na captura de imagens.

##### Método `onSuccessSelfie`

```javascript
public void onSuccessSelfie(ResultCamera result) { }
```

Ao efetuar uma captura de imagem com sucesso, este método será invocado e retornará um objeto do tipo `ResultCamera` que será utilizado posteriormente na chamada de nossas APIs REST. 

<!-- Saiba mais sobre o tipo `ResultCamera` no [API Reference](API#resultcamera) de nosso SDK. -->

##### Método `onErrorSelfie`

```javascript
public void onErrorSelfie(ErrorBio errorBio) { }
```

Ao ocorrer algum erro na captura de imagem, este método será invocado e retornará um objeto do tipo [`ErrorBio`](#). 

<!-- Saiba mais sobre o tipo `ErrorBio` no [API Reference](API#errorbio) de nosso SDK. -->

:::note Implementação dos listeners
A implementação destes métodos (*listeners*) deverá ser feita através de uma instância da classe `iAcessoBioSelfie`.

<!-- Saiba mais sobre a classe `iAcessoBioSelfie` no [API Reference](API#iacessobioselfie) de nosso SDK. -->
:::

#### Preparar e abrir câmera
Devemos preparar a câmera para abertura utilizando o método `prepareSelfieCamera`. Este método recebe como parâmetro a implementação da classe `SelfieCameraListener` e a classe ou JSON com as credenciais, gerado [nesse passo](../como-comecar).

Quando estiver tudo certo, dispararemos um evento que deverá ser tratado através do método `onCameraReady`, que recebe como parâmetro um objeto do tipo `UnicoCheckCameraOpener.Selfie`. Você deverá sobrescrever este método, efetuando a abertura da câmera com o objeto recebido, através do método `open()`. O método `open()` deverá receber como parâmetro os *listeners* configurados nos passos acima.

O exemplo abaixo ilustra os passos acima (configuração dos listeners e abertura da câmera):

 <Tabs>
  <TabItem value="java" label="Java" default>

```java
iAcessoBioSelfie cameraListener = new iAcessoBioSelfie() {
    @Override
    public void onSuccessSelfie(ResultCamera result) { }

    @Override
    public void onErrorSelfie(ErrorBio errorBio) { }
};

unicoCheckCamera.prepareSelfieCamera(unicoConfig, new SelfieCameraListener() {
    @Override
    public void onCameraReady(UnicoCheckCameraOpener.Selfie cameraOpener) {
        cameraOpener.open(cameraListener);
    }

    @Override
    public void onCameraFailed(String message) {
        Log.e(TAG, message);
    }
});
```
  </TabItem>

  <TabItem value="kotlin" label="Kotlin">

```kotlin
val cameraListener: iAcessoBioSelfie = object : iAcessoBioSelfie {
    override fun onSuccessSelfie(result: ResultCamera?) {}

    override fun onErrorSelfie(errorBio: ErrorBio?) {}
}

unicoCheckCamera.prepareSelfieCamera(unicoConfig, object : SelfieCameraListener {
    override fun onCameraReady(cameraOpener: UnicoCheckCameraOpener.Selfie?) {
        cameraOpener?.open(cameraListener)
    }

    override fun onCameraFailed(message: String?) {
        Log.e(TAG, message)
    }
})
```

  </TabItem>
</Tabs>

Em caso de sucesso, o objeto `ResultCamera` retornará 2 atributos: `base64` e `encrypted`. O

- O atributo `base64` pode ser utilizado caso você queira exibir um preview da imagem em seu app;
- O atributo `encrypted` deverá ser enviado na chamada de nossas APIs REST do **unico check** (detalhado [neste passo](#chamar-nossas-apis));  


:::caution Conversão do base64 para Bitmap
Caso queira converter o base64 para bitmap, a maneira padrão não funcionará para o Android. Será  necessário realizar o split a partir da vírgula(`,`) para que funcione. Caso queira saber mais, sugerimos a leitura do seguinte artigo [How to convert a Base64 string into a Bitmap image to show it in a ImageView?](https://stackoverflow.com/questions/4837110/how-to-convert-a-base64-string-into-a-bitmap-image-to-show-it-in-a-imageview)
:::

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
<!-- - [API Reference do SDK](API); -->
















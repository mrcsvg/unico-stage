---
sidebar_label: 'Captura de Selfies'
sidebar_position: 1
---

# Captura de Selfies

## Sobre este guia

Este guia foi elaborado para ajudá-lo a integrar nosso SDK iOS de forma rápida e fácil. 
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

Ao seguir este passo-a-passo, em poucos minutos você terá todo o potencial de nosso SDK embarcado em sua aplicação iOS.

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>
<li>

### Inicializar nosso SDK

Para iniciar com SDK iOS do **Unico Check**, importe nosso SDK e implemente a interface `AcessoBioManagerDelegate` dentro da *ViewController* que deseja utilizar.

A implementação dessa classe é bem simples e pode ser feita com poucas linhas de código. Tudo que precisa fazer é instanciar nosso *builder* informando o contexto em questão e sobrescrever nossos métodos de callback com as lógicas de negócio de sua aplicação:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec
.m:
#import "ViewController.h"
#import <AcessoBio/AcessoBio.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
   
    unicoCheck = [[AcessoBioManager alloc]initWithViewController:self];
}
   
- (void)onErrorAcessoBioManager:(ErrorBio *)error {
    code
}

- (void)onSystemChangedTypeCameraTimeoutFaceInference {
    code
}

- (void)onSystemClosedCameraTimeoutSession {
    code
}

- (void)onUserClosedCameraManually {
    code
}
```

  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
import UIKit
import AcessoBio

class ViewController: UIViewController, AcessoBioManagerDelegate {

  var unicoCheck: AcessoBioManager!

  override func viewDidLoad() {
    super.viewDidLoad()
    
    unicoCheck = AcessoBioManager(viewController: self)
  }

  func onErrorAcessoBioManager(_ error: ErrorBio!) {
      // your code
  } 
  func onUserClosedCameraManually() {
      // your code
  }
  func onSystemClosedCameraTimeoutSession() {
      // your code
  }
  func onSystemChangedTypeCameraTimeoutFaceInference() {
      // your code 
  }
}     
```

  </TabItem>
</Tabs>

Note que, conforme o exemplo anterior, o trabalho de implementação da interface `AcessoBioManagerDelegate` é, em grande parte, a configuração dos métodos de callback. Cada método será chamado em uma situação específica de retorno de nosso SDK, como detalhado abaixo. Basta sobrescrever os métodos exemplificados no passo anterior com as lógicas de negócio de sua aplicação. 

##### Método `onErrorAcessoBioManager(_ error: ErrorBio!)`
Este método será invocado sempre quando qualquer erro de implementação ocorrer ao utilizar algum de nossos métodos, como por exemplo, ao informar um tipo de documento incorreto para a funcionalidade de captura de documentos.

Ao ser invocado, o método receberá um parâmetro do tipo `ErrorBio` que contem detalhes do erro. Saiba mais sobre o tipo `ErrorBio` no artigo de [Referências](../referencias#objeto-errorbio) deste SDK.

##### Método `onUserClosedCameraManually()`
Este método será invocado sempre quando o usuário fechar a câmera de forma manual, como por exemplo, ao clicar no botão "Voltar".

##### Método `onSystemClosedCameraTimeoutSession()`
Este método será invocado assim que o tempo máximo de sessão for atingido (Sem capturar nenhuma imagem).

<!-- :::info  Tempo máximo da sessão
O tempo máximo da sessão pode ser configurado em nosso **builder** através do método `setTimeoutSession`. Saiba mais sobre  método `setTimeoutSession()` no [API Reference](API#settimeoutsession) de nosso SDK.
::: -->

<!-- TODO Criar conteúdo acima nas referencias -->

##### Método `onSystemChangedTypeCameraTimeoutFaceInference()`

Este método será invocado assim que o tempo máximo para detecção da face de um usuário for atingido (sem ter nada detectado). Neste caso, o modo de câmera é alterado automaticamente para o modo manual (sem o smart frame).






:::caution Atenção

Todos os métodos acima devem ser criados da forma indicada em seu projeto (mesmo que sem nenhuma lógica). Caso contrário, o projeto não compilará com sucesso.

:::

</li>



<li>

### Configurar modo da câmera

Em seguida, iremos configurar o modo de captura da camera. Como explicamos [acima](captura-selfies#recursos-disponíveis) existem três modos de captura disponíveis. Caso **não** esteja utilizando o modo **Smartlive com interação Facetec**, neste passo você poderá escolher entre o modo de captura **Manual** ou **Automático**.

:::tip Dica - Smartlive com interação Facetec

Caso você esteja utilizando o modo **Smartlive com interação Facetec**, a configuração do tipo de câmera passa a ser irrelevante, pois este modo oferece uma experiência pré-definida que não pode ser alterada.

No entanto, sugerimos que você configure um tipo de câmera em seu builder (como descrito neste passo), pois caso você desabilite o modo **Liveness com interação Facetec** em seu portal do cliente (e gere um novo JSON), você não precisará alterar seu código.

:::

Nosso SDK tem configurado e habilitado por padrão o *enquadramento inteligente* e a *captura automática*. Para utilizar a câmera em modo normal, desabilite ambas funcionalidades através dos métodos `setAutoCapture` e `setSmartFrame`, através do objeto da classe `AcessoBioManager` gerado no [passo acima](#inicializar-nosso-sdk). 

Os exemplos a seguir demonstram como você poderia configurar cada um dos modos de câmera a partir da ação de um botão em sua UI:

#### Modo inteligente (Captura automática - Smart Camera)

Por padrão, nosso SDK possui o enquadramento inteligente e a captura automática habilitados. Caso decida utilizar este modo de câmera, não será necessário alterar nenhuma configuração. 

Caso as configurações da câmera tenham sido alteradas previamente em seu App, é possível restaurá-las através dos métodos `setAutoCapture` e `setSmartFrame`:

<Tabs>
<TabItem value="objectivec" label="Objective-C" default>

```objectivec {5,6}
.m:
- (IBAction)configureSmartCamera:(UIButton *)sender {

    // Objeto unicoCheck da classe AcessoBioManager
    [unicoCheck setSmartFrame:true];
    [unicoCheck setAutoCapture:true];

}
```
</TabItem>

<TabItem value="swift" label="Swift">


```swift {4,5}
@IBAction func configureSmartCamera(_ sender: Any) 

    // Objeto unicoCheck da classe AcessoBioManager
    unicoCheck.setSmartFrame(true)
    unicoCheck.setAutoCapture(true)    
}
```

</TabItem>
</Tabs>

:::caution Atenção

Não é possível implementar o método `setAutoCapture(true)` com o método `setSmartFrame(false)`. Ou seja, não é possível manter a captura automática sem o Smart Frame, pois ele é quem realiza o enquadramento inteligente.

:::

#### Modo manual 

Por padrão, nosso SDK possui o enquadramento inteligente e a captura automática habilitados. Neste caso, para utilizar o modo manual ambas configurações relacionadas a *Smart Camera* devem ser desligadas através dos métodos `setAutoCapture` e `setSmartFrame`:

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec {5-6}
.m:
- (IBAction)configureSmartCamera:(UIButton *)sender {

    // Objeto unicoCheck da classe AcessoBioManager
    [unicoCheck setSmartFrame:false];
    [unicoCheck setAutoCapture:false];

}

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift {4-5}
@IBAction func configureSmartCamera(_ sender: Any) {

    // Objeto unicoCheck da classe AcessoBioManager
    unicoCheck.setSmartFrame(false)
    unicoCheck.setAutoCapture(false)    
}

```

  </TabItem>
</Tabs>

:::tip Dica - SmartFrame

Mesmo em modo manual é possível utilizar o Smart Frame. Neste caso, exibiremos a silhueta para identificar o enquadramento para então habilitar o botão. Para isto, basta configurar `setAutoCapture=false` e `setSmartFrame=true`

:::

</li>


<li> 

### Implementar *delegates* para eventos da câmera

O método de abertura da câmera (que será chamado no próximo passo) precisa saber o que fazer ao conseguir capturar uma imagem com **sucesso** ou ao ter algum **erro** no processo. Informaremos "o que fazer" ao método de abertura da câmera através da configuração de *delegates* que serão chamados em situações de sucesso ou erro.

Através da configuração dos *delegates*, você poderá especificar o que acontecerá em seu App em situações de erro (método `onErrorSelfie`) ou sucesso (método `onSuccessSelfie`) na captura de imagens.

Para a configuração dos *delegates*, você deverá também deverá implementar as interfaces `SelfieCameraDelegate` e `AcessoBioSelfieDelegate`:

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 
.h:
#import <UIKit/UIKit.h>
#import <AcessoBio/AcessoBio.h>
#import "SelfieCameraDelegate.h"

@interface ViewController : UIViewController < AcessoBioManagerDelegate,
          // highlight-start
          SelfieCameraDelegate, 
          AcessoBioSelfieDelegate> {
          // highlight-end

    AcessoBioManager *unicoCheck;
    // Your code from previous and next steps here ;)     
}


```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
import UIKit
import AcessoBio

class ViewController: UIViewController, 
                      AcessoBioManagerDelegate, 
                      // highlight-start
                      SelfieCameraDelegate, 
                      AcessoBioSelfieDelegate {
                        // highlight-end
    
  //Your code from previous and next steps here ;) 
}
```

  </TabItem>
</Tabs>





#### Método `onSuccessSelfie`

Ao efetuar uma captura de imagem com **sucesso**, este método será invocado e retornará um objeto do tipo `SelfieResult` que será utilizado posteriormente na chamada de nossas APIs REST. 

<!-- Saiba mais sobre o tipo `SelfieResult` no [API Reference](API#SelfieResult) de nosso SDK. -->

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 

- (void)onSuccessSelfie:(SelfieResult *)result {
    NSLog(@"%@", result.base64);
}  

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

func onSuccessSelfie(_ result: SelfieResult!) {
    // your code
 }

```

  </TabItem>
</Tabs>

O objeto `SelfieResult` retornará 2 atributos: `base64` e `encrypted`:

- O atributo `base64` pode ser utilizado caso você queira exibir um preview da imagem em seu app;
- O atributo `encrypted` deverá ser enviado na chamada de nossas APIs REST do **unico check** (detalhado [neste passo](#chamar-nossas-apis));  

:::caution Conversão do base64 para Bitmap
Caso queira converter o base64 para bitmap, a maneira padrão não funcionará para o iOS. Será  necessário realizar o split a partir da vírgula(`,`) para que funcione. Caso queira saber mais, sugerimos a leitura do seguinte artigo:
> [How to convert a Base64 string into a Bitmap image to show it in a ImageView?](https://stackoverflow.com/questions/4837110/how-to-convert-a-base64-string-into-a-bitmap-image-to-show-it-in-a-imageview)
:::






#### Método `onErrorSelfie`

Ao ocorrer algum erro na captura de imagem, este método será invocado e retornará um objeto do tipo `ErrorBio`. 

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 

- (void)onErrorSelfie:(ErrorBio *)errorBio {
    // Your code
}

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

func onErrorSelfie(_ errorBio: ErrorBio!) {
    // Your code
 }

```

  </TabItem>
</Tabs>

:::info Saiba mais
Saiba mais sobre o tipo `ErrorBio` em nossa página de [Referências](../referencias#objeto-errorbio) deste SDK.
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

### Preparar e abrir câmera

Para seguir com a abertura da câmera, primeiro devemos prepará-la utilizando o método `prepareSelfieCamera`. Este método recebe como parâmetro a implementação da classe `SelfieCameraDelegate` e o JSON com as credenciais, gerado [nesse passo](#../como-comecar).


<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

<!-- TODO Obter exemplo em objective c  -->

```objectivec 
.h:
#import <UIKit/UIKit.h>
#import <AcessoBio/AcessoBio.h>
#import "SelfieCameraDelegate.h"

@interface ViewController : UIViewController < AcessoBioManagerDelegate,
SelfieCameraDelegate, AcessoBioSelfieDelegate> {

    AcessoBioManager *unicoCheck;
}

.m:
- (IBAction)openCamera:(UIButton *)sender {

    // with AcessoBioConfigDataSource implementation
    [[unicoCheck build] prepareSelfieCamera:self config: [YourUnicoConfigClass new]];

    // or

    // with JSON config
    [[unicoCheck build] prepareSelfieCamera:self jsonConfigName: @""];
}

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
import UIKit
import AcessoBio

class ViewController: UIViewController, AcessoBioManagerDelegate, 
SelfieCameraDelegate, AcessoBioSelfieDelegate {

    @IBAction func openCamera(_ sender: Any) {

        // with AcessoBioConfigDataSource implementation
        unicoCheck.build().prepareSelfieCamera(self, config: YourUnicoConfigClass())

        // or

        // with JSON config
        unicoCheck.build().prepareSelfieCamera(self, jsonConfigName:
        "json-credenciais.json")
    }
}
```

  </TabItem>
</Tabs>

Quando a câmera estiver preparada, dispararemos o evento `onCameraReady`, que recebe como parâmetro um objeto do tipo `AcessoBioCameraOpenerDelegate`. 

Você deverá sobrescrever este método, efetuando a abertura da câmera com o objeto recebido através do método `open()`:


<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

<!-- TODO Obter exemplo em objective c  -->

```objectivec 
- (void)onCameraReady:(id)cameraOpener {
    [cameraOpener open:self];
}

- (void)onCameraFailed:(NSString *)message {
    code
}
```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
func onCameraReady(_ cameraOpener: AcessoBioCameraOpenerDelegate!) {
    cameraOpener.open(self)
 }
 
func onCameraFailed(_ message: String!) {
    code
 }
```

  </TabItem>
</Tabs>

Caso ocorra algum erro ao preparar a câmera, o evento `onCameraFailed` será disparado. Você devem implementar este método aplicando as regras de negócio de seu App.

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
















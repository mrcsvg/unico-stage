---
sidebar_label: 'Captura de documentos'
sidebar_position: 2
---

# Reconhecimento facial

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

Nosso SDK é responsável por renderizar um frame contendo uma silhueta que se ajusta automaticamente com base na proporção da tela do usuário final. Possibilitamos a captura dos seguintes tipos de documentos:

- **CNH:** Captura da CNH aberta;
- **CPF:** Captura do documento de CPF;
- **RG frente:** Captura da frente do RG;
- **RG verso:** Captura do verso do RG;
- **Novo RG frente:** Captura a frente do novo tipo de RG;
- **Novo RG verso:** Captura o verso do novo tipo de RG;
- **Outros:** Captura documento genérico. Para este tipo de captura você deve informar o título do documento que será mostrado na captura para o usuário usando a propriedade `optional.LABEL_DOCUMENT_TYPE_OTHERS`.

import imgDocumento from '/static/img/guias/img_documentos.png';

<img src={imgDocumento} alt="Captura Manual" className="imgCenter" />


## Implementação

Ao seguir este passo-a-passo, em poucos minutos você terá todo o potencial de nosso SDK embarcado em sua aplicação iOS.

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>
<li>

### Inicializar nosso SDK

Para iniciar com SDK iOS do **Unico Check**, importe nosso SDK e implemente a interface `AcessoBioManagerDelegate` dentro da *ViewController* que deseja utilizar.

A implementação dessa classe é bem simples e pode ser feita com poucas linhas de código. Tudo que precisa fazer é intanciar nosso *builder* informando o contexto em questão e sobrescrever nossos métodos de callback com as lógicas de negócio de sua aplicação:

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


:::caution Atenção

Todos os métodos acima devem devem ser criados da forma indicada em seu projeto (mesmo que sem nenhuma lógica). Caso contrário, o projeto não compilará com sucesso.

:::

</li>


<li> 

### Implementar listeners para eventos da câmera

O método de abertura da câmera (que será chamado no próximo passo) precisa saber o que fazer ao conseguir capturar uma imagem com **sucesso** ou ao ter algum **erro** no processo. Informaremos "o que fazer" ao método de abertura da câmera através da configuração de *listeners* que serão chamados em situações de sucesso ou erro.

Através da configuração dos *listeners*, você poderá especificar o que acontecerá em seu App em situações de erro (método `onErrorDocument`) ou sucesso (método `onSuccessDocument`) na captura de imagens.

Para a configuração dos *listeners*, você deverá também deverá implementar as interfaces `DocumentCameraDelegate` e `AcessoBioDocumentDelegate`:

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 
.h:
#import <UIKit/UIKit.h>
#import <AcessoBio/AcessoBio.h>
#import "SelfieCameraDelegate.h"

@interface ViewController : UIViewController < AcessoBioManagerDelegate,
          // highlight-start
          DocumentCameraDelegate, 
          AcessoBioDocumentDelegate> {
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
                      DocumentCameraDelegate, 
                      AcessoBioDocumentDelegate {
                        // highlight-end
    
  //Your code from previous and next steps here ;) 
}
```

  </TabItem>
</Tabs>

#### Método `onSuccessDocument`

Ao efetuar uma captura de imagem com **sucesso**, este método será invocado e retornará um objeto do tipo `ResultCamera` que será utilizado posteriormente na chamada de nossas APIs REST. 

<!-- Saiba mais sobre o tipo `ResultCamera` no [API Reference](API#resultcamera) de nosso SDK. -->

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 

- (void)onSuccessDocument:(DocumentResult *)result {
    NSLog(@"%@", result.base64);
}  

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

func onSuccessDocument(_ result: DocumentResult!) {
    // your code
 }

```

  </TabItem>
</Tabs>

O objeto `ResultCamera` retornará 2 atributos: `base64` e `encrypted`:

- O atributo `base64` pode ser utilizado caso você queira exibir um preview da imagem em seu app;
- O atributo `encrypted` deverá ser enviado na chamada de nossas APIs REST do **unico check** (detalhado [neste passo](#chamar-nossas-apis));  

:::caution Conversão do base64 para Bitmap
Caso queira converter o base64 para bitmap, a maneira padrão não funcionará para o iOS. Será  necessário realizar o split a partir da vírgula(`,`) para que funcione. Caso queira saber mais, sugerimos a leitura do seguinte artigo:
> [How to convert a Base64 string into a Bitmap image to show it in a ImageView?](https://stackoverflow.com/questions/4837110/how-to-convert-a-base64-string-into-a-bitmap-image-to-show-it-in-a-imageview)
:::






#### Método `onErrorDocument`

Ao ocorrer algum erro na captura de imagem, este método será invocado e retornará um objeto do tipo `ErrorBio`. 

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 

- (void)onErrorDocument:(ErrorBio *)errorBio {
    // Your code
}

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

func onErrorDocument(_ errorBio: ErrorBio!) {
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

### Preparar e abrir câmera

Para seguir com a abertura da câmera, primeiro devemos prepará-la utilizando o método `prepareDocumentCamera`. Este método recebe como parâmetro a implementação da classe `DocumentCameraDelegate` e o JSON com as credenciais, gerado [nesse passo](#../como-comecar).


<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

<!-- TODO Obter exemplo em objective c  -->

```objectivec 
.h:
#import <UIKit/UIKit.h>
#import <AcessoBio/AcessoBio.h>
#import "SelfieCameraDelegate.h"

@interface ViewController : UIViewController < AcessoBioManagerDelegate,
DocumentCameraDelegate, AcessoBioDocumentDelegate> {

    AcessoBioManager *unicoCheck;
}

.m:
- (IBAction)openCamera:(UIButton *)sender {

    [[unicoCheck build]prepareDocumentCamera:self];

}

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
import UIKit
import AcessoBio

class ViewController: UIViewController, AcessoBioManagerDelegate, 
DocumentCameraDelegate, AcessoBioDocumentDelegate {

    @IBAction func openCamera(_ sender: Any) {

        unicoCheck.build().prepareDocumentCamera(self, jsonConfigName:
        "json-credenciais.json")
    }
}
```

  </TabItem>
</Tabs>

Quando a câmera estiver preparada, dispararemos o evento `onCameraReadyDocument`, que recebe como parâmetro um objeto do tipo `AcessoBioCameraOpenerDelegate`. 

Você deverá sobrescrever este método, efetuando a abertura da câmera com o objeto recebido através do método `openDocument()`, informando os seguintes parâmetros:

- Tipo de documento a ser capturado, sendo eles:
  - `DocumentEnums.CNH`: Frame para captura de CNH.
  - `DocumentEnums.CPF`: Frame para captura CPF.
  - `DocumentEnums.RG`: Frame para captura do RG.
  - `DocumentEnums.rgFrente`: Frame para captura da parte da frente do RG.
  - `DocumentEnums.rgVerso`: Frame para captura da parte traseira do RG.
  - `DocumentEnums.none`: Frame para captura de documento genérico, sem nenhuma silhueta.
- Os listeners configurados [acima](#implementar-listeners-para-eventos-da-câmera) (aqui descritos como Self);


<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

<!-- TODO Obter exemplo em objective c  -->

```objectivec 
- (void)onCameraReadyDocument:(id)cameraOpener {
    [cameraOpener openDocument:DocumentCNH delegate:self];
}

- (void)onCameraFailedDocument:(NSString *)message {
    code
}
```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift
func onCameraReadyDocument(_ cameraOpener: AcessoBioCameraOpenerDelegate!) {
    cameraOpener.openDocument(
        DocumentEnums.CNH, 
        delegate: self
    )
}
 
func onCameraFailedDocument(_ message: String!) {
    code
}
```

  </TabItem>
</Tabs>

Caso ocorra algum erro ao preparar a câmera, o evento `onCameraFailedDocument` será disparado. Você deve implementar este método aplicando as regras de negócio de seu App.

Em caso de sucesso, o evento `onSuccessDocument` será disparado, conforme explicado [neste passo](#método-onsuccessdocument).

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

- Entre em contato através de nosso e-mail [suporte.unicocheck@unico.io](mailto:suporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos.

- [Guia para implantação de captura de documentos](reconhecimento-facial);
<!-- - [API Reference do SDK](API); -->
















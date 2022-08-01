---
sidebar_label: 'Referências'
sidebar_position: 8
hide_title: false
---

# Referências

## Sobre este guia

Este guia referencia todos os métodos e objetos disponíveis no SDK iOS do **Unico Check**.

:::note Estamos em melhoria constante!

Atualmente disponibilizamos apenas alguns objetos e snippets de código que podem ser úteis para sua integração. Temos como objetivo evoluir este artigo para um API reference completo.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Customizações

Nossa SDK conta com métodos de customização a fim de personalizar a experiência de acordo com o identidade visual de cada cliente. Segue a lista de métodos que podem ser facilmente implementadas:

### Métodos disponíveis

#### Método `getColorSilhouetteSuccess()`
Método utilizado para customizar a cor de sucesso da silhueta.
#### Método `getColorSilhouetteError()`
Método utilizado para customizar a cor de erro da silhueta.
#### Método `getColorBackground()`
Método utilizado para customizar a cor de fundo da silhueta.
#### Método `getColorBoxMessage()`
Método utilizado para customizar a cor de fundo da mensagem.
#### Método `getColorTextMessage()`
Método utilizado para customizar a cor de texto da mensagem.
#### Método `getColorTextPopupError()`
Método utilizado para customizar a cor de texto e ícones do popup.
#### Método `getColorBackgroundPopupError()`
Método utilizado para customizar a cor de fundo do popup.
#### Método `getColorBackgroundButtonPopupError()`
Método utilizado para customizar a cor de fundo do botão do popup.
#### Método `getColorTextButtonPopupError()`
Método utilizado para customizar a cor de texto do botão do popup.
#### Método `getColorBackgroundTakePictureButton()`
Método utilizado para customizar a cor de fundo do botão de tirar foto manualmente.
#### Método `getColorIconTakePictureButton()`
Método utilizado para customizar a cor de ícone do botão de tirar foto manualmente.
#### Método `getColorBackgroundBottomDocument()`
Método utilizado para customizar a cor de fundo do box na captura de documentos.
#### Método `getColorTextBottomDocument()`
Método utilizado para customizar a cor de texto do box na captura de documentos.
#### Método `getImageIconPopupError()`
Método utilizado para customizar o ícone do Popup de erro, exibido quando a face é posicionada de forma incorreta no frame de captura.


### Exemplos de utilização

Abaixo alguns exemplos de como você pode chamar os métodos acima em seu projeto.

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec 

.h:
#import "AcessoBioThemeDelegate.h"

@interface ViewController : UIViewController  {

@end

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

- (id)getColorBackground {
    code
}

- (id)getColorBackgroundBottomDocument {
    code
}

- (id)getColorBackgroundButtonPopupError {
    code
}

- (id)getColorBackgroundPopupError {
    code
}

- (id)getColorBackgroundTakePictureButton {
    code
}

- (id)getColorBoxMessage {
    code
}

- (id)getColorIconTakePictureButton {
    code
}

- (id)getColorSilhouetteError {
    code
}

- (id)getColorSilhouetteSuccess {
    code
}

- (id)getColorTextBottomDocument {
    code
}

- (id)getColorTextButtonPopupError {
    code
}

- (id)getColorTextMessage {
    code
}

- (id)getColorTextPopupError {
    code
}

@end

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

import UIKit
import AcessoBio

class ViewController: UIViewController, AcessoBioManagerDelegate, AcessoBioThemeDelegate {

    var unicoCheck: AcessoBioManager!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        unicoCheck = AcessoBioManager(viewController: self)
        unicoCheck.setTheme(self)
    }
 

    func getColorBackground() -> Any! {
        code
    }

    func getColorBoxMessage() -> Any! {
        code
    }

    func getColorTextMessage() -> Any! {
        code
    }

    func getColorBackgroundPopupError() -> Any! {
        code
    }

    func getColorTextPopupError() -> Any! {
        code
    }

    func getColorBackgroundButtonPopupError() -> Any! {
        code
    }

    func getColorTextButtonPopupError() -> Any! {
        code
    }

    func getColorBackgroundTakePictureButton() -> Any! {
        code
    }

    func getColorIconTakePictureButton() -> Any! {
        code
    }

    func getColorBackgroundBottomDocument() -> Any! {
        code
    }

    func getColorTextBottomDocument() -> Any! {
        code
    }

    func getColorSilhouetteSuccess() -> Any! {
        code
    }

    func getColorSilhouetteError() -> Any! {
        code
    } 
} 

```

  </TabItem>
</Tabs>

## Tempos de sessão

O tempo máximo de captura ao utilizar a detecção da face (smart câmera) é de 13 segundos. Caso o usuário encontre alguma dificuldade para capturar a foto através da detecção de face e ultrapasse o tempo determinado em seu processo, a captura será alterada automaticamente para a manual, visando facilitar a ação para o usuário. ( TimeoutToFaceInference )
  
## Configurando os tempos de sessão

É possível alterar o tempo máximo de sessão do seu usuário ao utilizar a funcionalidade de detecção da face (Smart Camera). Para isto, através de nosso builder, disponibilizamos o método `setTimeoutSession`:

#### Método `setTimeoutSession`: 
Configura o tempo máximo de sessão do seu usuário (em segundos). Caso ele ultrapasse o tempo determinado em seu processo para capturar a foto, você poderá apresentar alguma mensagem personalizável ou instrução ao usuário. O valor padrão é de 40 segundos e seu valor mínimo também é de 40 segundos.

### Exemplos de utilização

<Tabs>
  <TabItem value="objectivec" label="Objective-C" default>

```objectivec
#import "ViewController.h"
#import <AcessoBio/AcessoBio.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    unicoCheck = [[AcessoBioManager alloc]initWithViewController:self];
    [unicoCheck setTimeoutSession:50];

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
        unicoCheck.setTimeoutSession(50)
    }
}            
```

  </TabItem>
</Tabs>

## Objeto ErrorBio

Objeto retornado sempre que ocorre um erro dentro do SDK do **unico check**. A lista dos possíveis erros e mensagens pode ser vista [aqui](#codigosderro)

### Métodos disponíveis

#### `getCode()`
Método utilizado para obter o código de erro ocorrido.

#### `getDescription()`
Método utilizado para obter a descrição do ocorrido.

## Códigos de erro

Disponibilizamos abaixo a lista possíveis códigos de erro de nosso SDK iOS:

| Código | Descrição |
| ------ | --------- |
| `73000` | The Session was cancelled because of an unknown and unexpected error. The Unico Check SDK leverages a variety of iOS APIs including camera, storage, security, networking, and more. This return value is a catch-all for errors experienced during normal usage of these APIs. |
| `73003` | The API version needs to be 11 or newer. |
| `73004` | Could not find implementation interface callback AcessoBioSelfieDelegate |
| `73005` | Could not find implementation interface callback AcessoBioDocumentDelegate |
| `73006` | Unable to open camera on emulators |
| `73100` | Unico Check SDK is unable to connect to the internet. |
| `73200` | Could not find the unico_sdk json file |
| `73202` | Unable to load unico_sdk json file |
| `73300` | Unable to get unico authentication object |
| `73301` | Unable to parse unico authentication object |
| `73302` | Could not find the unico token |
| `73701` | Could not find active liveness import |
| `73702` | Unable to initialize active liveness in production mode |
| `73703` | Unable to get active liveness session |
| `73704` | The user pressed the cancel button and did not complete the Session. |
| `73705` | The Session was not performed successfully and a FaceScan was not generated. In general, other statuses will be sent to the developer for specific unsuccess reasons. |
| `73706` | The camera access is prevented because either the user has explicitly denied permission or the user's device is configured to not allow access by a device policy. |
| `73707` | The Session was cancelled due to the app being terminated, put to sleep, an OS notification, or the app was placed in the background. |
| `73708` | The Session was cancelled because the device is in landscape mode. The user experience of devices in these orientations is poor and thus portrait is required. |
| `73709` | The Session was cancelled because the device is in reverse portrait mode. The user experience of devices in these orientations is poor and thus portrait is required. |
| `73710` | The Session was cancelled because the user was unable to complete a Session in the default allotted time or the timeout set by the developer. |
| `73711` | The Session was cancelled due to memory pressure. |
| `73712` | The Session was cancelled because your App is not in production and requires a network connection. |
| `73713` | The Session was cancelled because your key needs to be validated again. |
| `73714` | The Session was cancelled because the developer-configured encryption key was not valid. |
| `73715` | The Session was cancelled because not all guidance images were configured. |
| `73716` | The Session was cancelled because the SDK was unable to start the camera on this device. |
| `73717` | The Session was cancelled because the user was in a locked out state. |
| `73718` | The Session was cancelled because of an unknown and unexpected error. SDK leverages a variety of iOS APIs including camera, storage, security, networking, and more. This return value is a catch-all for errors experienced during normal usage of these APIs. |
| `73719` | The Session was cancelled because the user pressed the Get Ready screen subtext message. Note: This functionality is not available by default, and must be requested from FaceTec in order to enable it. |
| `73800` | Could not encrypt response |



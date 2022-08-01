---
sidebar_label: 'Referências'
sidebar_position: 8
hide_title: false
---

# Referências

## Sobre este guia

Este guia referencia todos os métodos e objetos disponíveis no SDK Flutter do **Unico Check**.

:::note Estamos em melhoria constante!

Atualmente disponibilizamos apenas alguns objetos e snippets de código que podem ser úteis para sua integração. Temos como objetivo evoluir este artigo para um API reference completo.

:::

## Customizações

Nossa SDK conta com métodos de customização a fim de personalizar a experiência de acordo com o identidade visual de cada cliente. Segue a lista de métodos que podem ser facilmente implementadas:

### Métodos disponíveis

#### Método `getColorSilhouetteError()`
Método utilizado para customizar a cor de erro da silhueta.
#### Método `getColorSilhouetteNeutral()`
Método utilizado para customizar a cor neutra da silhueta.
#### Método `getColorBackground()`
Método utilizado para customizar a cor de fundo da silhueta.
#### Método `getColorBoxMessage()`
Método utilizado para customizar a cor de fundo da mensagem.
#### Método `getColorTextMessage()`
Método utilizado para customizar a cor de texto da mensagem.
#### Método `getColorBackgroundPopupError()`
Método utilizado para customizar a cor de fundo do popup.
#### Método `getColorTextPopupError()`
Método utilizado para customizar a cor de texto e ícones do popup.
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


## Configurando os tempos de sessão

É possível alterar o tempo máximo de sessão do seu usuário e o tempo máximo de captura ao utilizar a funcionalidade de detecção da face (Smart Camera). Para isto, através de nosso builder, disponibilizamos 2 métodos:

#### Método `setTimeoutSession`: 
Configura o tempo máximo de sessão do seu usuário (em segundos). Caso ele ultrapasse o tempo determinado em seu processo para capturar a foto, você poderá apresentar alguma mensagem personalizável ou instrução ao usuário. O valor padrão é de 40 segundos e seu valor mínimo também é de 40 segundos.

#### Método `setTimeoutToFaceInference`: 
Configura o tempo máximo de captura ao utilizar a detecção da face (smart câmera) em segundos. Caso o usuário encontre alguma dificuldade para capturar a foto através da detecção de face e ultrapasse o tempo determinado em seu processo, a captura será alterada automaticamente para a manual, visando facilitar a ação para o usuário. O valor padrão é de 15 segundos e seu valor mínimo é de 5 segundos.

### Exemplos de utilização

<Tabs>
  <TabItem value="dart" label="Dart" default>

```dart
   _unicoCheck
        .setTimeoutSession(timeoutSession: 55);
```

  </TabItem>

</Tabs>


## Objeto UnicoError

Objeto retornado sempre que ocorre um erro dentro do SDK do **unico check**. A lista dos possíveis erros e mensagens pode ser vista [aqui](#codigosderro)

### Métodos disponíveis

#### Método `getCode()`:
Método utilizado para obter o código de erro ocorrido.

#### Método `getDescription()`
Método utilizado para obter a descrição do ocorrido.

## Códigos de erro

Disponibilizamos abaixo a lista possíveis códigos de erro de nosso SDK Flutter:

<!-- Confirmar códigos de error -->

| Code | Message |
|------|------------|
|73001| Context invalid|
|73002| Did not grant permission to open camera|
|73003| The lest API is 21(LOLLIPOP)|
|73004| Could not find implementation interface callback iAcessoBioSelfie|
|73005| Could not find implementation interface callback iAcessoBioDocument|
|73006| Unable to open camera on emulators|
|73200| Please inform the json file name|
|73202| Unable to parse json file|
|73300| Unable to get unico authentication object|
|73301| Unable to parse object|
|73302| Could not find the unico token|
|73303| Current host is not registered|
|73400| Could not initialize camera|
|73500| Unable to get session token, service response error|
|73501| Unable to parce object|
|73502| Could not get session token|
|73701| Could not find active liveness import|
|73702| Unable to initialize active liveness in production mode|
|73703| Unable to get active liveness session|
|73704| The user pressed the cancel button and did not complete the Session.|
|73705| The Session was not performed successfully and a FaceScan was not generated. In general, other statuses will be sent to the |developer for specific unsuccess reasons|
|73706| The camera access is prevented because either the user has explicitly denied permission or the user's device is configured to |not allow access by a device policy. For more information on restricted by policy case, please see the the Apple Developer |documentation on AVAuthorizationStatus.restricted.|
|73707| The Session was cancelled due to the app being terminated, put to sleep, an OS notification, or the app was placed in the |background.|
|73708| The Session was cancelled because device is in landscape mode. The user experience of devices in these orientations is poor |and thus portrait is required.|
|73709| The Session was cancelled because device is in reverse portrait mode. The user experience of devices in these orientations is |poor and thus portrait is required.|
|73710| The Session was cancelled because the user was unable to complete a Session in the default allotted time or the timeout set |by the developer.|
|73712| The Session was cancelled due to memory pressure.|
|73712| The Session was cancelled because your App is not in production and requires a network connection.|
|73713| The Session was cancelled because your key needs to be validated again.|
|73714| The Session was cancelled because the developer-configured encryption key was not valid.|
|73715| The Session was cancelled because not all guidance images were configured.|
|73716| The Session was cancelled because SDK was unable to start the camera on this device.|
|73717| The Session was cancelled because the user was in a locked out state.|
|73718| The Session was cancelled because of an unknown and unexpected error. SDK leverages a variety of iOS APIs including camera, |storage, security, networking, and more. This return value is a catch-all for errors experienced during normal usage of these APIs.|
|73719| The Session cancelled because user pressed the Get Ready screen subtext message. Note: This functionality is not available by |default, and must be requested from FaceTec in order to enable.|
|73800| Could not build encrypted key|



<!-- import Feedback from '@site/src/components/Feedback';

<Feedback /> -->

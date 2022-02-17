---
sidebar_label: 'API Reference'
sidebar_position: 8
title: Unico Check - Android SDK
description: API Reference do SDK Android do Único Check
keywords: 
  - Android
---

# SDK API Reference

## Sobre este guia
Este guia referencia todos as interfaces, classes, métodos e objetos disponíveis no SDK Android do **Unico Check**, disponível através do pacote `com.acesso.acessobio_android`

## Interfaces

<div className="package-name">

### IAcessoBioBuilder 
> *com.acesso.acessobio_android.onboarding.IAcessoBioBuilder*

</div>

Interface utilizada para implementar a classe [`AcessoBio`](#acessobio). 

**Métodos**

#### `setTimeoutSession(double seconds)`

Configura o tempo de sessão para efetuar a captura.

| Parâmetro	| Descrição |
| --------- | ---- |
| `seconds` <div class="label basic required">Required</div> |	Tempo em milissegundos | 


#### `setAutoCapture(boolean boolean)`

Configura a câmera para efetuar a captura automática. 

| Parâmetro	| Descrição |
| --------- | ---- |
| `boolean` <div class="label basic required">Required</div> |	Booleano que habilita ou não a captura automática | 


#### `setSmartFrame(boolean boolean)`

Configura o frame inteligênte que ajuda o cliente a posicionar o rosto dentro da área de captura. 
- Se ligado em conjunto com a câmera manual: Habilita o botão de captura após a face esteja corretamente posicionada.
- Se ligado em conjunto com a câmera automática: Possibilita a captura automática assim que a face esteja corretamente posicionada.

| Parâmetro	| Descrição |
| --------- | ---- |
| `boolean` <div class="label basic required">Required</div> |	Booleano que habilita ou não o Smart Frame | 

--- 

<div className="package-name">

### iAcessoBioDocument
> *com.acesso.acessobio_android.iAcessoBioDocument*

</div>

Interface utilizada para implementar os listeners que irão disparar eventos de sucesso ou erro na captura de imagens de documentos.

**Listeners**

#### `onSuccessDocument()`
Método disparado em caso de sucesso na captura de uma Selfie. Retorna o objeto do tipo [`ResultCamera`](#resultacamera).

#### `onErrorDocument()`
Método disparado em caso de erro na captura de uma Selfie. Retorna o objeto do tipo [`ErrorBio`](#errorbio)


--- 

<div className="package-name">

### iAcessoBioSelfie
> *com.acesso.acessobio_android.iAcessoBioSelfie*

</div>

Interface utilizada para implementar os listeners que irão disparar eventos de sucesso ou erro na captura de imagens com a câmera de Selfie.

**Listeners**

#### `onSuccessSelfie()`
Método disparado em caso de sucesso na captura de uma Selfie. Retorna o objeto do tipo [`ResultCamera`](#resultacamera).

#### `onErrorSelfie()`
Método disparado em caso de erro na captura de uma Selfie. Retorna o objeto do tipo [`ErrorBio`](#errorbio)

--- 

## Classes

<div className="package-name">

### AcessoBio
> *com.acesso.acessobio_android.onboarding.AcessoBio*

</div>

Classe principal do **Unico Check** que dará origem ao *builder*. Deve ser implementada através da interface [IAcessoBioBuilder](#iacessobiobuilder). Uma nova instância desta classe recebe os seguintes parâmetros:

| Nome                                                   | Tipo                             | Descrição                                                             |
| ------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------- |
| `context` <div class="label basic required">Required</div> | Context | Contexto da aplicação.  |
| `callback` <div class="label basic required">Required</div> | [AcessoBioListener](#acessobiolistener) | Funções de callback que serão executadas caso alguns eventos pre-determinados ocorram. | 

--- 

<div className="package-name">

### AcessoBioListener
> *com.acesso.acessobio_android.AcessoBioListener*

</div>

Classe que tem como objetivo a implementação de *listeners* que serão disparados após a ocorrência dê certos eventos em nosso SDK. Ao instanciar essa classe, você deverá implementar TODOS os métodos abaixo. Caso contrário encontrará problemas ao compilar seu App.

**Listeners**


#### `onErrorAcessoBio(ErrorBio errorBio)`
Este método será invocado sempre quando qualquer erro de implementação ocorrer ao utilizar algum de nossos métodos, como por exemplo, ao informar um tipo de documento incorreto para a funcionalidade de captura de documentos.

Ao ser invocado, o método receberá um parâmetro do tipo `ErrorBio` que contem detalhes do erro. Saiba mais sobre o tipo `ErrorBio` no [API Reference](API#errorbio) de nosso SDK.

#### `onUserClosedCameraManually()`
Este método será invocado sempre quando o usuário fechar a câmera de forma manual, como por exemplo, ao clicar no botão "Voltar".

#### `onSystemClosedCameraTimeoutSession()`
Este método será invocado assim que o tempo máximo de sessão for atingido (Sem capturar nenhuma imagem).

:::info  Tempo máximo da sessão
O tempo máximo da sessão pode ser configurado em nosso **builder** através do método `setTimeoutSession`. Saiba mais sobre  método `setTimeoutSession()` no [API Reference](API#settimeoutsession) de nosso SDK.
:::

#### `onSystemChangedTypeCameraTimeoutFaceInference()`
Este método será invocado assim que o tempo máximo para detecção da face de um usuário for atingido (sem ter nada detectado). Neste caso, o modo de câmera é alterado automaticamente para o modo manual (sem o smart frame).





## Data Transfer Objectes

<div className="package-name">

### ErrorBio 
> *com.acesso.acessobio_android.services.dto.ErrorBio*

</div>

Objeto retornado sempre que ocorre um erro dentro do SDK do **unico check**.

**Métodos:**

#### `getCode()`
Método utilizado para obter o código de erro ocorrido.

#### `getDescription()`
Método utilizado para obter a descrição do ocorrido.

**Retornos:**

Confira abaixo uma lista dos possíveis retornos de nosso SDK Android:

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


<div className="package-name">

### ResultCamera
> *com.acesso.acessobio_android.services.dto.ResultCamera*

</div>

Objeto retornado em caso de sucesso na captura de imagem. O objeto retorna 2 atributos que poderão ser obtidos através dos métodos abaixo. São eles: `base64` e `encrypted`.

- O atributo `base64` pode ser utilizado caso você queira exibir um preview da imagem em seu app;
- O atributo `encrypted` deverá ser enviado na chamada de nossas APIs REST do **unico check**;  

**Métodos:**

#### `getEncrypted()`
Método utilizado para obter o `JWT`. Retorna um `string` contendo o valor do `JWT`.

#### `getBase64()`
Método utilizado para obter o `base64`. Retorna um `string` contendo o valor do `base64`.



## Tipos

<div className="package-name">
### DocumentType
com.acesso.acessobio_android.onboarding.types.DocumentType
</div>



```
onErrorAcessoBio
onUserClosedCameraManually
onSystemClosedCameraTimeoutSession
onSystemChangedTypeCameraTimeoutFaceInference
```


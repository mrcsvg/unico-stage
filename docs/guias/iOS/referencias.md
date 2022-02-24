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



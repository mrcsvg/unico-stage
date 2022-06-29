---
sidebar_label: 'Referências'
sidebar_position: 8
hide_title: false
---

# Referências

## Sobre este guia

Este guia referencia todos os métodos e objetos disponíveis no SDK Web da **Unico Check**.

:::note Estamos em melhoria constante!

Atualmente disponibilizamos apenas alguns objetos e snippets de código que podem ser úteis para sua integração. Temos como objetivo evoluir este artigo para um API reference completo.

:::


## Códigos de erro

Disponibilizamos abaixo a lista possíveis códigos de erro de nosso SDK Web:

| Código | Descrição |
| ------ | --------- |
| `73000` | Unknown and unexpected error. Unico SDK leverages a variety of APIs including camera, storage, security, networking, and more. This return value is a catch-all for errors experienced during normal usage of these APIs.|
| `73001` | `<property>` is required|
| `73002` | `<property>` must be an instance of `<class>`|
| `73003` | `<class>` with name `<name>` is not available to inject.|
| `73004` | Class type must be a function or a class. |
| `73005` | Could not find the `<locale>` locale.|
| `73006` | Could not find text: `<text>`.|
| `73200` | Could not find the Unico SDK JSON file.|
| `73201` | Could not load the Unico SDK JSON file.|
| `73202` | Unico SDK JSON file is invalid.|
| `73300` | Could not authenticate this application.|
| `73301` | Could not authenticate this application.|
| `73302` | Authentication token not found.|
| `73303` | Current host is not registered.|
| `73400` | Could not initialize camera.|
| `73401` | Could not load ML models for this camera.|
| `73500` | Could not get session.|
| `73501` | Could not get session.|
| `73502` | Session token not found.|
| `73600` | Could not find camera resource.|
| `73601` | Could not start camera in production mode.|
| `73700` | Could not parse camera response.|
| `73704` | The user pressed the cancel button and did not complete the session.|
| `73706` | The camera access is prevented because either the user has explicitly denied permission or the user's device is configured to not allow access by a device policy.|
| `73707` | The session was canceled due to the app being terminated, put to sleep, an OS notification, or the app was placed in the background.|
| `73708` | The session was cancelled because device is in landscape mode. The user experience of devices in these orientations is poor and thus portrait is required.|
| `73710` | The session was cancelled because the user was unable to complete a Session in the default allotted time or the timeout set by the developer.|
| `73715` | The session was cancelled because not all guidance images were configured.|
| `73716` | The session was cancelled because SDK was unable to start the camera on this device.|
| `73717` | The session was cancelled because the user was in a locked out state.|
| `73718` | The session was cancelled because of an unknown and unexpected error. SDK leverages a variety of iOS APIs including camera, storage, security, networking, and more. This return value is a catch-all for errors experienced during normal usage of these APIs.|
| `73720` | The developer programmatically called the session cancel API.|
| `73721` | The session was cancelled due to a device orientation change during the session.|
| `73722` | The session was cancelled because the document is not ready.|
| `73723` | The session was cancelled because there was another session in progress.|
| `73724` | The session was cancelled because the camera was opened in an iFrame.|
| `73800` | Could not encrypt response.|
| `73900` | Could not get system information.|
| `74000` | Invalid hexadecimal.|
| `74001` | Object is not a UnicoTheme|


## Declaração de tipos para uso em TypeScript

Caso esteja utilizando TypeScript em seu projeto dentro de src/ crie uma pasta @types, adicione o arquivo `unico-webframe.d.ts` com a seguinte declaração de tipos:

```javascript

declare module 'unico-webframe' {
  export class UnicoCheckBuilder {
    setTheme(theme: UnicoTheme): UnicoCheckBuilder;

    setModelsPath(path: string): UnicoCheckBuilder;

    setResourceDirectory(path: string): UnicoCheckBuilder;

    build(): MainView;
  }
	export interface UnicoTheme {
		colorSilhouetteNeutral: string;
		colorSilhouetteSuccess: string;
		colorSilhouetteError: string;
		backgroundColor: string;
		colorText: string;
		backgroundColorComponents: string;
		colorTextComponents: string;
		backgroundColorBoxMessage: string;
		colorTextBoxMessage: string;
		backgroundColorButtons: string;
		colorTextButtons: string;
		htmlPopupLoading: string;
	}
	export class UnicoThemeBuilder {
		setColorSilhouetteSuccess(color: string): UnicoThemeBuilder;
		setColorSilhouetteError(color: string): UnicoThemeBuilder;
		setColorSilhouetteNeutral(color: string): UnicoThemeBuilder;
		setBackgroundColor(color: string): UnicoThemeBuilder;
		setColorText(color: string): UnicoThemeBuilder;
		setBackgroundColorComponents(color: string): UnicoThemeBuilder;
		setColorTextComponents(color: string): UnicoThemeBuilder
		setBackgroundColorButtons(color: string): UnicoThemeBuilder
		setColorTextButtons(color: string): UnicoThemeBuilder
		setBackgroundColorBoxMessage(color: string): UnicoThemeBuilder
		setColorTextBoxMessage(color: string): UnicoThemeBuilder
		setHtmlPopupLoading(content: string): UnicoThemeBuilder;
		build(): UnicoTheme;
	}
	export class SelfieCameraType {
		name: string;
		code: number;
		constructor(name: string, code: number)
	}
	export class DocumentCameraType {
		name: string;
		code: number;
		description: string;
		constructor(name: string, code: number, description?: string)
	}
	export const SelfieCameraTypes: {
		NORMAL: SelfieCameraType,
		SMART: SelfieCameraType
	};
	export const DocumentCameraTypes: {
		CNH: DocumentCameraType;
		CNH_FRENTE: DocumentCameraType;
    CNH_VERSO: DocumentCameraType;
		CPF: DocumentCameraType;
		OTHERS: (description: string) => DocumentCameraType;
		RG_FRENTE: DocumentCameraType;
		RG_VERSO: DocumentCameraType;
		RG_FRENTE_NOVO: DocumentCameraType;
		RG_VERSO_NOVO: DocumentCameraType;
	};
	export interface MainView {
		prepareSelfieCamera: (jsonPath: string, cameraType: SelfieCameraType) =>
			Promise <CameraOpener>;
		prepareDocumentCamera: (
			jsonPath: string,
			cameraType: DocumentCameraType
		) => Promise <CameraOpener>;
	}
	export type SuccessPictureResponse = {
		encrypted: string;
		base64: string;
	}
	export type ErrorPictureResponse = {
		code: number;
		message: string;
		type: string;
		stack: any[];
	}
	export type SupportPictureResponse = {
		code: number;
		message: string;
		type: string;
		stack: any[];
	}
	export type CallbackCamera = {
		on: {
			success: (obj: SuccessPictureResponse) => void;
			error: (error: ErrorPictureResponse) => void;
			support: (error: SupportPictureResponse) => void;
		}
	}
	interface CameraOpener {
		open: (callback: CallbackCamera) => void;
	}
}

```
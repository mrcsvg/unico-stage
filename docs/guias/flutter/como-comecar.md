---
sidebar_label: 'Como começar'
sidebar_position: 2
hide_title: true
---

# Como começar

## Pré requisitos

Antes de começar você deve ter certeza de que seu ambiente de desenvolvimento esteja de acordo com os seguintes pré-requisitos:

- Possuir o Developer SDK do [Flutter](https://docs.flutter.dev/get-started/install) instalado;

## Credenciais unico

Para utilizar nossos SDKs você precisará importar as credenciais unico (Client API Key) em seu projeto. Utilize [este](/guias/flutter/como-comecar#obtendo-suas-credenciais) passo-a-passo para gerar e importar as credenciais.

## Instalação

### Utilizando o CLI do Flutter

Para adicionar o SDK Flutter do **unico check** ao seu projeto, execute o seguinte comando utilizando o CLI do flutter:

```bash
$ flutter pub add unico_check
```

Este comando irá adionar a seguinte linha no arquivo `pubspec.yaml` de seu pacote:

```yaml pubspec.yaml
dependencies:
  unico_check: ^2.0.2
```

:::note Obter pacotes manualmente

O comando `flutter pub add unico_check` dispara implicitamente o comando `flutter pub get`. Caso o pacote não tenha sido instalado corretamente, certifique-se que o `unico_check` em seu arquivo `pubspec.yaml` e rode o `flutter pub get` manualmente.

:::

### Permissões para utilização da câmera

Para utilizar o método de abertura de câmera em seu projeto é necessário adicionar as permissões antes de compilar a sua aplicação. Segue o exemplo:

```xml
<key>NSCameraUsageDescription</key>
<string>Camera usage description</string>
```

### Inclusão da dependência 

Após adicionar nosso SDK em seu projeto, basta importa-lo da maneira correta. Para isto, importe nosso pacote em código Dart:

```dart title="main.dart"

import 'package:unico_check/unico_check.dart';

```

## Obtendo suas credenciais

Para utilizar nossos SDKs você precisará importar as credenciais unico (Client API Key) em seu projeto. Utilize o passo-a-passo a seguir para gerar e importar as credenciais.

### Gerando as credenciais;

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Crie ou edite uma nova `API Key`;
4. Caso deseje utilizar o **Smartlive com interação** em seu app, verifique se o campo "**Utiliza liveness com interação**" está como **SIM**, caso esteja como **NÃO** (ou não esteja aparecendo) entre em contato com nosso suporte e solicite a habilitação;

:::info Smartlive com interação

Saiba mais sobre o Smartlive com interação [aqui](/conceitos-importantes#smartlive-com-interação)

:::

5. Marque o campo "Utiliza autenticação segura na SDK" como **SIM**;
6. Expanda a seção SDK Flutter, adicione o nome de sua aplicação Flutter e o Bundle ID;
7. Salve as alterações.

### Embarcando as credenciais em seu projeto

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Ao lado da *API Key* desejada, pressione o botão de **Download**;
4. Selecione a opção **iOS**;
5. Clique em "**Gerar**";
6. Uma nova aba será aberta em seu navegador contendo informações do projeto em formato JSON.

:::caution Atenção aos bloqueadores de Pop-up
Caso a nova aba não abra, por favor, verifique se o seu navegador está bloqueando os popups.
:::

7. Salve o conteúdo desta nova aba em um novo arquivo **JSON**;
8. Repita os passos 1 a 7 para criar uma credencial para seu aplicativo **Android**;
9. Embarque as credenciais obtidas em seu projeto. Você precisará efetuar configurações distintas para Android e iOS. Veja abaixo:

#### Configurando as credenciais para iOS

Para configurar suas credenciais para iOS, você deverá utilizar o método `setUnicoConfigIos` dentro de seu projeto (em seus arquivos Dart). Este método é disponibilizado nos objetos da classe `UnicoCheck`. Este método deve receber como parâmetro as informações contidas no JSON, conforme o seguinte exemplo:

```json title="Arquivo JSON coms suas credenciais.json"
{
	"project_info":{
		"project_number":"<YOUR_PROJECT_NUMBER>",
		"project_id":"<YOUR_PROJECT_ID>"
	},
	"client_info":{
		"mobilesdk_app_id":"<YOUR_MOBILE_SDK_APP_ID>",
		"ios_client_info":{
			"bundle_identifier":"<YOUR_MOBILE_BUNDLE_IDENTIFIER>"
		}
	},
	"host_info":{
		"host_info":"<YOUR_HOST_INFO>",
		"host_key":"<YOUR_HOST_KEY>"
	}
}
```

Exemplo de implementação: 

```dart title="main.dart"  
// highlight-start
 final _configIos = UnicoConfig(
      getProjectNumber: YOUR_PROJECT_NUMBER,
      getProjectId: YOUR_PROJECT_ID,
      getMobileSdkAppId: YOUR_MOBILE_SDK_APP_ID,
      getBundleIdentifier: YOUR_MOBILE_BUNDLE_IDENTIFIER,
      getHostInfo: YOUR_HOST_INFO,
      getHostKey: YOUR_HOST_KEY);
// highlight-end

  @override
  void initState() {
    super.initState();
    initUnicoCamera();
    configUnicoCamera();
  }

  void initUnicoCamera() {
    _unicoCheck = new UnicoCheck(this);
  }

  void configUnicoCamera() {
    _unicoCheck
        .setTheme(unicoTheme: _theme)
		// highlight-start
        .setUnicoConfigIos(unicoConfig: _configIos)
		// highlight-end
        .setTimeoutSession(timeoutSession: 55);
  }
```


#### Configurando as credenciais para Android

Adicione o arquivo salvo em seu projeto Android, no caminho "/app/src/main/assets/<nome_do_arquivo>.json".

## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-documentos)
<!-- - [API Reference do SDK](API) -->


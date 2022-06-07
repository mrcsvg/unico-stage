---
sidebar_label: 'Como começar'
sidebar_position: 2
hide_title: true
---

# Como começar

## Pré requisitos

Antes de começar você deve ter certeza de que seu ambiente de desenvolvimento esteja de acordo com os seguintes pré-requisitos:

- Possuir o Developer SDK do [Flutter](https://docs.flutter.dev/get-started/install) instalado;

## Obtendo suas credenciais

Para utilizar nossos SDKs você precisará importar suas credenciais (Client API Key) em seu projeto através de um arquivo JSON. Utilize o passo-a-passo a seguir para gerar e importar as credenciais em seu projeto.

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
4. Selecione a opção **Flutter**;
5. Clique em "**Gerar**";
6. Uma nova aba será aberta em seu navegador contendo informações do projeto em formato JSON.

:::caution Atenção aos bloqueadores de Pop-up
Caso a nova aba não abra, por favor, verifique se o seu navegador está bloqueando os popups.
:::

7. Salve o conteúdo desta nova aba em um novo arquivo **JSON**;
8. Adicione o arquivo salvo em seu projeto. Explicaremos como e onde utilizar o arquivo ao longo de nossos guias.


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

Adicione permissão para utilização da câmera em seu arquivo `..xml`:

<!-- TODO: em qual arquivo? -->

```xml title="..."
<key>NSCameraUsageDescription</key> <string>Camera usage description</string>
```

### Inclusão da dependência 

Após adicionar nosso SDK em seu projeto, basta importa-lo da maneira correta. Para isto, importe nosso pacote em código Dart:

```dart title="main.dart"

import 'package:unico_check/unico_check.dart';

```

## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-documentos)
<!-- - [API Reference do SDK](API) -->


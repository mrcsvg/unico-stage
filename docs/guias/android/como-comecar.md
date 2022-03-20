---
sidebar_label: 'Como começar'
sidebar_position: 2
hide_title: true
---

# Como começar

## Pré requisitos

Antes de começar você deve ter certeza de que seu ambiente de desenvolvimento esteja de acordo com os seguintes pré-requisitos:

- Possuir a versão 9 ou superior do [Android Studio](https://developer.android.com/sdk?hl=pt-br) (IDE oficial de desenvolvimento Google) instalado;
- Possuir a versão do SDK Android na versão 21 ou superior;
- Possuir configurado o gerenciador de pacotes Maven Jitpack;

## Obtendo suas credenciais

Para utilizar nossos SDKs você precisará importar suas credenciais (Client API Key) em seu projeto através de um arquivo JSON. Utilize o passo-a-passo a seguir para gerar e importar as credenciais em seu projeto.

### Gerando as credenciais;

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Crie ou edite uma nova `API Key`;
4. Caso deseje utilizar o **Liveness com interação** em seu app, verifique se o campo "**Utiliza liveness com interação**" está como **SIM**, caso esteja como **NÃO** (ou não esteja aparecendo) entre em contato com nosso [suporte](mailto:suporte.unicocheck@unico.io) e solicite a habilitação;

:::info Liveness com interação

Saiba mais sobre o liveness com interação [neste guia](#)

:::

5. Marque o campo "Utiliza autenticação segura na SDK" como **SIM**;
6. Expanda a seção SDK Android, adicione o nome de sua aplicação Android e o Bundle ID;
7. Salve as alterações.

### Embarcando as credenciais em seu projeto

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Ao lado da *API Key* desejada, pressione o botão de **Download**;
4. Selecione a opção **Android**;
5. Clique em "**Gerar**";
6. Uma nova aba será aberta em seu navegador contendo informações do projeto em formato JSON.

:::caution Atenção aos bloqueadores de Pop-up
Caso a nova aba não abra, por favor, verifique se o seu navegador está bloqueando os popups.
:::

7. Salve o conteúdo desta nova aba em um novo arquivo **JSON**;
8. Adicione o arquivo salvo em seu projeto. Explicaremos como e onde utilizar o arquivo ao longo de nossos guias.


## Instalação

### Jitpack Manager

Para instalar o SDK Android do **unico check**, adicione o gerenciador de repositórios `Jitpack Manager` ao bloco `repositories` do arquivo `build.gradle` existente na raiz de seu projeto:

```gradle title="build.gradle"
// Top-level build file where you can add configuration options common to all sub-projects/modules.
allprojects {
    repositories {
        google()
        jcenter()
        maven { url 'https://jitpack.io'}
    }
}
```

### Suporte ao AndroidX

Habilite o suporte ao AndroidX ao em seu arquivo `gradle.properties` (também na raiz de seu projeto). Isto garantirá uma melhor performance e funcionamento do frame de captura:

```gradle title="gradle.properties"
# Project-wide Gradle settings.
# https://developer.android.com/topic/libraries/support-library/androidx-rn
android.useAndroidX=true
# Automatically convert third-party libraries to use AndroidX
android.enableJetifier=true
```

### Permissões para utilização da câmera

Adicione permissão para utilização da câmera em seu arquivo `AndroidManifest.xml`:

```xml title="gradle.properties"
<uses-permission android:name="android.permission.CAMERA" />
```

### Inclusão da dependência

Após configurar nosso SDK em seu projeto, basta importa-lo da maneira correta em seu projeto. Para isto, adicione `acessobio-android` ao bloco `dependencies` do arquivo [`app/build.gradle`](https://developer.android.com/studio/build/dependencies):.

:::note build.gradle 
Por favor, note que a dependência deve ser incluída em um arquivo diferente do que foi utilizado no passo anterior. Neste passo, utilizamos o arquivo `build.gradle` referente ao módulo e não ao projeto.
:::

```java title="app/gradle.properties"
/* unico */
implementation 'com.github.acesso-io:acessobio-android:+'
```

:::caution Erro ao compilar
Caso o erro abaixo seja exibido ao compilar o projeto:

> Invoke-customs are only supported starting with android 0 --min-api 26 ao compilar por incompatibilidade da versão do frame min-26

Adicione as linhas a seguir ao bloco `compileOptions`, no mesmo arquivo `app/build.gradle`:

```
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```
::: 

## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Entre em contato através de nosso e-mail [suporte.unicocheck@unico.io](mailto:suporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Guia para implantação de reconhecimento facial](fluxos/reconhecimento-facial)
- [Guia para implantação de captura de documentos](fluxos/captura-documentos)
<!-- - [API Reference do SDK](API) -->


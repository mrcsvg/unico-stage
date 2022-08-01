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
4. Caso deseje utilizar o **Smartlive com interação** em seu app, verifique se o campo "**Utiliza liveness com interação**" está como **SIM**, caso esteja como **NÃO** (ou não esteja aparecendo) entre em contato com nosso suporte e solicite a habilitação;

:::info Smartlive com interação

Saiba mais sobre o Smartlive com interação [aqui](/conceitos-importantes#smartlive-com-interação)

:::

5. Marque o campo "Utiliza autenticação segura na SDK" como **SIM**;
6. Expanda a seção SDK Android, adicione o nome de sua aplicação Android e o Bundle ID;
7. Salve as alterações.

### Embarcando as credenciais em seu projeto

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Ao lado da *API Key* desejada, pressione o botão de **Download**;
4. Selecione a opção **Android**;
5. Clique em "**Gerar**" e automaticamente uma nova aba será aberta em seu navegador contendo informações do projeto em formato JSON.

:::caution Atenção aos bloqueadores de Pop-up
Caso a nova aba não abra, por favor, verifique se o seu navegador está bloqueando os popups.
:::

6. Atualmente temos duas opções para associar as informações contidas no JSON ao projeto: **Implementando o protocolo** `AcessoBioConfigDataSource` ou **Embarcando o arquivo JSON**.
Veja abaixo: 

#### Opcão 1: Implementação do protocolo `AcessoBioConfigDataSource` (recomendado)

1. Implemente o protocolo `AcessoBioConfigDataSource` em sua classe.  
2. Copie e cole as informações contidas no JSON em seus respectivos métodos, como exemplificado abaixo: 

Arquivo JSON: 

```json
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

Implementação de exemplo:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="java" label="Java" default>

```java 
package <package_name>

import com.acesso.acessobio_android.onboarding.AcessoBioConfigDataSource;

public class UnicoConfig implements AcessoBioConfigDataSource {
    @Override
    public String getProjectNumber() {
        return PROJECT_NUMBER;
    }
    
    @Override
    public String getProjectId() {
        return PROJECT_ID;
    }
    
    @Override
    public String getMobileSdkAppId() {
        return MOBILE_SDK_APP_ID;
    }
    
    @Override
    public String getBundleIdentifier() {
        return BUNDLE_IDENTIFIER;
    }
    
    @Override
    public String getHostInfo() {
        return HOST_INFO;
    }
    
    @Override
    public String getHostKey() {
        return HOST_KEY;
    }
}

```
  </TabItem>

  <TabItem value="kotlin" label="Koltin">

```kotlin
package <package_name>

import com.acesso.acessobio_android.onboarding.AcessoBioConfigDataSource

class UnicoConfig : AcessoBioConfigDataSource {
    override fun getProjectNumber(): String {
        return PROJECT_NUMBER
    }

    override fun getProjectId(): String {
        return PROJECT_ID
    }

    override fun getMobileSdkAppId(): String {
        return MOBILE_SDK_APP_ID
    }

    override fun getBundleIdentifier(): String {
        return BUNDLE_IDENTIFIER
    }

    override fun getHostInfo(): String {
        return HOST_INFO
    }

    override fun getHostKey(): String {
        return HOST_KEY
    }
}

```

  </TabItem>
</Tabs>

#### Opcão 2: Embarcando o arquivo JSON (depreciado)

Adicione o arquivo salvo na pasta assets do seu projeto.

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

### Permissões para utilização da câmera e internet

Adicione permissão para utilização da câmera e internet em seu arquivo `AndroidManifest.xml`:

```xml title="AndroidManifest.xml"
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.INTERNET" />
```

### Inclusão da dependência

Após configurar nosso SDK em seu projeto, basta importa-lo da maneira correta em seu projeto. Para isto, adicione `acessobio-android` ao bloco `dependencies` do arquivo [`app/build.gradle`](https://developer.android.com/studio/build/dependencies):.

:::note build.gradle 
Por favor, note que a dependência deve ser incluída em um arquivo diferente do que foi utilizado no passo anterior. Neste passo, utilizamos o arquivo `build.gradle` referente ao módulo e não ao projeto.
:::

```java title="app/build.gradle"
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

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-documentos)
<!-- - [API Reference do SDK](API) -->


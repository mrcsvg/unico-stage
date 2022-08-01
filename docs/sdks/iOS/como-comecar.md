---
sidebar_label: 'Como começar'
sidebar_position: 2
hide_title: true
---

# Como começar

## Pré requisitos


### Ambiente de desenvolvimento 
Antes de começar você deve ter certeza de que seu ambiente de desenvolvimento esteja de acordo com os seguintes pré-requisitos:
- Possuir a versão 13 ou superior do [XCode](https://developer.apple.com/xcode/) (IDE oficial de desenvolvimento Apple) instalado;
- Possuir a versão do SDK iOS na versão 11 ou superior;

Caso use Swift em seu projeto:
- Swift CI Compiler > 5.4.2
- Swift Syntax > 4.2

### Credeciais unico
Para utilizar nossos SDKs você precisará importar as credenciais unico (Client API Key) em seu projeto. Utilize [este](/sdks/iOS/como-comecar#obtendo-suas-credenciais) passo-a-passo para gerar e importar as credenciais.

## Configuração e instalação

### Utilizando o CocoaPods

#### Instalação 

CocoaPods é um gerenciador de dependências para projetos Cocoa. Para instruções de uso e instalação, visite a documentação do oficial do [cocoapods](https://cocoapods.org/). Para integrar o SDK do **unico check**  em seu projeto Xcode usando CocoaPods, siga os passos abaixo:

Inclua o ´unicocheck-ios´ em seu *Podfile*:

```bash 
pod ‘unicocheck-ios’
```

Em seguida, basta utilizar o comando abaixo em seu terminal para instalar as dependências.

```
pod install --repo-update
```

### Utilizando o Swift Package Manager (SPM)

O Swift Package Manager é uma ferramenta para gerenciar a distribuição do código Swift. Ele é integrado ao sistema de compilação Swift para automatizar o processo de download, compilação e vinculação de dependências. Para adicionar o SDK do **unico check** ao seu projeto, basta incluir a dependência em seu arquivo `Package.swift`, conforme abaixo:

```bash title="Package.swift"
dependencies: [
    .package(url: "https://github.com/acesso-io/unico-check-ios.git", .upToNextMajor(from: "2.3.2"))
]
```

### Permissões para utilização da câmera

Para utilizar o método de abertura de câmera em seu projeto é necessário adicionar as permissões antes de compilar a sua aplicação. Segue o exemplo:

```xml 
<key>NSCameraUsageDescription</key>
<string>Camera usage description</string>
```

:::caution Atenção
Se estiver executando o projeto em .xcodeproj é necessário abrir o projeto em .xcworkspace!
::: 

## Obtendo suas credenciais

Para utilizar nossos SDKs você precisará importar as credenciais unico (Client API Key) em seu projeto. Utilize o passo-a-passo a seguir para gerar e importar as credenciais.

#### Gerando as credenciais;

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Crie ou edite uma nova `API Key`;
4. Marque o campo "Utiliza liveness com interação" como **SIM** caso queira habilitar a câmera interativa;

:::info Smartlive com interação

Saiba mais sobre o Smartlive com interação [aqui](/conceitos-importantes#smartlive-com-interação)

:::

5. Marque o campo "Utiliza autenticação segura na SDK" como **SIM**;
6. Expanda a seção SDK iOS, adicione o nome de sua aplicação iOS e o Bundle ID;
7. Salve as alterações.

#### Embarcando as credenciais em seu projeto

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Ao lado da `API Key` desejada, pressione o botão de **Download**;
4. Selecione a opção **iOS**;
5. Clique em "**Gerar**" e automaticamente, uma nova aba será aberta contendo informações de credenciais do projeto em formato JSON.
<!-- TODO Destacar que o arquivo precisa estar em um lugar público -->

:::caution Bloqueador de Pop-ups
Se nada acontecer, verifique o bloqueador de popups de seu navegador
:::
6. Atualmente temos duas opções para associar as informações contidas no JSON ao projeto: **Implementando o protocolo** `AcessoBioConfigDataSource` ou **Embarcando o arquivo JSON**.
Veja abaixo: 

#### Opcão 1: Implementação do protocolo `AcessoBioConfigDataSource`

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
  <TabItem value="objectivec" label="Objective-c" default>

```objectivec 

.h:
#import <AcessoBio/AcessoBioManager.h>
#import <AcessoBio/AcessoBio-Swift.h>

@interface YourUnicoConfigClass : AcessoBioConfigDataSource {}

@end

.m:
@implementation YourUnicoConfigClass

- (NSString * _Nonnull)getBundleIdentifier {
    return @"<YOUR_MOBILE_BUNDLE_IDENTIFIER>"
}

- (NSString * _Nonnull)getHostInfo {
    return @"<YOUR_HOST_INFO>"
}

- (NSString * _Nonnull)getHostKey {
    return @"<YOUR_HOST_KEY>"
}

- (NSString * _Nonnull)getMobileSdkAppId {
    return @"<YOUR_MOBILE_SDK_APP_ID>"
}

- (NSString * _Nonnull)getProjectId {
    return @"<YOUR_PROJECT_ID>"
}

- (NSString * _Nonnull)getProjectNumber {
    return @"<YOUR_PROJECT_NUMBER>"
}

@end

```
  </TabItem>

  <TabItem value="swift" label="Swift">

```swift

import AcessoBio

class YourUnicoConfigClass : AcessoBioConfigDataSource {
    
    func getProjectNumber() -> String {
        return "<YOUR_PROJECT_NUMBER>"
    }
    
    func getProjectId() -> String {
        return "<YOUR_PROJECT_ID>"
    }
    
    func getMobileSdkAppId() -> String {
        return "<YOUR_MOBILE_SDK_APP_ID>"
    }
    
    func getBundleIdentifier() -> String {
        eturn "<YOUR_MOBILE_BUNDLE_IDENTIFIER>"
    }
    
    func getHostInfo() -> String {
        return "<YOUR_HOST_INFO>"
    }
    
    func getHostKey() -> String {
        return "<YOUR_HOST_KEYO>"
    }
}

```

  </TabItem>
</Tabs>

#### Opcão 2: Embarcando o arquivo JSON

Adicione o arquivo salvo na raiz do seu projeto.

## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-selfies)
- [Referencias do SDK](referencias);


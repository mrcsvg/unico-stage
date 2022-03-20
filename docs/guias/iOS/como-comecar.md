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

### Obtendo suas credenciais

Para utilizar nossos SDKs você precisará importar suas credenciais (Client API Key) em seu projeto por meio de um arquivo JSON. Utilize o passo-a-passo a seguir para gerar e importar as credenciais em seu projeto.

#### Gerando as credenciais;

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Crie ou edite uma nova `API Key`;
4. Marque o campo "Utiliza liveness com interação" como **SIM** caso queira habilitar a câmera interativa;
5. Marque o campo "Utiliza autenticação segura na SDK" como **SIM**;
6. Expanda a seção SDK iOS, adicione o nome de sua aplicação iOS e o Bundle ID;
7. Salve as alterações.

#### Embarcando as credenciais em seu projeto

1. Acesse o portal do cliente da **Unico** com suas credenciais;
2. No menu *Configurações* navegue até *Integração* e em seguida até *API Key*;
3. Ao lado da `API Key` desejada, pressione o botão de **Download**;
4. Selecione a opção **iOS**;
5. Clique em "**Gerar**";
6. Automaticamente, uma nova aba será aberta contendo informações do projeto em formato JSON.
7. Salve o conteúdo desta nova aba em um novo arquivo JSON;
8. Adicione o arquivo salvo em seu projeto. (Explicaremos como utilizar o arquivo em nossos guias)

<!-- TODO Destacar que o arquivo precisa estar em um lugar público -->

:::caution Bloqueador de Pop-ups
Se nada acontecer, verifique o bloqueador de popups de seu navegador
:::

## Configuração e instalação

### Utilizando o CocoaPods

#### Instalação 

CocoaPods é um gerenciador de dependências para projetos Cocoa. Para instruções de uso e instalação, visite a documentação do oficial do [cocoapods](https://cocoapods.org/). Para integrar o SDK do **unico check**  em seu projeto Xcode usando CocoaPods, siga os passos abaixo:

Inclua o ´unicocheck-ios´ em seu *Podfile*:

```bash 
pod ‘unicocheck-ios’
```

Nosso SDK utiliza intra-dependências que possuem `xcconfigs` (configurações) que precisam ser alteradas em tempo de compilação. Para ter o SDK funcionando corretamente em seu projeto, você deve implementar o snippet abaixo em seu *Podfile* para garantir as configurações adequadas do `xcconfigs`.

```bash

target 'YOUR_TARGET' do

    # Comment the next line if you don't want to use dynamic frameworks
    use_frameworks!

    pod ‘unicocheck-ios’

end

post_install do |installer|
    installer.pods_project.targets.each do |target|
        if ["CryptoSwift", "JOSESwift"].include? target.name
            target.build_configurations.each do |config|
                config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
            end
        end
    end
end        

```

:::info Mais detalhes
Para mais informações sobre o `xcconfigs`, acesse o [link](https://github.com/CocoaPods/CocoaPods/issues/9775#issuecomment-722298424).
:::


Em seguida, basta utilizar o comando abaixo em seu terminal para instalar as dependências.

```
pod install --repo-update
```

### Utilizando o Swift Package Manager (SPM)

O Swift Package Manager é uma ferramenta para gerenciar a distribuição do código Swift. Ele é integrado ao sistema de compilação Swift para automatizar o processo de download, compilação e vinculação de dependências. Para adicionar o SDK do **unico check** ao seu projeto, basta incluir a dependência em seu arquivo `Package.swift`, conforme abaixo:

```bash title="Package.swift"
dependencies: [
    .package(url: "https://github.com/acesso-io/unico-check-ios.git", .upToNextMajor(from: "2.1.0"))
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


## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Entre em contato através de nosso e-mail [uporte.unicocheck@unico.io](mailto:uporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te mostrar como importar nosso SDK em seu projeto e como seguir com a implementação.

- [Guia para implantação de captura de Selfies](fluxos/captura-selfies)
- [Guia para implantação de captura de documentos](fluxos/captura-selfies)
- [Referencias do SDK](referencias);


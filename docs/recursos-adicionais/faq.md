---
sidebar_label: 'FAQs'
sidebar_position: 1
hide_table_of_contents: true
---

# FAQs

Consolidamos aqui algumas das perguntas mais frequentes sobre nossos SDKs. Confira abaixo:


import TOCInline from '@theme/TOCInline';


<TOCInline toc={toc} />


## Qual é o tamanho da SDK Android?
O SDK Android da Unico aumenta o tamanho do seu aplicativo em 9 MB.

## Qual é o tamanho da SDK iOS?
O SDK iOS da Unico aumenta o tamanho do seu aplicativo em 4,9 MB.

## Qual a importância de implementar a SDK no seu projeto?
Nossas SDKs contam com recursos de criptografia e segurança contra injection de imagens. Além disso, nossas SDKs possuem recursos que auxiliam o usuário a obter fotos biometricamente válidas, reduzindo o drop das imagens quando comparados a captura realizada pelas câmeras padrões dos dispositivos.

## Qual é o diferencial da nossa SDK?
As SDKs da unico possuem funcionalidades de segurança anti fraude e usabilidade adaptados a diferentes fluxos, tais como: Smartlive com interação, câmera inteligente, câmera normal e captura de documentos. 

## Quais as camadas de segurança das SDKs unico?
Nossas SDKs possuem diversas camadas de segurança que funcionam de forma complementar, tanto a nivel da aplicação quanto em relação aos dados que trafegados entre as SDKs e nosso backend. Nossa SDK possui ofuscação de código, bloqueio de emulador e checagem de bundle do aplicativo que a está executando.

## Qual a rigidez da segurança do JWT? Qual o nível de criptografia?
Os arquivos trafegam em um canal seguro usando criptografia TLS.
Cada arquivo também é criptografado usando o formato JWS (Json Web Signature), que contém as informações da criptografia, os dados que queremos enviar e uma assinatura para o token gerado.
A principal ferramenta de segurança do JWS é a assinatura, que é invalidada caso o conteúdo seja alterado.
Além disso, os prazos de expiração dos tokens são curtos, então a janela para qualquer ataque é pequena.

## Como que eu faço para baixar as novas atualizações da SDK?
Para baixar as novas atualizações, primeiro confira o descritivo da versão no Release Notes - que se encontra na documentação ao lado da "Implementação" - e posteriormente incremente a tag de implementação dentro do seu projeto.

## Quando que eu sei que a SDK possui versões mais atualizadas do que eu estou usando?
É possível se inscrever, junto ao gerente de contas, em nosso newsletter. Assim sempre receberá as novidades via email. Também, possuímos uma documentação de todas as plataformas, clicando na aba de Release Notes encontram-se as informações sobre as últimas atualizações da SDK.

## É possível customizar o Layout da câmera?
É possível, tanto para Android, iOS e JS possuímos uma gama de métodos para a customização. Para saber mais basta clicar na documentação respectiva como por exemplo no ícone do Android, em seguida aparecerá as funcionalidades onde uma delas será “customizações” Android e iOS , ao ir para implementação apresentará todos os itens que podem ser customizados e as demais especificações.

## Como remover/desativar captura automática?
Para desativar a captura automática utilize o método disponibilizado para cada plataforma, que pode ser encontrado na documentação Android e iOS. Basta clicar na aba da sua plataforma.

## Como remover/desativar SmartFrame?
Para desativar o SmartFrame utilize o método disponibilizado para cada plataforma, que pode ser encontrado na documentação Android e iOS. Basta clicar na aba da sua plataforma.

## Conflitos entre arquivos AndroidManifest envolvendo o meta-data `com.google.mlkit.vision.DEPENDENCIES`. O que fazer?
Em cenários onde ocorrem conflitos entre os arquivos de AndroidManifest envolvendo dependências `com.google.mlkit.vision`, basta adicionar a tag `tools:replace="android:value"` dentro do meta-data, ficando dessa forma:

![Conflitos entre arquivos AndroidManifest ](/img/faqs/faq-conflited-mlkit.png)

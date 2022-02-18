---
sidebar_label: 'Captura de documentos'
sidebar_position: 2
---

# Captura de documentos

## Sobre este guia

Este guia foi elaborado para ajudá-lo a integrar nosso SDK Android de forma rápida e fácil. 
Buscamos trazer conceitos básicos, exemplos de implementação dos SDKs e também de como interagir com as APIs REST de nosso motor biométrico.

:::info Vale lembrar
Vale lembrar que este guia foca no processo de captura de imagens. Caso esteja buscando informações sobre as APIs REST do **Unico Check**, sugerimos que visite nosso [API Reference](https://www3.acesso.io/identity/services/v3/docs/), nosso guia de APIs ou nossa página de página [Visão Geral](overview).
:::

Através deste guia, em poucos minutos você será capaz de:

- Implementar a abertura da câmera e captura de imagens;
- Entender como manipular os dados de retorno;
- Entender como utilizar o retorno de nosso SDK com nossas APIs;

## Antes de começar

Certifique-se que você seguiu nosso passo-a-passo para instalação e importação de nosso SDK através [deste guia](como-comecar). É importante também ter em conta as funcionalidades disponíveis neste SDK, como explicado na página de [Visão Geral](overview) deste SDK.

## Recursos disponíveis

Nosso SDK é responsável por renderizar um frame contendo uma silhueta que se ajusta automaticamente com base na proporção da tela do usuário final. Possibilitamos a captura dos seguintes tipos de documentos:

- **CNH:** Captura da CNH aberta;
- **CPF:** Captura do documento de CPF;
- **RG frente:** Captura da frente do RG;
- **RG verso:** Captura do verso do RG;
- **Novo RG frente:** Captura a frente do novo tipo de RG;
- **Novo RG verso:** Captura o verso do novo tipo de RG;
- **Outros:** Captura documento genérico. Para este tipo de captura você deve informar o título do documento que será mostrado na captura para o usuário usando a propriedade `optional.LABEL_DOCUMENT_TYPE_OTHERS`.


import imgDocumento from '/static/img/guias/img_documentos.png';

<img src={imgDocumento} alt="Captura Manual" className="imgCenter" />

## Implementação

Ao seguir este passo-a-passo, em poucos minutos você terá todo o potencial de nosso SDK embarcado em sua aplicação Android.

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>
<li>

### Inicializar nosso SDK

Para iniciar, crie uma instância do builder (gerado através da interface [`IAcessoBioBuilder`](API#iacessobiobuilder)), fornecendo como parâmetro o *contexto* em questão e a implementação da classe [`AcessoBioListener`](API#acessobiolistener). 

A implementação dessa classe é bem simples e pode ser feita com poucas linhas de código. Tudo que precisa fazer é sobrescrever nossos métodos de callback com as lógicas de negócio de sua aplicação.

<!-- :::info Documentação Adicional
Você pode encontrar mais detalhes sobre a classe [AcessoBioListener](API#acessobiolistener) e sua implementação em nosso API Reference.
::: -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="java" label="Java" default>

```java
public class MainActivity extends AppCompatActivity implements AcessoBioListener {

    private AcessoBioListener callback = new AcessoBioListener() {
        @Override
        public void onErrorAcessoBio(ErrorBio errorBio) { }

        @Override
        public void onUserClosedCameraManually() { }

        @Override
        public void onSystemClosedCameraTimeoutSession() { }

        @Override
        public void onSystemChangedTypeCameraTimeoutFaceInference() { }
    };

    private IAcessoBioBuilder acessoBioBuilder = new AcessoBio(this, callback);
}
```

  </TabItem>

  <TabItem value="kotlin" label="Kotlin">

```kotlin
internal class MainActivity : AppCompatActivity() {

    private val callback = object : AcessoBioListener {
        override fun onErrorAcessoBio(errorBio: ErrorBio?) { }
    
        override fun onUserClosedCameraManually() { }
    
        override fun onSystemClosedCameraTimeoutSession() { }
    
        override fun onSystemChangedTypeCameraTimeoutFaceInference() { }
    }

    private val acessoBioBuilder: IAcessoBioBuilder = AcessoBio(this, callback)
}
```

  </TabItem>
</Tabs>

**Implementação das funções de callback**

Note que, conforme o exemplo anterior, o trabalho de implementação da classe [AcessoBioListener](API#acessobiolistener) é, em grande parte, a configuração dos métodos de callback. Cada método será chamado em uma situação específica de retorno de nosso SDK, como detalhado abaixo. 

Basta sobrescrever os métodos exemplificados no passo anterior com as lógicas de negócio de sua aplicação. 

<!-- Para mais detalhes sobre os `listeners`, consulte nossa a [API Reference](API#acessobiolistener) de nosso SDK Android. -->

:::caution Atenção

Todos os métodos acima devem devem ser criados da forma indicada em seu projeto (mesmo que sem nenhuma lógica). Caso contrário, o projeto não compilará com sucesso.

:::

</li>

<li>





### Efetuar abertura da câmera

O último passo é disparar a abertura da câmera. Vamos dividir este processo em algumas etapas:

#### Implementar listeners para eventos da câmera

O método de abertura da câmera precisa saber o que fazer ao conseguir capturar uma imagem ou ao ter algum erro no processo. Informaremos "o que fazer" ao método de abertura da câmera através da implantação de *listeners* que serão chamados em situações de sucesso ou erro.

Através da implementação dos *listeners*, você poderá especificar o que acontecerá em seu App em situações de erro (método `onErrorDocument`) ou sucesso (método `onSuccessDocument`) na captura de imagens.

##### Método `onSuccessDocument`

```javascript
public void onSuccessDocument(ResultCamera result) { }
```

Ao efetuar uma captura de imagem com sucesso, este método será invocado e retornará um objeto do tipo `ResultCamera` que será utilizado posteriormente na chamada de nossas APIs REST. 

<!-- Saiba mais sobre o tipo `ResultCamera` no [API Reference](API#resultcamera) de nosso SDK. -->

##### Método `onErrorDocument`

```javascript
public void onErrorDocument(ErrorBio errorBio) { }
```

Ao ocorrer algum erro na captura de imagem, este método será invocado e retornará um objeto do tipo [`ErrorBio`](#). 

<!-- Saiba mais sobre o tipo `ErrorBio` no [API Reference](API#errorbio) de nosso SDK. -->

:::note Implementação dos listeners
A implementação destes métodos (*listeners*) deverá ser feita através de uma instância da classe [`iAcessoBioDocument`](API#iacessobiodocument). 

<!-- Saiba mais sobre a classe `iAcessoBioSelfie` no [API Reference](API#iacessobioselfie) de nosso SDK. -->
:::

#### Preparar a câmera e abrir a càmera
Preparar a câmera para abertura utilizando o método `prepareDocumentCamera`. Este método retornará um objeto do tipo `UnicoCheckCameraOpener.Document`, que quando retornado será utilizado para a abertura da câmera.

Em seguida, devemos abrir a câmera com o objeto do tipo `UnicoCheckCameraOpener.Document`, utilizando o método `open` fornecendo os seguintes parâmetros:
- Tipo de documento a ser capturado, sendo eles:
  - `DocumentCameraTypes.CNH`: Frame para captura de CNH.
  - `DocumentCameraTypes.CPF`: Frame para captura CPF.
  - `DocumentCameraTypes.OUTROS("descrição")`: Frame somente com o retângulo onde pode ser usado para outros tipos de documentos. Neste tipo, haverá um parâmetro com a descrição do documento. (Ex. contrato)
  - `DocumentCameraTypes.RG_FRENTE`: Frame para captura da frente do RG.
  - `DocumentCameraTypes.RG_VERSO`: Frame para captura da parte traseira do RG.
  - `DocumentCameraTypes.RG_FRENTE_NOVO`: Frame para captura da frente do novo RG.
  - `DocumentCameraTypes.RG_VERSO_NOVO`: Frame para captura da parte traseira do novo RG.
- Os listeners configurados acima;

O exemplo abaixo ilustra os passos acima (configuração dos listeners e abertura da câmera):

 <Tabs>
  <TabItem value="java" label="Java" default>

```java
iAcessoBioDocument cameraListener = new iAcessoBioDocument() {
    @Override
    public void onSuccessDocument(ResultCamera result) { }

    @Override
    public void onErrorDocument(ErrorBio errorBio) { }
};

unicoCheckCamera.prepareDocumentCamera(new DocumentCameraListener() {
    @Override
    public void onCameraReady(UnicoCheckCameraOpener.Document cameraOpener) {
        cameraOpener.open(DocumentType.CNH, cameraListener);
    }

    @Override
    public void onCameraFailed(String message) {
        Log.e(TAG, message);
    }
});
```
  </TabItem>

  <TabItem value="kotlin" label="Kotlin">

```kotlin
val cameraListener: iAcessoBioDocument = object : iAcessoBioDocument {
    override fun onSuccessDocument(result: ResultCamera?) {}

    override fun onErrorDocument(errorBio: ErrorBio?) {}
}

unicoCheckCamera.prepareDocumentCamera(object : DocumentCameraListener {
    override fun onCameraReady(cameraOpener: UnicoCheckCameraOpener.Document?) {
        cameraOpener?.open(DocumentType.CNH, cameraListener)
    }

    override fun onCameraFailed(message: String?) {
        Log.e(TAG, message)
    }
})
```

  </TabItem>
</Tabs>

Em caso de sucesso, o objeto `ResultCamera` retornará 2 atributos: `base64` e `encrypted`. O

- O atributo `base64` pode ser utilizado caso você queira exibir um preview da imagem em seu app;
- O atributo `encrypted` deverá ser enviado na chamada de nossas APIs REST do **unico check**;  

:::caution Conversão do base64 para Bitmap
Caso queira converter o base64 para bitmap, a maneira padrão não funcionará para o Android. Será  necessário realizar o split a partir da vírgula(`,`) para que funcione. Caso queira saber mais, sugerimos a leitura do seguinte artigo [How to convert a Base64 string into a Bitmap image to show it in a ImageView?](https://stackoverflow.com/questions/4837110/how-to-convert-a-base64-string-into-a-bitmap-image-to-show-it-in-a-imageview)
:::

</li>

<li>

### Chamar nossas APIs

<!-- TODO Revisar chamada de API -->

A captura das imagens é apenas a primeira parte da nossa jornada. Após a capturar, você deverá enviar o `encrypted` gerado para nossas APIs, selecionando um dos fluxos disponíveis (detalhados [neste artigo](#)). Exemplo abaixo:

```bash
curl --location --request POST 'https://example.com/services/v3/AcessoService.svc/processes' \
--header 'APIKEY: 11111111-1111-1111-1111-111111111111' \
--header 'Authorization: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
  "subject": {
    "Code": "12345678910",
    "Name": "Bob",
    "Gender": "M",
    "BirthDate": "01/01/0001",
    "Email": "email@example.com",
    "Phone": "5543999999999"
  },
  "imagebase64": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAgSURBVDhPY/wPBAwUACYoTTYYNWDUABAYNWDgDWBgAABrygQclUTopgAAAABJRU5ErkJggg=="
}'

```


</li>

</ol>
</Steps>

## Ficou com dúvidas?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Entre em contato através de nosso e-mail [suporte.unicocheck@unico.io](mailto:suporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos.

- [Guia para implantação de captura de documentos](reconhecimento-facial);
<!-- - [API Reference do SDK](API); -->















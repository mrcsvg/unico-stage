---
sidebar_label: 'Reconhecimento facial'
sidebar_position: 4
---

# Reconhecimento facial

## Sobre este guia

Nossos guias foram elaborados para ajudá-lo a se familiarizar com alguns conceitos básicos, oferecendo uma abordagem rápida e simples, para que você possa se integrar sem qualquer fricção ao nosso motor biométrico.

Caso esteja buscando formas de personalizar sua integração, sugerimos que visite nossa [API Reference](api) para checar todas nossas possibilidades de customização.

Através deste guia de integração com o SDK Web do **Unico Check**, em poucos minutos você será capaz de:

- Implantar a abertura da câmera e captura de imagem;
- Entender como manipular os dados de retorno;
- Entender como utilizar nossas APIs;

## Antes de começar

Certifique-se que você seguiu nosso passo-a-passo para instalação e importação de nosso SDK através [deste guia](como-comecar). É importante também ter em conta as funcionalidades disponíveis neste SDK, como explicado na página de [Visão Geral](overview).

## Recursos disponíveis

Nosso SDK é responável por renderizar um frame contendo uma silhueta que se ajusta automaticamente com base na proporcão da tela do usuário final. A captura da imagem para o reconhecimento facial pode ser feita de duas formas descritas ao longo desse guia. São elas:

### Captura Manual

Neste tipo de experiência seu usuário é totalmente responsável por posicionar sua face dentro da área de captura. Após se posicionar corretamente, o usuário deve clicar em um botão para capturar a imagem. 

Neste tipo de captura, nosso SDK não efetua nenhum tipo de validação do que está sendo capturado e isso pode aumentar as chances de problemas ao enviar o `base64` obtido para o motor de biometria.

### Captura Automática

Neste tipo de experiência, identificamos a face do usuário automáticamente através de algorítimos de visão computacional e o auxiliamos para que se posicione de forma correta dentro da área de captura. Após se posicionar corretamente, capturamos a imagem de forma automática.

Por ajudar o usuário a enquadrar sua face na área de captura, esta opção pode diminuir problemas ao enviar o `base64` às APIs de nosso motor biométrico.

## Implementação

Abaixo um passo-a-passo para ter nosso SDK funcionando em poucos minutos em seu WebApp. 

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>
<li>

### Configurar o tamanho do frame

Como primeiro passo, sugerimos que você configure o tamanho de nosso frame dentro de sua aplicação, a fim de otimizar a área de captura dentro de seu WebApp. Confira abaixo como fazer esta configuração para Web Desktop ou Mobile.

:::tip Dica

Muidas vezes o funcionamento de nosso frame pode ser afetado por alguns design-systems que possuam algum tipo de grid-system como, por exemplo, bootstrap ou material-ui. Para minimizar este risco, certifique-se de posicionar nosso frame (`id="box-camera"`) em algum lugar do código que não herde regras indesejadas de css.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="desktop" label="Desktop" default>

Nas versões Web Desktop, é possível restringir o tamanho de nosso frame para que o mesmo não utilize toda a dimensão de seu WebApp. Para isto, basta envolver nosso frame (`id="box-camera"`) em outra tag html, como no exemplo abaixo:

```html
<div class="container">
  <div id="box-camera"></div>
</div>
```

Idealmente, você deve tentar manter uma proporção adequada entre altura e largura, o que irá facilitar o enquadramento da face do usuário. Abaixo um exemplo:

```css
.container {
  width: 800px;
  height: 600px;
  position: relative;
}
```

Seguindo o exemplo acima, o nosso frame respeitara o tamanho do elemento "pai", neste caso representado pelo container. Desta forma, você tem a flexibilidade para implementar nosso frame da forma mais conveniente para sua aplicação (Como em um modal, por exemplo).

:::caution Testando diversos tamanhos de tela

Testes alterando o tamanho da tela através do modo desenvolvedor de seu browser não irão funcionar. Recomendamos que este tipo de teste seja feito alterando o tamanho da janela de seu browser.
:::

  </TabItem>

  <TabItem value="mobile" label="Mobile">

Diferente do que sugerimos na versão Web Desktop, para uma view Web Mobile recomendamos que o frame de captura ocupe 100% da tela para evitar problemas com nossos algorítimos de visão computacional. Caso a área de captura esteja distorcida, nossa funcionalidade de captura automática (Câmera Inteligente) poderá apresentar problemas de calculo no tracking da face dos usuários.

Sendo assim, recomendamos que na view Web Mobile: 
- O frame de captura ocupe 100% da tela do dispositivo (`100vw/vh`);
- Evitar o scroll horizontal ou vertical (isso pode ser minimizado com um modal);

Você pode conferir um exemplo de implementação através de um projeto que deixamos [nesta página](recursos-adicionais/exemplos) (Angular).

:::caution Testes com  simuladr de devices

Testes de devices utilizando o modo desenvolvedor de seu browser não irão funcionar, dado que, a camera utilizada pelo seu browser é a mesma de seu desktop, que possui uma resolução totalmente diferente da camera de um dispositivo móvel. Recomendamos que este tipo de teste seja feito diretamente no device.
:::

  </TabItem>
</Tabs>

</li>

<li>

### Configurar funções de callback

Um dos objetos que devemos passar como parametro ao método responsável por renderizar o frame de captura é o de **callback**. Este objeto deverá conter funções de callback para casos de sucesso e erro, como exemplificados abaixo.

```javascript
  var callback = {
    on: {
      success: function(obj) {
        console.log(obj.base64);
      },
      error: function(error) {
        console.error(error)
        //confira na aba "Configurações" sobre os tipos de erros
      },
      support: function(error) {
        console.log(error)
        //confira na aba "Configurações" sobre os tipos de erros
      }
    }
  };

```

Este objeto é obrigatório e caso não seja corretamente implementado (contemplando todos os eventos de `success`, `error` ou `support`) irá gerar uma exceção, que caso não tratada, será exibida no console do usuário).

Para mais detalhes sobre o objeto de `callback`, consulte nossa a [API Reference](api/callback) de nosso SDK Web.


</li>

<li>

### Configurar layout do frame

:::note
Este é um passo opcional, porém recomendado. 
:::

Um dos objetos que podemos passar como parametro ao método responsável por renderizar o frame de captura é o de **layout**. Este objeto deverá conter propriedades para customizar a aparência do componente de captura, como exemplificados abaixo.

```javascript
 var layout = {
    silhouette: {
      primaryColor: "#0bbd26",
      secondaryColor: "#bd0b0b",
      neutralColor: "#fff",
    },
    buttonCapture: {
      backgroundColor: "#2980ff",
      iconColor: "#fff",
    },
    popupLoadingHtml: '<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Loading...</div>',
    boxMessage: {
      backgroundColor: "#2980ff",
      fontColor: "#fff"
    },
    boxDocument: {
      backgroundColor: "#2980ff",
      fontColor: "#fff"    
    }
  }
```

Para mais detalhes sobre o objeto de `layout`, consulte nossa a [API Reference](api/layout) de nosso SDK Web.

</li>


<li>

### Configurar modo de captura e iniciar a camera

O último passo, porém não menos importante (talvez o mais importante!) é configurar o modo de captura da camera. Como explicamos [acima](reconhecimento-facial#recursos-disponíveis) existem dois modos de captura disponíveis. Neste passo você irá selecionar qual deseja utilizar através do objeto `configurations`.

<Tabs>
  <TabItem value="manual" label="Captura Manual" default>

#### Captura manual

Caso deseje utilizar a captura manual, o objeto configurations deverá conter a propriedade `TYPE` setada em `1`.

```javascript
  var configurations = {
    TYPE: 1
  }

  acessoWebFrame.initDocument(configurations, callback, layout);
```

  </TabItem>

  <TabItem value="automatico" label="Captura Automática">

#### Captura inteligente (automática)

Caso deseje utilizar a captura automática, o objeto configurations deverá conter a propriedade `TYPE` setada em `2`.

Para a captura inteligente, os modelos de visão computacional também devem ser carregados através do método `loadModelsCameraInteligence`, conforme exemplificado abaixo.

```javascript
  var configurations = {
    TYPE: 2
  }

  acessoWebFrame.webFrameModel.loadModelsCameraInteligence("https://meuprojeto.com.br/models").then(() => {
      acessoWebFrame.initCamera(configurations, callback, layout);
  })
  .catch((error) => {
    console.error(error);
    //Confira em "Configurações" a lista de erros e demais informações
  });
```

  </TabItem>
</Tabs>


</li>

<li>

### Chamar nossas APIs

A captura das imagens é apenas a primeira parte da nossa jornada. Após a capturar, você deverá enviar o `base64` gerado para nossas APIs, selecionando um dos fluxos disponíveis (detalhados [neste artigo](#)). Exemplo abaixo:

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
  "onlySelfie": true,
  "imagebase64": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAgSURBVDhPY/wPBAwUACYoTTYYNWDUABAYNWDgDWBgAABrygQclUTopgAAAABJRU5ErkJggg=="
}'

```


</li>

<li>

### Juntando todas as peças

Se você chegou até aqui, já deve ter tudo configurado e ready-to-go! Porém, não custa nada deixar dois exemplos de ponta-a-ponta.

Abaixo dois exemplos completos, com captura manual ou automática.

<Tabs>
  <TabItem value="manual" label="Captura Manual" default>

Exemplo com captura manual:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  
  var callback = {
    on: {
      success: function(obj) {
        console.log(obj.base64);
      },
      error: function(error) {
        console.error(error)
        //confira na aba "Configurações" sobre os tipos de erros
      },
      support: function(error) {
        console.log(error)
        //confira na aba "Configurações" sobre os tipos de erros
      }
    }
  };

  var layout = {
    silhouette: {
      primaryColor: "#0bbd26",
      secondaryColor: "#bd0b0b",
      neutralColor: "#fff",
    },
    buttonCapture: {
      backgroundColor: "#2980ff",
      iconColor: "#fff",
    },
    popupLoadingHtml: '<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Loading...</div>',
    boxMessage: {
      backgroundColor: "#2980ff",
      fontColor: "#fff"
    },
    boxDocument: {
      backgroundColor: "#2980ff",
      fontColor: "#fff"    
    }
  }

  var configurations = {
    TYPE: 1
  }

  acessoWebFrame.initCamera(configurations, callback, layout);
});
```

  </TabItem>

  <TabItem value="automatico" label="Captura Automática">

Exemplo com captura automática:

```javascript

document.addEventListener("DOMContentLoaded", () => {
  
    var callback = {
      on: {
        success: function(obj) {
          console.log(obj.base64);
        },
        error: function(error) {
          console.error(error)
          //confira na aba "Configurações" sobre os tipos de erros
        },
        support: function(error) {
          console.log(error)
          //confira na aba "Configurações" sobre os tipos de erros
        }
      }
    };

  var layout = {
    silhouette: {
      primaryColor: "#0bbd26",
      secondaryColor: "#bd0b0b",
      neutralColor: "#fff",
    },
    buttonCapture: {
      backgroundColor: "#2980ff",
      iconColor: "#fff",
    },
    popupLoadingHtml: '<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Loading...</div>',
    boxMessage: {
      backgroundColor: "#2980ff",
      fontColor: "#fff"
    },
    boxDocument: {
      backgroundColor: "#2980ff",
      fontColor: "#fff"    
    }
  }

  var configurations = {
    TYPE: 2
  }

  acessoWebFrame.webFrameModel.loadModelsCameraInteligence("https://meuprojeto.com.br/models").then(() => {
      acessoWebFrame.initCamera(configurations, callback, layout);
  })
  .catch((error) => {
    console.error(error);
    //Confira em "Configurações" a lista de erros e demais informações
  });

});

```


  </TabItem>
</Tabs>

Como mencionado acima, em ambos os casos, caso o evento success seja disparado, iremos retornar um `base64` que deverá ser enviado para nossas APIs do motor biométrico.

```javascript
{
    base64: string
}
```

</li>
</ol>
</Steps>

## Ficou com dúvidas?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Entre em contato atrvés de nosso e-mail [suporte.unicocheck@unico.io](mailto:suporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Proximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcinalidade de captura de documentos.

- [Guia para implantação de captura de documentos](reconhecimento-facial);
- [API Reference do SDK](API);










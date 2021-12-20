---
sidebar_label: 'API Reference'
sidebar_position: 8
title: Unico Check - Web SDK
description: API Reference do SDK Web do Único Check
keywords: 
  - Web
---

# SDK API Reference

## Sobre este guia

Este guia referencia todos os métodos e objetos disponíveis no SDK Web da **Unico Check**.

## Métodos

### `initCamera()` 

Inicializa um frame para captura facial dentro do `div` com `id=box-camera`.

#### Utilização

```javascript
acessoWebFrame.initCamera(configurations, callback, layout);
```

#### Parâmetros


| Nome                                                   | Tipo                             | Descrição                                                             |
| ------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------- |
| `configurations` <div class="label basic required">Required</div> | Object | Objeto que configura o modo de inicialização da camera. Detalhado abaixo em [Configuration para Reconhecimento Facial](API#objeto-configuration-para-reconhecimento-facial).  |
| `callback`                                                        | Function | Funções de callback que serão executadas em caso de erro ou sucesso no retorno do método `initCamera()`. Detalhado abaixo em [Callback](API#callback). | 
| `layout`                                                          | Object | Objeto opcional que configura o layout do frame que é exibido dentro do div com `id="box-camera"`. Detalhado abaixo em [Layout](API#layout).  | 

#### Possíveis retornos

Os retornos deverão ser tratados na função de callback que é passada como parâmetro para o método `initCamera()`. Os possíveis retornos previstos para este método são:

- Success;
- Error;
- Support

Em caso de sucesso (`success`), o método `initCamera()` retornará a imagem capturada em formato *base64*. Este base64 deverá ser enviado para nossas APIs para completar o processo de verificação biométrica.

```javascript
{
    base64: string
}
```

Este método também poderá retornar um objeto de `error` ou `support`, ambos detalhados abaixo na sessão [Retorno](API#Retornos).


------------------

### `initDocument()`

Inicializa um frame para captura de documentos dentro do `div` com `id=box-camera`.

#### Utilização

```javascript
acessoWebFrame.initDocument(configurations, callback, layout);
```

#### Parâmetros


| Nome                                                   | Tipo                             | Descrição                                                             |
| ------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------- |
| `configurations` <div class="label basic required">Required</div> | Object | Objeto que configura o tipo de documento que será capturado. Detalhado abaixo em [Configuration para captura de documentos](API#objeto-configuration-para-captura-de-documentos).  |
| `callback`                                                        | Function | Funções de callback que serão executadas em caso de erro ou sucesso no retorno do método `initDocument()`. Detalhado abaixo em [Callback](API#callback). | 
| `layout`                                                          | Object | Objeto opcional que configura o layout do frame que é exibido dentro do div com `id="box-camera"`. Detalhado abaixo em [Layout](API#layout).  | 

#### Possíveis retornos

Os retornos deverão ser tratados na função de callback que é passada como parâmetro para o método `initDocument()`. Os possíveis retornos previstos para este método são:

- Success;
- Error;
- Support

Em caso de sucesso (`success`), o método `initDocument()` retornará a imagem capturada em formato *base64*. Este base64 deverá ser enviado para nossas APIs para completar o processo de verificação biométrica.

```javascript
{
    base64: string
}
```

Este método também poderá retornar um objeto de `error` ou `support`, ambos detalhados abaixo na sessão [Retorno](API#Retornos).


------------------

### `closeCamera()`(TO-DO)

Método utilizado para fechar camera. Este método pode ser utilizado caso você queira implementar um botão "fechar" ou "voltar", por exemplo. 

#### Utilização
```
acessoWebFrame.closeCamera();
```

#### Parâmetros 

#### Possíveis retornos

------------------

## Propriedades

### `Configuration`  

O objeto `configuration` é obrigatório para os métodos `initCamera()` e `initDocument()` e deve variar conforme cada um dos métodos.

#### Objeto `Configuration` para reconhecimento facial:

Parâmetros do objeto `configuration` para a funcionalidade de reconhecimento facial (utilizado no método `initCamera()`):

| Parâmetro	| Descrição |
| --------- | ---- |
| `TYPE` <div class="label basic required">Required</div> |	Esta propriedade é o que irá indicar o tipo de captura (automática ou manual). Confira as possibilidades na tabela abaixo. | 
| `optional.FACE_MODE` | Esta propriedade irá indicar qual camerá será utilizada (frontal ou traseira). Confira as possibilidade e restrições na tabela abaixo. | 

##### Valores possíveis para o campo`TYPE`

| Valor	| Tipo de captura |
| --------- | ---- |
|	`1` | Câmera normal  |
| `2` | Câmera Inteligente | 

:::tip Modo de captura
Saiba mais sobre as diferenças da **câmera normal** para a **câmera inteligente** (captura automática) [neste artigo](guias/web/reconhecimento-facial#recursos-disponíveis).
:::


##### Valores possíveis para o campo `FACE_MODE`

| Valor	| Câmera |
| --------- | ---- |
|	`1` | Câmera frontal  |
| `2` | Câmera traseira | 

:::caution Nota sobre a câmera traseira
A câmera traseira só pode ser utilizada em dispositivos móveis e com a camera com captura manual. Não atendendo estes critérios, o parâmetro será ignorado.

Recomendamos a utilização deste parâmetro apenas quando tenha certeza que o dispositivo de utilização será um celular e que a captura será realizada por um terceiro, como um funcionário da empresa em seus clientes, por exemplo.

:::

*Exemplo:*
```javascript
{
  TYPE: int,
  optional: {
    FACE_MODE: int
  }
}
```

#### Objeto `Configuration` para captura de documentos

Parâmetros do objeto `configuration` para a funcionalidade de reconhecimento facial (utilizado no método `initDocument()`):

| Parametro	| Descrição |
| --------- | ---- |
| `TYPE` <div class="label basic required">Required</div> |	Esta propriedade é o que irá indicar o tipo de documento que está sendo capturado. Confira as possibilidades na tabela abaixo. | 
| `optional.LABEL_DOCUMENT_TYPE_OTHERS` | Esta propriedade indica o título do tipo documento que será exibido durante o processo de captura para o usuário. Só é aplicado quando o tipo de documento é igual a "Outros". | 

##### Valores possíveis para o campo`TYPE`

| Valor	| Tipo de documento|
| --- | --- |
| `1`| CNH	|   
| `3`| CPF	|   
| `5`| Outros	|   
| `6`| RG frente |	   
| `7`| RG verso |  
| `8`| Novo RG frente |
| `9`| Novo RG verso	| 

:::tip Tipos de documento
Saiba mais sobre os diferentes tipos de documento que podem ser capturados [neste artigo](guias/web/verificacao-documentos#recursos-disponíveis).
:::


*Exemplo:*
```javascript
{
  TYPE: int,
  optional: {
    LABEL_DOCUMENT_TYPE_OTHERS: string
  }
}
```


### `Callback`  

O objeto callback deverá possuir funções de callback que serão disparadas em casos de sucesso, erro ou problemas de compatibilidade com o browser do cliente. Para isto, o objeto deverá contar um tratamento para os seguintes eventos:

| Evento	| Descrição|
| --- | --- |
| `success`| Evento disparado em caso de sucesso na captura. Sempre retornará um base64 como resposta que deverá ser enviado a nossas APIs	|   
| `error`| Evento disparado caso ocorra algum erro que não esteja relacionado com problemas de suporte (compatibilidade) quanto ao browser do usuário	|   
| `support`| Evento disparado caso ocorra algum problema de compatibilidade com o browser do usuário	|   

O objeto deve ser estruturado conforme o exemplo abaixo:

```javascript
{
  on: {
    success: function(obj) {
      console.log(obj.base64);
    },
    error: function(error) {
      console.error(error)
    },
    support: function(error) {
      console.log(error)
    }
  }
}
```

:::caution Atenção
Caso o objeto não seja implementado corretamente, nosso SDK lançará um erro no console do usuário informando que a implementação do callback está incorreta.
:::

### `Layout`

O objeto `layout` não é obrigatório para os métodos `initCamera()` e `initDocument()`. Através deste objeto é possível customizar o estilo de alguns componentes, como por exemplo: Botão de captura, silhueta, box dos documentos, popups entre outros.

Confira abaixo as possibilidades de customização:

| Propriedade | Tipo | Descrição |
| ----------- | ---- | --------- |
|`silhouette.primaryColor`| String - hexadecimal | Cor da silhueta quando a face está enquadrada corretamente na área de captura no modo câmera inteligente.  |
|`silhouette.secondaryColor`| String - hexadecimal | Cor da silhueta quando encontra uma face porém não está enquadrada corretamente na área de captura no modo câmera inteligente.  |
|`silhouette.neutralColor`| String - hexadecimal | Cor da silhueta padrão no câmera normal e quando encontra não encontra nenhuma face no modo câmera inteligente.  |
|`buttonCapture.backgroundColor`| String - hexadecimal | Cor de fundo do botão de captura.  |
|`buttonCapture.iconColor`| String - hexadecimal | Cor do ícone do botão de captura.  |
|`popupLoadingHtml`| String - html | Html injetado no popup de *loading* que possui o `id="box--loading"` (que já possui a cor de fundo branca como padrão). Este html permite customizar a parte interna do popup. A cor de fundo pode ser subscrita via css.  |
|`boxMessage.backgroundColor`| String - hexadecimal | Cor do fundo do box de mensagem de enquadramento no modo câmera inteligênte.  |
|`boxMessage.fontColor`| String - hexadecimal | Cor do fonte do box de mensagem de enquadramento no modo câmera inteligênte.  |
|`boxDocument.backgroundColor`| String - hexadecimal | Cor do fundo do box de documento.  |
|`boxDocument.fontColor`| String - hexadecimal | Cor da fonte do box de documento. |


*Exemplo:*

```javascript
{
  silhouette: {
    primaryColor: string,
    secondaryColor: string,
    neutralColor: string,
  },
  buttonCapture: {
    backgroundColor: string,
    iconColor: string,
  },
  popupLoadingHtml: string,
  boxMessage: {
    backgroundColor: string,
    fontColor: string
  },
  boxDocument: {
    backgroundColor: string,
    fontColor: string    
  }
}
```

:::caution Propriedades não existentes ou incorretas
Caso alguma propriedade indicada neste objeto não exista ou não esteja no padrão correto (como o código hexadecimal para as cores, por exemplo), será ignorada, mantendo o valor padrão existente para a configuração.
:::

 
## Retornos

Abaixo o detalhamento dos objetos retornados para as funções de callback;

#### success
Retorna um objeto contendo o base64 capturado.

```javascript
{
    base64: string
}
```

#### support
Retorna um objeto com os browsers suportados para que você possa instruir seu usuário a mudar de browser:

```javascript
{
    code: number, //código do erro
    message: string, //mensagem de erro
    type: = string, //tipo de erro
    stack: [
        {
            message: 'Navegadores permitidos:',
            listBrowsersSupport: [string, ...]
        }
    ];
}
```

#### error
Retornado caso algum erro ocorra no processo de captura. Os códigos de erro mapeados estão disponíveis [nesta tabela](#códigos-de-erro)

```javascript
{
    code: number, //código do erro
    message: string, //mensagem de erro
    type: = string, //tipo de erro
    stack: objeto //opcional (usado para casos que não precisamos retornar mais detalhes sobre erros internos, ideal é que caso exista armazenar e nos relatar se necessário)
}
```


### Códigos de erro


| Código |	tipo	| Descrição |  
| ------ | ------ | ----------|  
|`100` |	´DefaultError´ |	Ops! Algo inesperado aconteceu |  
|`101` |	´PermissionError´ |	Usuário negou permissão de acesso a câmera |  
|`102` |	´SessionError´ |	Timeout, sessão expirada por tempo máximo para captura excedido |  
|`103` |	´SessionError´ |	Timeout, sessão expirada por inatividade |  
|`104` |	´LifecicleError´ |	Captura encerrada por estar com orientação no modo LANDSCAPE |  
|`105` |	´LifecicleError´ |	Captura encerrada por inatividade de tela |  
|`106` |	´LifecicleError´ |	Captura encerrada pelo usuário desligar o display |  
|`107` |	´ImplementationError´ |	O elemento com id #box-camera não foi encontrado |  
|`108` |	´ImplementationError´ |	Tipo de câmera inválido |  
|`109` |	´ModelError´ |	Modelos não foram carregados previamente |  
|`110` |	´ImplementationError´ |	Métodos de Callback não implementados corretamente |  
|`111` |	´ModelError´ |	Não foi possível baixar os modelos, pode ser erro de diretório |  
|`112` |	´SupportError´ |	Browser não suportado |  
|`114` |	´PermissionError´ |	Câmera ocupada por outra aplicação |  

Como exemplo, deixamos um snippet de código sugerindo alguns tratamentos para nossos códigos de erro.

```javascript
{
  on: {
    success: function(obj) {
      console.log(obj.base64);
    },
    error: function(error) {
      if(error.code === 100){
        //Um erro que não prevíamos, neste caso a captura está interrompida por mau funcionamento, armazenar e entrar em contato conosco.
      }
      else
      if(error.code === 101) {
        //Usuário negou a permissão de acesso a câmera ou foi perdida, ideal é direcionar o usuário para conceder permissão e dar um refresh na página.
      }
      else
      if(error.code === 102) {
        //Tempo de sessão esgotou, 40 segundos
        //Instrua o usuário a tentar novamente
      }
      else
      if(error.code === 103) {
        //Tempo do smart câmera aberto sem encontrar nenhuma face durante 20 segundos
        //Instrua o usuário a tentar novamente
      }
      else
      if(error.code === 104) {
        //Usuário está com o "Lock screen desabilitado"
        //Instrua o usuário que ele não pode deitar o celular durante a captura
      }
      else
      if(error.code === 105) {
        //Usuário precisa estar durante a captura com o foco na aba, caso ele saia para outro aplicativo, fechamos a câmera.
        //Instrua o usuário a tentar novamente
      }
      else
      if(error.code === 106) {
        //Usuário não pode desligar o visor da tela do celular durante a captura, fechamos a câmera.
        //Instrua o usuário a tentar novamente
      }
      else
      if(error.code === 107 || error.code === 108 || error.code === 109 || error.code === 110 || error.code === 111) {
        //Erro de implementação durante a integração
      }
      else
      if(error.code === 112) {
        //Browser não suportado
        //Instrua o usuário a ir para um browser suportado de acordo com a lista retornada no callback
      }
      else
      if(error.code === 114) {
        //Câmera ocupada por outra aplicação
        //Instruir o usuário a fechar a câmera do outro software ou aba, geralmente acontece no dektop.
      }
    },
    support: function(error) {
      error.stack[0].listBrowsersSupport -> lista de browser suportados
      //pode ser feito via código ou direto olhando os Browser suportados na doc, porém a segunda maneira 
      //pode se tornar falha a cada novo release que pode mudar, seja adicionando novos Browsers ou removendo.
    }
  }
}
```




## Popups (To be Reviewed)
***Carregamento***: Acionado no início do carregamento dos arquivos até que esteja tudo pronto para o usuário realizar a captura ou entre capturas nos casos de captura frente e verso combinada de documentos.
***Mensagem de enquadramento***: Label usada para auxiliar o usuário no enquadramento da face no modo CÂMERA INTELIGENTE. Adicionar regras css que afetam a posição do box ou tamanho, deverá causar mau funcionamento, pois a posição do box é calculada automaticamente em tempo real.
---
sidebar_label: 'API Reference'
sidebar_position: 8
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

Os retornos deverão ser tratados na função de callback que é passada como parametro para o método `initCamera()`. Os possíveis retornos previstos para este método são:

- Success;
- Error;
- Support

Em caso de sucesso (`sucess`), o método `initCamera()` retornará a imagem capturada em formato *base64*. Este base64 deverá ser enviado para nossas APIs para completar o processo de verificação biométrica.

```javascript
{
    base64: string
}
```

Este método também poderá retornar um objeto de `error` ou `support`, ambos detalhados abaixo na sessão [Retorno](API#Retornos).


------------------

### `initDocument()`(TO-DO)

#### Utilização

#### Parâmetros

#### Possíveis retornos

------------------

### `closeCamera()`(TO-DO)

Método usado para fechar a câmera caso queira implementar um botão "Voltar" ou outros fluxos que exigem a possibilidade do usuário fechar a câmera. Siga abaixo o exemplo:

#### Utilização

```
acessoWebFrame.closeCamera();
```

#### Parâmetros

#### Possíveis retornos

------------------

## Propriedades

### `Configuration`  

#### Objeto `Configuration` para reconhecimento facial


Configurações
Veja o exemplo de como o objeto de configuração deve ser passado:

```javascript
{
  TYPE: int,
  optional: {
    FACE_MODE: int,
    LABEL_DOCUMENT_TYPE_OTHERS: string,
  }
}
```

A propriedade TYPE é obrigatória e varia de acordo com os métodos `initCamera` e `initDocument`. Segue abaixo a tabela de cada tipo de acordo com o método.


| Descrição	| TYPE |
| --------- | ---- |
| Câmera normal |	1 | 
| Câmera Inteligente | 2 | 

**Câmera normal:** Exibe um frame com silhueta ajustavel automaticamente com base na proporcão da tela do usuário com captura manual.  
**Câmera Inteligente:** Exibe um frame com silhueta ajustavel automaticamente com base na proporcão da tela do usuário, usando visão computacional na identificação da face, auxílio no enquadramento da face e captura automática.


**optional.FACE_MODE:** Não é obrigatório, usado no modo câmera normal e tendo 1 como câmera frontal e 2 como câmera traseira, a câmera traseira só será aplicada para o modo câmera normal no celular, caso contrário será ignorado. Por isso esse parâmetro deve ser passado como valor 2 somente em casos que tenha certeza de ser um celular e em casos que essa captura é utilizada em ambiente controlado, como por exemplo a captura é realizada por um funcionário da empresa em seus clientes.


#### Objeto `Configuration` para documentos


| Descrição	| TYPE |
| --- | --- |
| CNH	|1|
| CPF	|3|
| Outros	|5|
| RG frente	|6|
| RG verso	|7|
| Novo RG frente	|8|
| Novo RG verso	|9|


**CNH:** Possui silhuetta da CNH aberta, retornando o base64 respectivo.  
**CPF:** Possui silhuetta do CPF, retornando o base64 respectivo.  
**Outros:** Possui silhuetta genérica aonde no invoke passa o título do documento que será mostrado na captura para o usuário usando a propriedade optional.LABEL_DOCUMENT_TYPE_OTHERS passando a descrição do documento.  
**RG frente:** Possui silhuetta do RG frente, retornando os o base64 respectivo.  
**RG verso:** Possui silhuetta do RG verso, retornando o base64 respectivo.  
**Novo RG frente:** Possui silhuetta do novo RG frente, retornando o base64 respectivo.  
**Novo RG verso:** Possui silhuetta do novo RG verso, retornando o base64 respectivo.  


**optional.LABEL_DOCUMENT_TYPE_OTHERS:** Não é obrigatório, passa o título do documento que será mostrado na captura para o usuário, porém só é aplicado quando o tipo de documento é "Outros". (Confira na tabela de TYPES para documento)  



### `Callback`  

Veja como o objeto de callback deve ser estruturado abaixo e possui três métodos de callback que são sucess, error e support

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

Caso não seja implementado corretamente será lançado um console.error no console do Browser que a implmentação dos callbacks está incorreta.

### `Layout`

O objeto layout não é obrigatório, se trata de customizar o as cores e html dos componentes como por exemplo, botão de captura, silhueta, box do documento, popups e box de mensagem no smart câmera. Deve ser estruturado abaixo:

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


Caso as propriedades não existam, ou não estejam no padrão correto ou tipo correto como hexadecimal por exemplo para cores, serão ignoradas mantendo ou valor padrão ou passando vazio.

`silhouette.primaryColor`: String como hexadecimal, se trata da cor da silhueta quando a face está enquadrada corretamente na silhueta no modo câmera inteligente.  
`silhouette.secondaryColor`: String como hexadecimal, se trata da cor da silhueta quando encontra uma face porém não está enquadrada corretamente na silhueta no modo câmera inteligente.  
`silhouette.neutralColor`: String como hexadecimal, se trata da cor da silhueta padrão no câmera normal e quando encontra não encontra nenhuma face no modo câmera inteligente.  
`buttonCapture.backgroundColor`: String como hexadecimal, cor de fundo do botão de captura.  
`buttonCapture.iconColor`: String como hexadecimal, cor do ícone do botão de captura.  
`popupLoadingHtml`: String passando um html, esse html será injetado no popup de loading que possui o id #box--loading já vindo com a cor de fundo branca como padrão, com isso pode injetar o html que desejar e estilzar a parte interna do popup, para a cor de fundo basta subscrever via css.  
`boxMessage.backgroundColor`: String como hexadecimal, cor do fundo do box de mensagem de enquadramento no modo câmera inteligênte.  
`boxMessage.fontColor`: String como hexadecimal, cor do fonte do box de mensagem de enquadramento no modo câmera inteligênte.  
`boxDocument.backgroundColor`: String como hexadecimal, cor do fundo do box de documento.  
`boxDocument.fontColor`: String como hexadecimal, cor da fonte do box de documento.  


## Retornos




#### support

Retorna um objeto contendo o base64 capturado.

```javascript
{
    base64: string
}
```

#### support
Retorna um objeto com os Browsers suportados para que possa implementar do seu lado e instruir o usuário a ir para um Browser suportado com as seguintes propriedades:

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

Retorna o caso algum erro aconteça no processo, siga abaixo o objeto de erro e tabela de erros:

```javascript
{
    code: number, //código do erro
    message: string, //mensagem de erro
    type: = string, //tipo de erro
    stack: objeto //opicional (usado para casos que não precisamos retornar mais detalhes sobre erros internos, ideal é que caso exista armazenar e nos relatar se necessário)
}
```


### Códigos de erro


| Código |	tipo	| Descrição |  
| ------ | ------ | ----------|  
|100 |	DefaultError |	Ops! Algo inesperado aconteceu |  
|101 |	PermissionError |	Usuário negou permissão de acesso a câmera |  
|102 |	SessionError |	Timeout, sessão expirada por tempo máximo para captura excedido |  
|103 |	SessionError |	Timeout, sessão expirada por inatividade |  
|104 |	LifecicleError |	Captura encerrada por estar com orientação no modo LANDSCAPE |  
|105 |	LifecicleError |	Captura encerrada por inatividade de tela |  
|106 |	LifecicleError |	Captura encerrada pelo usuário desligar o display |  
|107 |	ImplementationError |	O elemento com id #box-camera não foi encontrado |  
|108 |	ImplementationError |	Tipo de câmera inválido |  
|109 |	ModelError |	Modelos não foram carregados previamente |  
|110 |	ImplementationError |	Métodos de Callback não implementados corretamente |  
|111 |	ModelError |	Não foi possível baixar os modelos, pode ser erro de diretório |  
|112 |	SupportError |	Browser não suportado |  
|114 |	PermissionError |	Câmera ocupada por outra aplicação |  


Siga abaixo um manual de boas práticas baseado em cada código:

```javascript
{
  on: {
    success: function(obj) {
      console.log(obj.base64);
    },
    error: function(error) {
      if(error.code === 100){
        //Um erro que não prevíamos, neste caso a captura está interompida por mau funcionamento, armazenar e entrar em contato conosco.
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




## Popups (To be Reviewd)
***Carregamento***: Acionado no início do carregamento dos arquivos até que esteja tudo pronto para o usuário realizar a captura ou entre capturas nos casos de captura frente e verso combinada de documentos.
***Mensagem de enquadramento***: Label usada para auxiliar o usuário no enquadramento da face no modo CÂMERA INTELIGENTE. Adicionar regras css que afetam a posição do box ou tamanho, deverá causar mau funcionamento, pois a posição do box é calculada automaticamente em tempo real.
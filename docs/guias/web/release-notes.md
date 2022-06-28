---
sidebar_label: 'Release Notes'
sidebar_position: 9
---

# O que há de novo

:::tip Dica
Você já sabe, mas não custa lembrar: Mantenha sempre seu SDK atualizado com a ultima versão disponível.

Utilizamos Versionamento Semântico para numerar nossas versões. Saiba mais [aqui](/conceitos-importantes).
:::

## `3.5.0`
``17/06/2022``
- Atualização da versão do SDK do Smartlive.

:::caution Atenção
Caso você já tenha o SDK instalado e deseja atualizá-lo, será necessário baixar novamente os Recursos adicionais do Unico Check para a captura com Smartlive com interação.
Veja isso na sessão [Embarcando outros arquivos do Unico Check em seu projeto](como-comecar/#embarcando-outros-arquivos-do-unico-check-em-seu-projeto).
:::

## `3.4.3`
``18/04/2022``
- Correção no frame de captura de CNH Aberta em desktop

## `3.4.2`
``12/04/2022``
- Melhoria na qualidade da imagem retornada no base64
- Melhoria em requests de autenticação
- Correção para uso de WebCam na câmera de documentos

## `3.4.1`
``04/04/2022``
- Melhoria em tratamento anti-injection

## `3.4.0`
``04/04/2022``
- Lançamento de frames de captura de documentos com CNH frente e CNH verso.
- Captura de documentos em modo paisagem no desktop

## `3.3.1`
``22/03/2022``
- Ajuste para utilização de função ao invés de classes
- Ajuste na inicialização da camera após a segunda abertura

## `3.3.0`
``10/03/2022`` 
- Ajuste na abertura da camera para Motorola Edge 20
- Ajuste nas informações criptografadas retornadas para o cliente

## `3.2.2`
``18/02/2022``
- Ajuste no fechamento da camera da Facetec quando um erro é retornado

## `3.2.1`
``17/02/2022``
- Remoção da tela de permissão de camera da facetec

### `3.1.0` 
``31/01/2022``
- Feature Flag para exibição do logo da unico

### `3.0.1`
``25/01/2022``
- Remoção do logo da unico

## `3.0.0` 
``24/01/2022``
- Inclusão da funcionalidade de captura com liveness com interação

## Versão `2.0.3`
Correção em um bug nas implementações em Angular > 6. Este bug deixava a tela congelada quando houvesse concorrência entre setTimeout's em nosso SDK e a aplicação do cliente."

## Versão `2.0.2`

- Remoção dos seguintes tipos de documentos utilizados no método `initDocument()`: 
    - **2**: RG frente e verso
    - **4**: Novo RG frente e verso

  Caso esteja utilizando os tipos mencionados acima (2 ou 4), realize a captura simples de cada documento através dos tipos:

    - **6**: RG frente
    - **7**: RG verso
    - **8**: Novo RG frente
    - **9**: Novo RG verso

- Melhorias nos retornos callback de `on.error` e `on.support`.  

- Melhoria na mudança de orientação do celular.
    - Remoção da propriedade: `boxOrientationHtml`
    - Caso a orientação mude, fechamos a câmera e retornamos no callback de erro.

- Maior segurança na SDK.

- Melhoria no objeto de retorno no método `on.success`, adicionando a propriedade `encrypted` que possui um JWT que deve ser enviado em menos de 10 minutos para integração com **Unico check** onboarding.

    ```javascript
    {
        base64: string,
        encrypted: string
    }
    ```

- Mudança no suporte a browsers (confira as versões suportadas [aqui](overview#browsers))


## Versão `1.0.0`
- Remoção da lib js antiga e tornando esta á oficial.

## Versão `0.0.6`
- Correção de silhueta grande em PWA.

## Versão `0.0.5`
- Atualização de plugins externos para versões mais recentes corrigindo vulnerabilidades dos mesmos.

## Versão `0.0.4`
- Correção de câmera invertida para capturas usando câmera traseira dos celulares.

## Versão `0.0.3`
- Versão inicial.

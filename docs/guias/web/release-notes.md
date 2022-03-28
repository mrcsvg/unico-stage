---
sidebar_label: 'Release Notes'
sidebar_position: 9
---

# O que há de novo

:::tip Dica
Você já sabe, mas não custa lembrar: Mantenha sempre seu SDK atualizado com a ultima versão disponível.
:::

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
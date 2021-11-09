---
sidebar_label: 'Release Notes'
sidebar_position: 9
---

:::tip Dica
Você já sabe, mas não custa lembrar: Mantenha sempre seu SDK atualizado com a ultima versão disponível em nosso cdn ou pacote npm.
:::


## Versão 2.0.2

- Remoção de tipos de documentos utilizados no método initDocument
    - 2: RG frente e verso
    - 4: Novo RG frente e verso

- caso esteja utilizando os tipos acima (2 ou 4), realize a captura simples de cada documento através dos tipos:

6: RG frente
7: RG verso
8: Novo RG frente
9: Novo RG verso
- Melhorias nos retornos callback de on.error e on.support.

- Melhoria na mudança de orientação do celular.

Remoção da propriedade: boxOrientationHtml
Caso a orientação mude, fechamos a câmera e retornamos no callback de erro.
- Maior segurança na SDK.

- Melhoria no objeto de retorno no método on.success, adicionando a propriedade "encrypted" que possui um JWT, onde deve ser enviado em menos de 10 minutos para integração com unico check onboarding.


{
    base64: string,
    encrypted: string
}
- Mudança no suporte a browsers:

Tipo	Chrome	Firefox	Opera	Edge	Safari
Windows (desktop)	X	X	-	-	-
Android	X	X	-	-	-
iOS mobile/Macbook	-	-	-	-	X

## Versão 1.0.0
- Remoção da lib js antiga e tornando esta á oficial.

## Versão 0.0.6
- Correção de silhueta grande em PWA.

## Versão 0.0.5
- Atualização de plugins externos para versões mais recentes corrigindo vulnerabilidades dos mesmos.

## Versão 0.0.4
- Correção de câmera invertida para capturas usando câmera traseira dos celulares.

## Versão 0.0.3
- Versão inicial.
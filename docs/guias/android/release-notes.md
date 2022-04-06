---
sidebar_label: 'Release Notes'
sidebar_position: 9
---

# O que há de novo

:::tip Dica
Você já sabe, mas não custa lembrar: Mantenha sempre seu SDK atualizado com a ultima versão disponível.
:::

## Versão 4.0.12
Customização do botão de fechar camera
Correções de erros na customização de sucesso

## Versão 4.0.11
Ajuste para otimizar performance da SDK
Ajuste no seletor de câmera para dispositivos com múltiplas câmeras

## Versão 4.0.10
Correções em configuração de Temas
Resolução de conflitos com bugfender

## Versão 4.0.9
Downgrade do Kotlin para 1.4.0
Ajuste ao abrir a câmera pela segunda vez

## Versão 4.0.8
Correção na encriptação

## Versão 4.0.7
Ajuste de dependencias para tornar nossas bibliotecas compativeis com minCompileSdk 30

## Versão 4.0.6
Adicionada compatibilidade com java 8
Adicionado frames de captura de CNH frente e CNH verso

## Versão 4.0.5
Correção de erro no jitpack

## Versão 4.0.4
Update da biblioteca GSON para versão 2.8.9
Ajuste no modulo de abertura de câmera

## Versão 4.0.3
Corrigimos um bug no modulo de abertura da câmera de documentos

## Versão 4.0.2
Corrigimos um bug que esteva deixando o debug lento ao utilizar nosso SDK.

## Versão 4.0.1
Corrigimos um bug referente a: request prepare camera

## Versão 4.0.0

```
implementation 'com.github.acesso-io:acessobio-android:4.0.0'
```

Essa nova versão conta com melhorias significativas e novidades.

- A partir de agora, o SDK Android conta com a funcionalidade de Prova de Vida. Para atualizar essa nova versão do SDK, solicite junto ao seu gestor de contas a documentação correspondente a nova implementação e ativação da funcionalidade para sua operação.

- O SDK Android está ainda mais seguro.

## Versão 3.0.0

```
implementation 'com.github.acesso-io:acessobio-android:3.0.0'
```

- A partir dessa versão é necessário adicionar no projeto o arquivo: unico-check-mobile-services.json. Procure o customer success ou o gestor de contas para ter acesso ao Portal do Cliente e seguir o passo a passo necessário.

- Não permitimos uso de câmera de emuladores.

- Contamos com mais um frame de captura em documentos, CPF.


## Versão 2.0.5

```
implementation 'com.github.acesso-io:acessobio-android:2.0.5'
```

- Ajuste na captura do log de erro.


## Versão 2.0.4

```
implementation 'com.github.acesso-io:acessobio-android:2.0.4'
```

- Correção de espelhamento de imagem ao utilizar a câmera do tipo "Documento".


## Versão 2.0.3

```
implementation 'com.github.acesso-io:acessobio-android:2.0.3'
```

- Mudança na estrutura de classes.


## Versão 2.0.0-beta.5

```
implementation 'com.github.acesso-io:acessobio-android:2.0.0-beta.5'
```

- Mudança na estrutura de classes.


## Versão 2.0.0-beta.4

```
implementation 'com.github.acesso-io:acessobio-android:2.0.0-beta.4'
```

Essa nova versão traz mudanças significativas. Recomendamos a atualização.

Abaixo, listamos as melhorias e mudanças mais significativas:

- 1. Refatoração de funções públicas, permitindo o retorno assync dentro da própria função.

- 2. Correção de bug de enquadramento de face.

- 3. Refatoração nos métodos disableAutoCapture e disableSmartFrame.

- 4. Correção de bug de travamento de tela após a captura.

## Versão 2.0.0-beta.2

```
implementation 'com.github.acesso-io:acessobio-android:2.0.0-beta.2'
```

A versão 2.0.0 da SDK Android unico está no AR!

Essa nova versão traz mudanças significativas. Recomendamos a atualização.

Abaixo, listamos as melhorias e mudanças mais significativas:

- 1. Troca do motor de tracking biométrico. Migramos do FirebaseMLVision para FaceDetectorMLKit.

- 1.1 Com isso, removemos a necessidade da implementação do Firebase para o uso de nossas tecnologias, diminuindo consideravelmente a fricção na integração e evitando conflitos que anteriormente ocorriam.

- 2. Atualizamos a API padrão de abertura de câmera, migramos da API de Camera2 para API de CameraX.

- 2.1 Com isso, trazemos ganhos significativos na gerência de ciclo de vida, memória, processamento e aumentando a compatibilidade de dispositivos que atendemos.

- 3. Removemos todos os métodos de processos REST da API pública, garbages code e realizamos outras melhorias.

## Versão 1.2.2

```
implementation 'com.github.acesso-io:acessobio-android:1.2.2'
```

Esta versão possui correções e melhorias importantes em relação a versões anteriores.

- A SDK está mais segura com novos métodos de criptografia em real-time.

- A SDK está mais rápida e precisa na detecção de faces com melhorias dos modelos de IA para o câmera inteligente.

- Depreciamos todos os métodos referentes a requisições REST, que outrora permitiam a criação de processos dentro da v3 do unico-onboarding diretamente da SDK.

- Agora é possível configurar o tempo máximo de sessão do seu usuário.

- Agora é possível configurar o tempo máximo de captura ao utilizar a detecção da face (smart câmera). Caso o usuário encontre alguma dificuldade para capturar a foto através da detecção de face e ultrapasse o tempo determinado em seu processo, a captura será alterada automaticamente para a manual, visando facilitar a ação para o usuário.

## Versão 1.2.1

```
implementation 'com.github.acesso-io:acessobio-android:1.2.1'
```

Bem vindos a versão 1.2.1

- Nesta versão trazemos grande otimização no tamanho da SDK, diminuindo em 75% do tamanho anterior.

Incluímos também melhorias de performance, entre outras pequenas correções que sempre estamos realizando ;)

## Versão 1.2.0

```
implementation 'com.github.acesso-io:acessobio-android:1.2.0'
```

Esta versão possui correções e melhorias importantes em relação a versão anterior (1.1.19.5).

- A SDK está 42% mais leve com a remoção de várias intra-dependências e remoções de garbage-code.

- A SDK está mais segura com novos métodos de criptografia em real-time

- A SDK está mais rápida com os novos modelos de IA para o câmera inteligente.

- Removemos todos os métodos que permitiam acesso ao Liveness com interação (até segunda ordem).

Entre outras limpezas que sempre estamos realizando ;)

## Versão 1.1.19.5

```
implementation 'com.github.acesso-io:acessobio-android:1.1.19.5'
```

- Remoção do método de validação REST no fluxo básico de captura de documentos.

## Versão 1.1.19.4

```
implementation 'com.github.acesso-io:acessobio-android:1.1.19.4'
```

- Atualização do Firebase ML-Vision 19.0.3 para 24.1.0.

- Atualização do Google Services 4.3.3 para 4.3.5.

## Versão 1.1.19.2

```
implementation 'com.github.acesso-io:acessobio-android:1.1.19.2'
```

- Agora é possível customizar todos os elementos visuais utilizando também cores no formato hexadecimal. Lembrando que os formatos padrões dos SO's continuam ativos, como UIColor para iOS e Colors para Android.

- Adicionamos um novo método de retorno para notificar a sua classe implementadora no momento em que o usuário fechar a câmera manualmente.

- Corrigimos o retorno do método de FaceMatch, devolvendo o objeto completo com base64 da selfie, base64 do documento e o status de FaceMatch.

## Versão 1.1.19

```
implementation 'com.github.acesso-io:acessobio-android:1.1.19'
```

Esta versão possui correções e melhorias importantes em relação a versão anterior (1.1.18.1).

- Agora é possível customizar todos os elementos visuais utilizando também cores no formato hexadecimal. Lembrando que os formatos padrões dos SO's continuam ativos, como UIColor para iOS e Colors para Android.

- Adicionamos um novo método de retorno para notificar a sua classe implementadora no momento em que o usuário fechar a câmera manualmente.

- Corrigimos o retorno do método de FaceMatch, devolvendo o objeto completo com base64 da selfie, base64 do documento e o status de FaceMatch.

- Entre outras limpezas que sempre estamos realizando ;)

## Versão 1.1.18.1

```
implementation 'com.github.acesso-io:acessobio-android:1.1.18.1'
```

Esta versão possui correções importantes em relação a versão anterior (1.1.18).

- Adicionamos um novo método de callback (retorno) para notificar a sua classe implementadora no momento em que o usuário fechar a câmera manualmente.

- Corrigimos o callback do método de FaceMatch, devolvendo o objeto completo com base64 da selfie, base64 do documento e o status de facematch.

- Entre outras limpezas que sempre estamos realizando ;)

## Versão 1.1.18

```
implementation 'com.github.acesso-io:acessobio-android:1.1.18'
```

- Novas validações prévias, facilitando a visibilidade de qualquer tipo de anormalidade quanto ao setup previamente a abertura de câmera em si.

- Pequenas melhorias e limpeza em toda solução.

## Versão 1.1.13

```
implementation 'com.github.acesso-io:acessobio-android:1.1.13'
```

- Pequenas correções de bugs e melhorias no fluxo de permissões.

## Versão 1.1.12

```
implementation 'com.github.acesso-io:acessobio-android:1.1.12'
```

- Agora é possível customizar a imagem do ícone de popup de reset de sessão dentro do fluxo do Liveness com interação.

- Removemos a obrigatoriedade da tag allowBackups em AndroidManifest.

## Versão 1.1.11

```
implementation 'com.github.acesso-io:acessobio-android:1.1.11'
```

- Limpeza geral na SDK e corrigimos pequenos bugs no fluxo do Liveness com interação.



## Versão 4.0.0

```
implementation 'com.github.acesso-io:acessobio-android:4.0.0'
```

Essa nova versão conta com melhorias significativas e novidades.

- A partir de agora, o SDK Android conta com a funcionalidade de Prova de Vida. Para atualizar essa nova versão do SDK, solicite junto ao seu gestor de contas a documentação correspondente a nova implementação e ativação da funcionalidade para sua operação.

- O SDK Android está ainda mais seguro.

## Versão 3.0.0

```
implementation 'com.github.acesso-io:acessobio-android:3.0.0'
```

- A partir dessa versão é necessário adicionar no projeto o arquivo: unico-check-mobile-services.json. Procure o customer success ou o gestor de contas para ter acesso ao Portal do Cliente e seguir o passo a passo necessário.

- Não permitimos uso de câmera de emuladores.

- Contamos com mais um frame de captura em documentos, CPF.


## Versão 2.0.5

```
implementation 'com.github.acesso-io:acessobio-android:2.0.5'
```

- Ajuste na captura do log de erro.


## Versão 2.0.4

```
implementation 'com.github.acesso-io:acessobio-android:2.0.4'
```

- Correção de espelhamento de imagem ao utilizar a câmera do tipo "Documento".


## Versão 2.0.3

```
implementation 'com.github.acesso-io:acessobio-android:2.0.3'
```

- Mudança na estrutura de classes.


## Versão 2.0.0-beta.5

```
implementation 'com.github.acesso-io:acessobio-android:2.0.0-beta.5'
```

- Mudança na estrutura de classes.


## Versão 2.0.0-beta.4

```
implementation 'com.github.acesso-io:acessobio-android:2.0.0-beta.4'
```

Essa nova versão traz mudanças significativas. Recomendamos a atualização.

Abaixo, listamos as melhorias e mudanças mais significativas:

- 1. Refatoração de funções públicas, permitindo o retorno assync dentro da própria função.

- 2. Correção de bug de enquadramento de face.

- 3. Refatoração nos métodos disableAutoCapture e disableSmartFrame.

- 4. Correção de bug de travamento de tela após a captura.

## Versão 2.0.0-beta.2

```
implementation 'com.github.acesso-io:acessobio-android:2.0.0-beta.2'
```

A versão 2.0.0 da SDK Android unico está no AR!

Essa nova versão traz mudanças significativas. Recomendamos a atualização.

Abaixo, listamos as melhorias e mudanças mais significativas:

- 1. Troca do motor de tracking biométrico. Migramos do FirebaseMLVision para FaceDetectorMLKit.

- 1.1 Com isso, removemos a necessidade da implementação do Firebase para o uso de nossas tecnologias, diminuindo consideravelmente a fricção na integração e evitando conflitos que anteriormente ocorriam.

- 2. Atualizamos a API padrão de abertura de câmera, migramos da API de Camera2 para API de CameraX.

- 2.1 Com isso, trazemos ganhos significativos na gerência de ciclo de vida, memória, processamento e aumentando a compatibilidade de dispositivos que atendemos.

- 3. Removemos todos os métodos de processos REST da API pública, garbages code e realizamos outras melhorias.

## Versão 1.2.2

implementation 'com.github.acesso-io:acessobio-android:1.2.2'

Esta versão possui correções e melhorias importantes em relação a versões anteriores.

- A SDK está mais segura com novos métodos de criptografia em real-time.

- A SDK está mais rápida e precisa na detecção de faces com melhorias dos modelos de IA para o câmera inteligente.

- Depreciamos todos os métodos referentes a requisições REST, que outrora permitiam a criação de processos dentro da v3 do unico-onboarding diretamente da SDK.

- Agora é possível configurar o tempo máximo de sessão do seu usuário.

- Agora é possível configurar o tempo máximo de captura ao utilizar a detecção da face (smart câmera). Caso o usuário encontre alguma dificuldade para capturar a foto através da detecção de face e ultrapasse o tempo determinado em seu processo, a captura será alterada automaticamente para a manual, visando facilitar a ação para o usuário.

## Versão 1.2.1

implementation 'com.github.acesso-io:acessobio-android:1.2.1'
Bem vindos a versão 1.2.1

- Nesta versão trazemos grande otimização no tamanho da SDK, diminuindo em 75% do tamanho anterior.

Incluímos também melhorias de performance, entre outras pequenas correções que sempre estamos realizando ;)

## Versão 1.2.0

implementation 'com.github.acesso-io:acessobio-android:1.2.0'
Esta versão possui correções e melhorias importantes em relação a versão anterior (1.1.19.5).

- A SDK está 42% mais leve com a remoção de várias intra-dependências e remoções de garbage-code.

- A SDK está mais segura com novos métodos de criptografia em real-time

- A SDK está mais rápida com os novos modelos de IA para o câmera inteligente.

- Removemos todos os métodos que permitiam acesso ao Liveness com interação (até segunda ordem).

Entre outras limpezas que sempre estamos realizando ;)

## Versão 1.1.19.5

implementation 'com.github.acesso-io:acessobio-android:1.1.19.5'
- Remoção do método de validação REST no fluxo básico de captura de documentos.

## Versão 1.1.19.4

implementation 'com.github.acesso-io:acessobio-android:1.1.19.4'
- Atualização do Firebase ML-Vision 19.0.3 para 24.1.0.

- Atualização do Google Services 4.3.3 para 4.3.5.

## Versão 1.1.19.2

implementation 'com.github.acesso-io:acessobio-android:1.1.19.2'
- Agora é possível customizar todos os elementos visuais utilizando também cores no formato hexadecimal. Lembrando que os formatos padrões dos SO's continuam ativos, como UIColor para iOS e Colors para Android.

- Adicionamos um novo método de retorno para notificar a sua classe implementadora no momento em que o usuário fechar a câmera manualmente.

- Corrigimos o retorno do método de FaceMatch, devolvendo o objeto completo com base64 da selfie, base64 do documento e o status de FaceMatch.

## Versão 1.1.19

implementation 'com.github.acesso-io:acessobio-android:1.1.19'
Esta versão possui correções e melhorias importantes em relação a versão anterior (1.1.18.1).

- Agora é possível customizar todos os elementos visuais utilizando também cores no formato hexadecimal. Lembrando que os formatos padrões dos SO's continuam ativos, como UIColor para iOS e Colors para Android.

- Adicionamos um novo método de retorno para notificar a sua classe implementadora no momento em que o usuário fechar a câmera manualmente.

- Corrigimos o retorno do método de FaceMatch, devolvendo o objeto completo com base64 da selfie, base64 do documento e o status de FaceMatch.

- Entre outras limpezas que sempre estamos realizando ;)

## Versão 1.1.18.1

implementation 'com.github.acesso-io:acessobio-android:1.1.18.1'
Esta versão possui correções importantes em relação a versão anterior (1.1.18).

- Adicionamos um novo método de callback (retorno) para notificar a sua classe implementadora no momento em que o usuário fechar a câmera manualmente.

- Corrigimos o callback do método de FaceMatch, devolvendo o objeto completo com base64 da selfie, base64 do documento e o status de facematch.

- Entre outras limpezas que sempre estamos realizando ;)

## Versão 1.1.18

implementation 'com.github.acesso-io:acessobio-android:1.1.18'
- Novas validações prévias, facilitando a visibilidade de qualquer tipo de anormalidade quanto ao setup previamente a abertura de câmera em si.

- Pequenas melhorias e limpeza em toda solução.

## Versão 1.1.13

implementation 'com.github.acesso-io:acessobio-android:1.1.13'

- Pequenas correções de bugs e melhorias no fluxo de permissões.

## Versão 1.1.12

implementation 'com.github.acesso-io:acessobio-android:1.1.12'

- Agora é possível customizar a imagem do ícone de popup de reset de sessão dentro do fluxo do Liveness com interação.

- Removemos a obrigatoriedade da tag allowBackups em AndroidManifest.

## Versão 1.1.11

implementation 'com.github.acesso-io:acessobio-android:1.1.11'

- Limpeza geral na SDK e corrigimos pequenos bugs no fluxo do Liveness com interação.

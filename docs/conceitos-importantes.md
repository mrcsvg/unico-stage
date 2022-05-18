---
sidebar_label: 'Conceitos importantes'
sidebar_position: 3
---

# Conceitos importantes

Abaixo alguns pontos importantes para sua integração:

- O objetivo da SDK é realizar a captura de imagens (selfie e documento);
- A SDK não realiza requisições a Rest-API do Unico check (vide [diagrama](/guias/web/overview#como-funciona-este-sdk));
- Você pode encontrar mais detalhes sobre nossas APIs Rest [nesta página](https://www3.acesso.io/identity/services/v3/docs/#section/Fluxos).
- É importante manter o SDK Unico check atualizado com a última versão disponível;
- O SDK não funciona em emuladores, somente com aparelhos móveis físicos;
- Verifique a versão mínima dos sistemas operacionais suportados por cada versão da SDK (Android, iOS ou Web) em seus respectivos guias,
- A funcionalidade de liveness com interação depende de contato com o nosso backend;
- Não damos suporte para versões desatualizadas das nossas SDKs;
- Utilizamos o Versionamento Semântico para detalhar nossas versões;

:::info Versionamento Semântico

Dado um número de versão MAJOR.MINOR.PATCH, incremente a:

- versão Maior(MAJOR): quando fizer mudanças incompatíveis na API;
- versão Menor(MINOR): quando adicionar funcionalidades mantendo compatibilidade;
- versão de Correção(PATCH): quando corrigir falhas mantendo compatibilidade.

:::


## Smartlive com interação

O Smartlive é a tecnologia da unico para prova de vida, ou seja, garante que o usuário esteja fisicamente presente no momento da captura da selfie, bloqueando tentativas como foto de foto.
Para uma experiência ainda mais segura, nós exigimos a interação do usuário durante a captura.



## Precisando de ajuda?

Esperamos ter ajudado com este artigo. Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

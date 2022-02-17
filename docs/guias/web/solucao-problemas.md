---
sidebar_label: 'Solução de problemas'
sidebar_position: 6
---

## Sobre este guia

:::warning

Work in progress: Por hora isto é só uma sugestão de como lidar com as especificidades que estao surgindo

:::


Aqui estão os problemas comuns que você pode encontrar ao usar o SDK e como resolvê-los. 

Se o seu problema ainda não estiver listado aqui ou você precisar de outro tipo de dúvida, disponibilizamos as seguintes opções para que você possa obter ajuda:

- Entre em contato através de nosso e-mail [suporte.unicocheck@unico.io](mailto:suporte.unicocheck@unico.io);
- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);


## Especificidades por Framework 

### Angular

Caso esteja usando angular pode ser que precise realizar algumas configurações no seu projeto, pois a lib é em javascript, gerando warnings e problemas no uso por não ser em typescript.

SCREENSHOTS

Para resolver os problemas acima, adicione em seu arquivo package.json o seguinte código:

```json
{
  "browser": {
    "crypto": false,
    "fs": false
  }
}
```

SCREENSHOTS

Possui também mais uma configuração que precisará ser feita, o angular reclama de uso de libs em CommonJS ou AMD, por esse motivo adicione o seguinte código em seu arquivo angular.json na hierarquia do objeto json projects > nomeseuprojeto > architect > build > options:

```
"allowedCommonJsDependencies": [
  "unico-webframe"
]
```

 
### Angular 12 >=  

Instale o módulo 'util'

```
npm install util
```

Adicione o caminho do módulo 'util' em paths no arquivo tsconfig.json

```
{
…
"compilerOptions": {
…
"paths": {
"util": ["./node_modules/util"]
}
},
…
}
```

Adicione também o módulo 'util' em allowedCommonJsDependencies no bloco build dentro de arquivo angular.json

```
"build": {
"builder": "@angular-devkit/build-angular:browser",
"options": {
"allowedCommonJsDependencies": [
“unico-webframe”, “util”
]
...
}
...
},
```

### React com react-scripts 5

Caso você esteja utilizando a versão 5 do create-react-app para desenvolver sua
aplicação, é preciso realizar os seguintes passos.
Instale o módulo ‘util’

```
npm install util
ou
yarn add util
```

Caso esteja utilizando TypeScript em seu projeto siga orientação de declaração de tipos para uso em TypeScript.

*Nota: Os react-scripts 5 utilizam do Webpack v5, é possível que apareçam alguns
warnings, pois o Webpack v5 não compreende muito bem o uso de módulos do Node
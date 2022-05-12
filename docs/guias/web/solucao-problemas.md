---
sidebar_label: 'Solução de problemas'
sidebar_position: 6
---

# Solução de problemas

## Sobre este guia

:::warning

Work in progress: Por hora isto é só uma sugestão de como lidar com as especificidades que estão surgindo

:::


Aqui estão os problemas comuns que você pode encontrar ao usar o SDK e como resolvê-los. 

Se o seu problema ainda não estiver listado aqui ou você precisar de outro tipo de dúvida, disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);


## Especificidades por Framework 

### Angular

Caso esteja usando angular pode ser que precise realizar algumas configurações no seu projeto, pois a lib é em javascript, gerando warnings e problemas no uso por não ser em typescript.

*SCREENSHOTS*

Para resolver os problemas acima, adicione em seu arquivo package.json o seguinte código:

```json title="package.json"
{
  "browser": {
    "crypto": false,
    "fs": false
  }
}
```

*SCREENSHOTS*

Possui também mais uma configuração que precisará ser feita, o angular reclama de uso de libs em CommonJS ou AMD, por esse motivo adicione o seguinte código em seu arquivo angular.json na hierarquia do objeto json projects > nomeseuprojeto > architect > build > options:

```json title="angular.json"
"allowedCommonJsDependencies": [
  "unico-webframe"
]
```

 
### Angular 12 >=  

Instale o módulo 'util'

```bash
npm install util
```

Adicione o caminho do módulo 'util' em paths no arquivo tsconfig.json

```json
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

```json title="angular.json"
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

### Next.js

Caso você esteja utilizando o Next.js para desenvolver sua aplicação, temos algumas orientações.

Diferentemente de outros frameworks, no Next.js caso tente acessar um objeto no escopo do browser (ex: navigator) fora dos métodos de ciclo de vida como componentDidMount() ou useEffect() um erro é gerado.

Para correção do erro relatado acima sugerimos que importe os componentes do SDK da seguinte maneira:
```
useEffect(() => {
  (async () => {
    const {
      UnicoCheckBuilder,
      UnicoThemeBuilder,
      SelfieCameraTypes,
      DocumentCameraTypes
    } = await import('unico-webframe');
  })();
}, []);
```

Caso esteja utilizando TypeScript no projeto, siga as orientações em [Declaração de tipos para uso em TypeScript](referencias/#declaração-de-tipos-para-uso-em-typescript). As tipagens podem ser importadas acima do seu componente junto com outras importações. Exemplo:
```
import ...
import ...
import ...
import ...

import { UnicoTheme, MainView, SuccessPictureResponse } from "unico-webframe";
```

### React com react-scripts 5

Caso você esteja utilizando a versão 5 do create-react-app para desenvolver sua aplicação, é preciso realizar os seguintes passos.

Instale o módulo ‘util’:

Caso seu projeto use npm:
```bash
npm install util
```

Caso seu projeto use yarn:
```bash
yarn add util
```

Caso esteja utilizando TypeScript em seu projeto siga nossa orientação de declaração de tipos para uso em TypeScript, disponível [neste guia](referencias/#declaração-de-tipos-para-uso-em-typescript).

:::caution Webpack v5
Os react-scripts 5 utilizam do Webpack v5, é possível que apareçam alguns
warnings, pois o Webpack v5 não compreende muito bem o uso de módulos do Node
:::
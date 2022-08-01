"use strict";(self.webpackChunkunico_sdkbio=self.webpackChunkunico_sdkbio||[]).push([[5496],{1871:function(e,a,o){var n=o(7294);a.Z=function(e){var a=e.children,o=e.hidden,t=e.className;return n.createElement("div",{role:"tabpanel",hidden:o,className:t},a)}},1137:function(e,a,o){o.d(a,{Z:function(){return u}});var n=o(7462),t=o(7294),r=o(5730),i=o(4179);var s=function(){var e=(0,t.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=o(3978),m=o(6010),c="tabItem_1uMI";function d(e){var a,o,n,r=e.lazy,i=e.block,d=e.defaultValue,u=e.values,p=e.groupId,v=e.className,k=t.Children.map(e.children,(function(e){if((0,t.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:k.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),g=(0,l.lx)(f,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(a=null!=d?d:null==(o=k.find((function(e){return e.props.default})))?void 0:o.props.value)?a:null==(n=k[0])?void 0:n.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=s(),b=N.tabGroupChoices,C=N.setTabGroupChoices,w=(0,t.useState)(h),D=w[0],y=w[1],S=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=b[p];null!=T&&T!==D&&f.some((function(e){return e.value===T}))&&y(T)}var A=function(e){var a=e.currentTarget,o=S.indexOf(a),n=f[o].value;n!==D&&(x(a),y(n),null!=p&&C(p,n))},E=function(e){var a,o=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;o=S[n]||S[0];break;case"ArrowLeft":var t=S.indexOf(e.currentTarget)-1;o=S[t]||S[S.length-1]}null==(a=o)||a.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":i},v)},f.map((function(e){var a=e.value,o=e.label;return t.createElement("li",{role:"tab",tabIndex:D===a?0:-1,"aria-selected":D===a,className:(0,m.Z)("tabs__item",c,{"tabs__item--active":D===a}),key:a,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:A,onClick:A},null!=o?o:a)}))),r?(0,t.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},k.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==D})}))))}function u(e){var a=(0,r.Z)();return t.createElement(d,(0,n.Z)({key:String(a)},e))}},4179:function(e,a,o){var n=(0,o(7294).createContext)(void 0);a.Z=n},399:function(e,a,o){var n=o(7294);a.Z=function(e){var a=e.children,o=e.headingDepth,t=(0,n.useState)(null);return t[0],t[1],n.createElement("div",{className:"steps steps--h"+o},a)}},2542:function(e,a,o){o.r(a),o.d(a,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return v},default:function(){return f}});var n=o(7462),t=o(3366),r=(o(7294),o(3905)),i=o(8837),s=o(399),l=o(1137),m=o(1871),c=["components"],d={sidebar_label:"Captura de documentos",sidebar_position:2},u="Captura de documentos",p={unversionedId:"sdks/iOS/fluxos/captura-documentos",id:"sdks/iOS/fluxos/captura-documentos",isDocsHomePage:!1,title:"Captura de documentos",description:"Sobre este guia",source:"@site/docs/sdks/iOS/fluxos/captura-documentos.md",sourceDirName:"sdks/iOS/fluxos",slug:"/sdks/iOS/fluxos/captura-documentos",permalink:"/unico-stage/sdks/iOS/fluxos/captura-documentos",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdks/iOS/fluxos/captura-documentos.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Captura de documentos",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Captura de Selfies",permalink:"/unico-stage/sdks/iOS/fluxos/captura-selfies"},next:{title:"Refer\xeancias",permalink:"/unico-stage/sdks/iOS/referencias"}},v=[{value:"Sobre este guia",id:"sobre-este-guia",children:[],level:2},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[],level:2},{value:"Recursos dispon\xedveis",id:"recursos-dispon\xedveis",children:[],level:2},{value:"Implementa\xe7\xe3o",id:"implementa\xe7\xe3o",children:[{value:"Inicializar nosso SDK",id:"inicializar-nosso-sdk",children:[{value:"M\xe9todo <code>onErrorAcessoBioManager(_ error: ErrorBio!)</code>",id:"m\xe9todo-onerroracessobiomanager_-error-errorbio",children:[],level:5},{value:"M\xe9todo <code>onUserClosedCameraManually()</code>",id:"m\xe9todo-onuserclosedcameramanually",children:[],level:5},{value:"M\xe9todo <code>onSystemClosedCameraTimeoutSession()</code>",id:"m\xe9todo-onsystemclosedcameratimeoutsession",children:[],level:5}],level:3},{value:"Implementar <em>delegates</em> para eventos da c\xe2mera",id:"implementar-delegates-para-eventos-da-c\xe2mera",children:[{value:"M\xe9todo <code>onSuccessDocument</code>",id:"m\xe9todo-onsuccessdocument",children:[],level:4},{value:"M\xe9todo <code>onErrorDocument</code>",id:"m\xe9todo-onerrordocument",children:[],level:4}],level:3},{value:"Customizar o frame de captura",id:"customizar-o-frame-de-captura",children:[],level:3},{value:"Preparar e abrir c\xe2mera",id:"preparar-e-abrir-c\xe2mera",children:[],level:3},{value:"Chamar nossas APIs",id:"chamar-nossas-apis",children:[],level:3}],level:2},{value:"Ficou com d\xfavidas?",id:"ficou-com-d\xfavidas",children:[],level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[],level:2}],k={toc:v};function f(e){var a=e.components,o=(0,t.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},k,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"captura-de-documentos"},"Captura de documentos"),(0,r.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,r.kt)("p",null,"Este guia foi elaborado para ajud\xe1-lo a integrar nosso SDK iOS de forma r\xe1pida e f\xe1cil.\nBuscamos trazer conceitos b\xe1sicos, exemplos de implementa\xe7\xe3o dos SDKs e tamb\xe9m de como interagir com as APIs REST de nosso motor biom\xe9trico."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Vale lembrar")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Vale lembrar que este guia foca no processo de captura de imagens. Caso esteja buscando informa\xe7\xf5es sobre as APIs REST do ",(0,r.kt)("strong",{parentName:"p"},"Unico Check"),", sugerimos que visite nosso ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs/"},"API Reference"),", nosso guia de APIs ou nossa p\xe1gina de p\xe1gina ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"Vis\xe3o Geral"),"."))),(0,r.kt)("p",null,"Atrav\xe9s deste guia, em poucos minutos voc\xea ser\xe1 capaz de:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementar a abertura da c\xe2mera e captura de imagens;"),(0,r.kt)("li",{parentName:"ul"},"Entender como manipular os dados de retorno;"),(0,r.kt)("li",{parentName:"ul"},"Entender como utilizar o retorno de nosso SDK com nossas APIs;")),(0,r.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,r.kt)("p",null,"Certifique-se que voc\xea seguiu nosso passo-a-passo para instala\xe7\xe3o e importa\xe7\xe3o de nosso SDK atrav\xe9s ",(0,r.kt)("a",{parentName:"p",href:"../como-comecar"},"deste guia"),". \xc9 importante tamb\xe9m ter em conta as funcionalidades dispon\xedveis neste SDK, como explicado na p\xe1gina de ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"Vis\xe3o Geral")," deste SDK."),(0,r.kt)("h2",{id:"recursos-dispon\xedveis"},"Recursos dispon\xedveis"),(0,r.kt)("p",null,"Nosso SDK \xe9 respons\xe1vel por renderizar um frame contendo uma silhueta que se ajusta automaticamente com base na propor\xe7\xe3o da tela do usu\xe1rio final. Possibilitamos a captura dos seguintes tipos de documentos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sem silhueta:")," Captura documento gen\xe9rico;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RG:")," Captura do RG (separado em frente e verso);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CNH:")," Captura da CNH aberta;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CNH frente:")," Captura da frente da CNH;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CNH verso:")," Captura do verso da CNH;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPF:")," Captura do documento de CPF;")),(0,r.kt)("img",{src:i.Z,alt:"Captura Manual",className:"imgCenter"}),(0,r.kt)("h2",{id:"implementa\xe7\xe3o"},"Implementa\xe7\xe3o"),(0,r.kt)("p",null,"Ao seguir este passo-a-passo, em poucos minutos voc\xea ter\xe1 todo o potencial de nosso SDK embarcado em sua aplica\xe7\xe3o iOS."),(0,r.kt)(s.Z,{headingDepth:3,mdxType:"Steps"},(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("h3",{id:"inicializar-nosso-sdk"},"Inicializar nosso SDK"),(0,r.kt)("p",null,"Para iniciar com SDK iOS do ",(0,r.kt)("strong",{parentName:"p"},"Unico Check"),", importe nosso SDK e implemente a interface ",(0,r.kt)("inlineCode",{parentName:"p"},"AcessoBioManagerDelegate")," dentro da ",(0,r.kt)("em",{parentName:"p"},"ViewController")," que deseja utilizar."),(0,r.kt)("p",null,"A implementa\xe7\xe3o dessa classe \xe9 bem simples e pode ser feita com poucas linhas de c\xf3digo. Tudo que precisa fazer \xe9 intanciar nosso ",(0,r.kt)("em",{parentName:"p"},"builder")," informando o contexto em quest\xe3o e sobrescrever nossos m\xe9todos de callback com as l\xf3gicas de neg\xf3cio de sua aplica\xe7\xe3o:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"objectivec",label:"Objective-C",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'.m:\n#import "ViewController.h"\n#import <AcessoBio/AcessoBio.h>\n\n@interface ViewController ()\n\n@end\n\n@implementation ViewController\n\n- (void)viewDidLoad {\n    [super viewDidLoad];\n   \n    unicoCheck = [[AcessoBioManager alloc]initWithViewController:self];\n}\n   \n- (void)onErrorAcessoBioManager:(ErrorBio *)error {\n    code\n}\n\n- (void)onSystemChangedTypeCameraTimeoutFaceInference {\n    code\n}\n\n- (void)onSystemClosedCameraTimeoutSession {\n    code\n}\n\n- (void)onUserClosedCameraManually {\n    code\n}\n'))),(0,r.kt)(m.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import UIKit\nimport AcessoBio\n\nclass ViewController: UIViewController, AcessoBioManagerDelegate {\n\n  var unicoCheck: AcessoBioManager!\n\n  override func viewDidLoad() {\n    super.viewDidLoad()\n    \n    unicoCheck = AcessoBioManager(viewController: self)\n  }\n\n  func onErrorAcessoBioManager(_ error: ErrorBio!) {\n      // your code\n  } \n  func onUserClosedCameraManually() {\n      // your code\n  }\n  func onSystemClosedCameraTimeoutSession() {\n      // your code\n  }\n  func onSystemChangedTypeCameraTimeoutFaceInference() {\n      // your code \n  }\n}     \n")))),(0,r.kt)("p",null,"Note que, conforme o exemplo anterior, o trabalho de implementa\xe7\xe3o da interface ",(0,r.kt)("inlineCode",{parentName:"p"},"AcessoBioManagerDelegate")," \xe9, em grande parte, a configura\xe7\xe3o dos m\xe9todos de callback. Cada m\xe9todo ser\xe1 chamado em uma situa\xe7\xe3o espec\xedfica de retorno de nosso SDK, como detalhado abaixo. Basta sobrescrever os m\xe9todos exemplificados no passo anterior com as l\xf3gicas de neg\xf3cio de sua aplica\xe7\xe3o. "),(0,r.kt)("h5",{id:"m\xe9todo-onerroracessobiomanager_-error-errorbio"},"M\xe9todo ",(0,r.kt)("inlineCode",{parentName:"h5"},"onErrorAcessoBioManager(_ error: ErrorBio!)")),(0,r.kt)("p",null,"Este m\xe9todo ser\xe1 invocado sempre quando qualquer erro de implementa\xe7\xe3o ocorrer ao utilizar algum de nossos m\xe9todos, como por exemplo, ao informar um tipo de documento incorreto para a funcionalidade de captura de documentos."),(0,r.kt)("p",null,"Ao ser invocado, o m\xe9todo receber\xe1 um par\xe2metro do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBio")," que contem detalhes do erro. Saiba mais sobre o tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBio")," no artigo de ",(0,r.kt)("a",{parentName:"p",href:"../referencias#objeto-errorbio"},"Refer\xeancias")," deste SDK."),(0,r.kt)("h5",{id:"m\xe9todo-onuserclosedcameramanually"},"M\xe9todo ",(0,r.kt)("inlineCode",{parentName:"h5"},"onUserClosedCameraManually()")),(0,r.kt)("p",null,'Este m\xe9todo ser\xe1 invocado sempre quando o usu\xe1rio fechar a c\xe2mera de forma manual, como por exemplo, ao clicar no bot\xe3o "Voltar".'),(0,r.kt)("h5",{id:"m\xe9todo-onsystemclosedcameratimeoutsession"},"M\xe9todo ",(0,r.kt)("inlineCode",{parentName:"h5"},"onSystemClosedCameraTimeoutSession()")),(0,r.kt)("p",null,"Este m\xe9todo ser\xe1 invocado assim que o tempo m\xe1ximo de sess\xe3o for atingido (Sem capturar nenhuma imagem)."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aten\xe7\xe3o")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Todos os m\xe9todos acima devem ser criados da forma indicada em seu projeto (mesmo que sem nenhuma l\xf3gica). Caso contr\xe1rio, o projeto n\xe3o compilar\xe1 com sucesso.")))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"implementar-delegates-para-eventos-da-c\xe2mera"},"Implementar ",(0,r.kt)("em",{parentName:"h3"},"delegates")," para eventos da c\xe2mera"),(0,r.kt)("p",null,"O m\xe9todo de abertura da c\xe2mera (que ser\xe1 chamado no pr\xf3ximo passo) precisa saber o que fazer ao conseguir capturar uma imagem com ",(0,r.kt)("strong",{parentName:"p"},"sucesso")," ou ao ter algum ",(0,r.kt)("strong",{parentName:"p"},"erro"),' no processo. Informaremos "o que fazer" ao m\xe9todo de abertura da c\xe2mera atrav\xe9s da configura\xe7\xe3o de ',(0,r.kt)("em",{parentName:"p"},"delegates")," que ser\xe3o chamados em situa\xe7\xf5es de sucesso ou erro."),(0,r.kt)("p",null,"Atrav\xe9s da configura\xe7\xe3o dos ",(0,r.kt)("em",{parentName:"p"},"delegates"),", voc\xea poder\xe1 especificar o que acontecer\xe1 em seu App em situa\xe7\xf5es de erro (m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"onErrorDocument"),") ou sucesso (m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccessDocument"),") na captura de imagens."),(0,r.kt)("p",null,"Para a configura\xe7\xe3o dos ",(0,r.kt)("em",{parentName:"p"},"delegates"),", voc\xea dever\xe1 tamb\xe9m dever\xe1 implementar as interfaces ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentCameraDelegate")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"AcessoBioDocumentDelegate"),":"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"objectivec",label:"Objective-C",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'.h:\n#import <UIKit/UIKit.h>\n#import <AcessoBio/AcessoBio.h>\n#import "SelfieCameraDelegate.h"\n\n@interface ViewController : UIViewController < AcessoBioManagerDelegate,\n          // highlight-start\n          DocumentCameraDelegate, \n          AcessoBioDocumentDelegate> {\n          // highlight-end\n\n    AcessoBioManager *unicoCheck;\n    // Your code from previous and next steps here ;)     \n}\n\n\n'))),(0,r.kt)(m.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"import UIKit\nimport AcessoBio\n\nclass ViewController: UIViewController, \n                      AcessoBioManagerDelegate, \n                      // highlight-start\n                      DocumentCameraDelegate, \n                      AcessoBioDocumentDelegate {\n                        // highlight-end\n    \n  //Your code from previous and next steps here ;) \n}\n")))),(0,r.kt)("h4",{id:"m\xe9todo-onsuccessdocument"},"M\xe9todo ",(0,r.kt)("inlineCode",{parentName:"h4"},"onSuccessDocument")),(0,r.kt)("p",null,"Ao efetuar uma captura de imagem com ",(0,r.kt)("strong",{parentName:"p"},"sucesso"),", este m\xe9todo ser\xe1 invocado e retornar\xe1 um objeto do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultCamera")," que ser\xe1 utilizado posteriormente na chamada de nossas APIs REST. "),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"objectivec",label:"Objective-C",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'\n- (void)onSuccessDocument:(DocumentResult *)result {\n    NSLog(@"%@", result.base64);\n}  \n\n'))),(0,r.kt)(m.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"\nfunc onSuccessDocument(_ result: DocumentResult!) {\n    // your code\n }\n\n")))),(0,r.kt)("p",null,"O objeto ",(0,r.kt)("inlineCode",{parentName:"p"},"ResultCamera")," retornar\xe1 2 atributos: ",(0,r.kt)("inlineCode",{parentName:"p"},"base64")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"O atributo ",(0,r.kt)("inlineCode",{parentName:"li"},"base64")," pode ser utilizado caso voc\xea queira exibir um preview da imagem em seu app;"),(0,r.kt)("li",{parentName:"ul"},"O atributo ",(0,r.kt)("inlineCode",{parentName:"li"},"encrypted")," dever\xe1 ser enviado na chamada de nossas APIs REST do ",(0,r.kt)("strong",{parentName:"li"},"unico check")," (detalhado ",(0,r.kt)("a",{parentName:"li",href:"#chamar-nossas-apis"},"neste passo"),");  ")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Convers\xe3o do base64 para Bitmap")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Caso queira converter o base64 para bitmap, a maneira padr\xe3o n\xe3o funcionar\xe1 para o iOS. Ser\xe1  necess\xe1rio realizar o split a partir da v\xedrgula(",(0,r.kt)("inlineCode",{parentName:"p"},","),") para que funcione. Caso queira saber mais, sugerimos a leitura do seguinte artigo:"),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/4837110/how-to-convert-a-base64-string-into-a-bitmap-image-to-show-it-in-a-imageview"},"How to convert a Base64 string into a Bitmap image to show it in a ImageView?"))))),(0,r.kt)("h4",{id:"m\xe9todo-onerrordocument"},"M\xe9todo ",(0,r.kt)("inlineCode",{parentName:"h4"},"onErrorDocument")),(0,r.kt)("p",null,"Ao ocorrer algum erro na captura de imagem, este m\xe9todo ser\xe1 invocado e retornar\xe1 um objeto do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBio"),". "),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"objectivec",label:"Objective-C",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"\n- (void)onErrorDocument:(ErrorBio *)errorBio {\n    // Your code\n}\n\n"))),(0,r.kt)(m.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"\nfunc onErrorDocument(_ errorBio: ErrorBio!) {\n    // Your code\n }\n\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Saiba mais")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Saiba mais sobre o tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorBio")," em nossa p\xe1gina de ",(0,r.kt)("a",{parentName:"p",href:"../referencias#objeto-errorbio"},"Refer\xeancias")," deste SDK.")))),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"customizar-o-frame-de-captura"},"Customizar o frame de captura"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Passo opcional")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Este \xe9 um passo opcional, por\xe9m recomendado. "))),(0,r.kt)("p",null,"Oferecemos a possibilidade de customiza\xe7\xe3o do frame de captura por meio do nosso SDK. Para customizar o frame, basta utilizar o m\xe9todo correspondente a propriedade a ser customizada, e posteriormente, aplicar o novo estilo atrav\xe9s do m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme()"),"."),(0,r.kt)("p",null,"Entenda um pouco mais sobre o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"setTheme()"),", exemplos de utiliza\xe7\xe3o e o que pode ser customizado em nossa p\xe1gina de ",(0,r.kt)("a",{parentName:"p",href:"../referencias#customiza%C3%A7%C3%B5es"},"Refer\xeancias")," deste SDK.")),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"preparar-e-abrir-c\xe2mera"},"Preparar e abrir c\xe2mera"),(0,r.kt)("p",null,"Para seguir com a abertura da c\xe2mera, primeiro devemos prepar\xe1-la utilizando o m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"prepareDocumentCamera"),". Este m\xe9todo recebe como par\xe2metro a implementa\xe7\xe3o da classe ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentCameraDelegate")," e o JSON com as credenciais, gerado ",(0,r.kt)("a",{parentName:"p",href:"#../como-comecar"},"nesse passo"),"."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"objectivec",label:"Objective-C",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'.h:\n#import <UIKit/UIKit.h>\n#import <AcessoBio/AcessoBio.h>\n#import "SelfieCameraDelegate.h"\n\n@interface ViewController : UIViewController < AcessoBioManagerDelegate,\nDocumentCameraDelegate, AcessoBioDocumentDelegate> {\n\n    AcessoBioManager *unicoCheck;\n}\n\n.m:\n- (IBAction)openCamera:(UIButton *)sender {\n\n    // with AcessoBioConfigDataSource implementation\n    [[unicoCheck build] prepareDocumentCamera:self config: [YourUnicoConfigClass new]];\n\n    // or\n\n    // with JSON config\n    [[unicoCheck build] prepareDocumentCamera:self jsonConfigName: @""];\n}\n\n'))),(0,r.kt)(m.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport AcessoBio\n\nclass ViewController: UIViewController, AcessoBioManagerDelegate, \nDocumentCameraDelegate, AcessoBioDocumentDelegate {\n\n    @IBAction func openCamera(_ sender: Any) {\n\n        // with AcessoBioConfigDataSource implementation\n        unicoCheck.build().prepareDocumentCamera(self, config: YourUnicoConfigClass())\n\n        // or\n\n        // with JSON config\n        unicoCheck.build().prepareDocumentCamera(self, jsonConfigName:\n        "json-credenciais.json")\n    }\n}\n')))),(0,r.kt)("p",null,"Quando a c\xe2mera estiver preparada, dispararemos o evento ",(0,r.kt)("inlineCode",{parentName:"p"},"onCameraReadyDocument"),", que recebe como par\xe2metro um objeto do tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"AcessoBioCameraOpenerDelegate"),". "),(0,r.kt)("p",null,"Voc\xea dever\xe1 sobrescrever este m\xe9todo, efetuando a abertura da c\xe2mera com o objeto recebido atrav\xe9s do m\xe9todo ",(0,r.kt)("inlineCode",{parentName:"p"},"openDocument()"),", informando os seguintes par\xe2metros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tipo de documento a ser capturado, sendo eles:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocumentEnums.none"),": Frame para captura de documento gen\xe9rico, sem nenhuma silhueta;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocumentEnums.RG"),": Frame para captura do RG, primeiro a frente, depois o verso;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocumentEnums.rgFrente"),": Frame para captura da parte da frente do RG;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocumentEnums.rgVerso"),": Frame para captura da parte traseira do RG;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocumentEnums.CNH"),": Frame para captura de CNH;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocumentEnums.cnhFrente"),": Frame para captura da parte da frente da CNH;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocumentEnums.cnhVerso"),": Frame para captura da parte traseira da CNH;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocumentEnums.CPF"),": Frame para captura CPF;"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Os ",(0,r.kt)("strong",{parentName:"p"},"delegates")," implementados ",(0,r.kt)("a",{parentName:"p",href:"#implementar-delegates-para-eventos-da-c%C3%A2mera"},"acima")," (aqui descritos como Self);"))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"objectivec",label:"Objective-C",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"- (void)onCameraReadyDocument:(id)cameraOpener {\n    [cameraOpener openDocument:DocumentCNH delegate:self];\n}\n\n- (void)onCameraFailedDocument:(NSString *)message {\n    code\n}\n"))),(0,r.kt)(m.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func onCameraReadyDocument(_ cameraOpener: AcessoBioCameraOpenerDelegate!) {\n    cameraOpener.openDocument(\n        DocumentEnums.CNH, \n        delegate: self\n    )\n}\n \nfunc onCameraFailedDocument(_ message: String!) {\n    code\n}\n")))),(0,r.kt)("p",null,"Caso ocorra algum erro ao preparar a c\xe2mera, o evento ",(0,r.kt)("inlineCode",{parentName:"p"},"onCameraFailedDocument")," ser\xe1 disparado. Voc\xea deve implementar este m\xe9todo aplicando as regras de neg\xf3cio de seu App."),(0,r.kt)("p",null,"Em caso de sucesso, o evento ",(0,r.kt)("inlineCode",{parentName:"p"},"onSuccessDocument")," ser\xe1 disparado, conforme explicado ",(0,r.kt)("a",{parentName:"p",href:"#m%C3%A9todo-onsuccessdocument"},"neste passo"),".")),(0,r.kt)("li",null,(0,r.kt)("h3",{id:"chamar-nossas-apis"},"Chamar nossas APIs"),(0,r.kt)("p",null,"A captura das imagens \xe9 apenas a primeira parte da nossa jornada. Ap\xf3s a capturar, voc\xea dever\xe1 enviar o ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," gerado para nossas APIs, selecionando um dos fluxos dispon\xedveis detalhados ",(0,r.kt)("a",{parentName:"p",href:"https://www3.acesso.io/identity/services/v3/docs"},"nesta documenta\xe7\xe3o"),".")))),(0,r.kt)("h2",{id:"ficou-com-d\xfavidas"},"Ficou com d\xfavidas?"),(0,r.kt)("p",null,"Esperamos ter ajudado com este artigo. N\xe3o encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes op\xe7\xf5es para que voc\xea possa obter ajuda:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Caso j\xe1 seja um parceiro, voc\xea tamb\xe9m pode entrar em contato atrav\xe9s de nossa ",(0,r.kt)("a",{parentName:"li",href:"https://ajuda.unico.io/hc/pt-br/categories/360002344171"},"Central de Ajuda"),";")),(0,r.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,r.kt)("p",null,"\xd3timo! Voc\xea chegou at\xe9 aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"captura-selfies"},"Guia para implanta\xe7\xe3o de captura de documentos"),";")))}f.isMDXComponent=!0},3905:function(e,a,o){o.d(a,{Zo:function(){return c},kt:function(){return p}});var n=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=n.createContext({}),m=function(e){var a=n.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},c=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(o),p=t,v=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return o?n.createElement(v,i(i({ref:a},c),{},{components:o})):n.createElement(v,i({ref:a},c))}));function p(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var m=2;m<r;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8837:function(e,a,o){a.Z=o.p+"assets/images/img_documentos-edee1b8a05415409de88a689ab0a54f7.png"}}]);
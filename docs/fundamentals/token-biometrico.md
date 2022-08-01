---
sidebar_label: 'Token Biométrico'
sidebar_position: 2
---

# Token Biométrico

## Visão geral

O Token Biométrico é a melhor forma de você autenticar seus clientes já existentes para transacionar ou acessar novos recursos em sua aplicação/plataforma. 

Nele, verificamos se seu cliente que está realizando uma determinada ação **é o mesmo** que passou pelo seu processo de cadastro, em que foi utilizado o Score de Autenticação.

De maneira rápida, com pouca fricção e com a possibilidade de alcançar uma taxa de falsos positivos de 0,0001% quando utilizado com Smartlive, retornamos à sua aplicação se a face enviada e a face do cadastro correspondem à mesma pessoa.


## Casos de uso

- Recuperação de senhas;
- Qualquer processo que utilize token externo (acessos corporativos, logins em sites de bancos, corretoras, fintechs, etc);
- Desbloqueio de cartões;
- Instalação de Token em device;
- Aumento de limites em transações;
- Aquisições de produtos de alto valor;
- Pagamento com cartão private label;
- Acesso a caixas eletrônicos;
- Logins em aplicativos de uso pouco frequente;
- Lugares com controle de acesso.

## O que é o Score de Autenticação?

O **Score de Autenticação** é a melhor e mais segura ferramenta de autenticação de novos clientes para utilização de seus produtos. 

O Score é um **método inteligente de identificação de pessoas** em que avaliamos com alta eficiência, a probabilidade do indivíduo **ser ou não autêntico**. A partir da **face e do CPF** do seu cliente e de nossa tecnologia exclusiva, informamos qual a probabilidade daquela pessoa corresponder àquele CPF, de acordo com o nível de conhecimento que temos ou não daquela face, somadas às informações **da maior base biométrica privada do Brasil**.

Para mais informações sobre o Score de Autenticação e seu funcionamento, acesse [este link](#)

## Como funciona o fluxo do Token?

De maneira simplificada, o Token Biométrico compara a **imagem de uma face** com uma **face previamente aceita por você** em sua base.
Vale ressaltar que para o funcionamento do Token é importante que você **armazene os IDs gerados pelo método `CreateProcess`** do Score de Autenticação.

O fluxo do Token Biométrico é dividido em 3 etapas:

import Steps from '@site/src/components/Steps';

<Steps headingDepth={3}>
<ol>

<li>

### Envio da imagem capturada e do ID do Score de Autenticação  

Sua aplicação deve enviar a imagem capturada e também o ID do Score de Autenticação, sendo que:
- A imagem a ser enviada deve ser a **selfie** que o usuário tira no momento da autenticação.
- O ID do Score de Autenticação deve ser o mesmo que foi obtido ao cadastrar o usuário pela primeira vez no response do método `CreateProcess`.  

</li>

<li>

### Checks de consistência do Token Biométrico

Após o envio da imagem para autenticação e o Token, nosso motor biométrico irá analisar:

- A qualidade da foto enviada: Caso a foto não esteja dentro dos padrões recomendados pela Unico, retornaremos uma mensagem de erro.
 
:::info Padrões recomendados

Para envio das imagens utilizamos o padrão internacional conhecido como ICAO, sendo que para isso a mesma exige algumas especificações que são:

- A foto deve ser tirada de frente;
- O rosto deve estar centralizado;
- Os olhos devem estar abertos;
- Sem óculos;
- Sem chapéu/boné;
- Fisionomia Neutra;
 Deve estar olhando diretamente para a câmera;

Veja alguns exemplos [neste link](https://www3.acesso.io/identity/services/v3/docs/#section/Padrao-de-captura)

:::

- Validade do ID do Score de Autenticação: Verificaremos se o formato do ID está correto (seguindo o mesmo padrão numérico de um ID válido) e também se possuem um status válido.  

:::caution 
Só serão aceitos IDs que tiveram seu processo concluído (não serão aceitos IDs cancelados ou em análise)
:::


</li>

<li>

### Verificando autenticidade da imagem

Após os verificações de consistência, nosso motor biométrico verifica a autenticidade da imagem enviada ao compara-la com a imagem correspondente ao Token enviado. Após essa verificação, iremos responder através de um booleano se a imagem é válida ou não:

- Caso retorne `True`: as faces comparadas correspondem à mesma pessoa. Ou seja, a pessoa que está realizando a transação é a pessoa cadastrada.
- Caso retorne `False`: as faces comparadas não correspondem à mesma pessoa. Ou seja, a pessoa que está realizando a transação não é a pessoa cadastrada.

</li>

</ol>

</Steps>

## Dúvidas frequentes

Consolidamos algumas dúvidas frequentes sobre o Token Biométrico:

- [Eu já tenho o Token implementado com envio de CPF ao invés do ID do Score. Preciso mudar alguma coisa?](#eu-j%C3%A1-tenho-o-token-implementado-com-envio-de-cpf-ao-inv%C3%A9s-do-id-do-score-preciso-mudar-alguma-coisa)
- [Porque faz sentido desacoplar o Score do Token? Qual a diferença dessa nova versão para a atual?](#porque-faz-sentido-desacoplar-o-score-do-token-qual-a-diferen%C3%A7a-dessa-nova-vers%C3%A3o-para-a-atual)
- [Como farei para saber se um usuário teve score negativo? Antes vocês bloqueavam, e agora?](#como-farei-para-saber-se-um-usu%C3%A1rio-teve-score-negativo-antes-voc%C3%AAs-bloqueavam-e-agora)
- [Sou cliente da unico há anos, quero utilizar o Token mas não tenho os IDs gerados do passado. Como faço?](#sou-cliente-da-unico-h%C3%A1-anos-quero-utilizar-o-token-mas-n%C3%A3o-tenho-os-ids-gerados-do-passado-como-fa%C3%A7o)
- [O Token é tão seguro quanto o Score?](#o-token-%C3%A9-t%C3%A3o-seguro-quanto-o-score)
- [Meu usuário passará pelo Liveness com interação pelo Token Biométrico?](#meu-usu%C3%A1rio-passar%C3%A1-pelo-liveness-com-intera%C3%A7%C3%A3o-pelo-token-biom%C3%A9trico)
- [Quanto custa usar o Token?](#quanto-custa-usar-o-token)
- [Sou um grande cliente e pretendo usar em muitos fluxos. O sistema vai aguentar?](#sou-um-grande-cliente-e-pretendo-usar-em-muitos-fluxos-o-sistema-vai-aguentar)
- [Posso usar o Token em mais de um fluxo na minha aplicação?](#posso-usar-o-token-em-mais-de-um-fluxo-na-minha-aplica%C3%A7%C3%A3o)
- [Tenho dúvidas se o Token se aplica ao meu fluxo. Com quem eu falo?](#tenho-d%C3%BAvidas-se-o-token-se-aplica-ao-meu-fluxo-com-quem-eu-falo)
- [Consigo ter a resposta do Token em score de semelhança?](#consigo-ter-a-resposta-do-token-em-score-de-semelhan%C3%A7a)


#### Eu já tenho o Token implementado com envio de CPF ao invés do ID do Score. Preciso mudar alguma coisa?

Sim, você vai precisar mudar a sua integração. Tecnicamente falando, você precisará deixar de enviar o CPF e passar a enviar o ID pela API (utilizando outro endpoint). Isso mudará a integração existente de vocês com a Unico. Mas, não se desespere! Não é tão difícil quanto parece e temos um time pronto para atendê-lo! Fale com seu CSM para agendar e realizar essa mudança em sua integração.

#### Por que faz sentido desacoplar o Score do Token? Qual a diferença dessa nova versão para a atual?

Ao desacoplar o score do Token nós realizamos uma mudança fundamental: Caso seu usuário seja uma pessoa que tenha um score negativo, a decisão está com você de aceitar que ele transacione em sua plataforma ou não. Com a versão atual nós deliberadamente tomamos a decisão de remover o acesso da funcionalidade de Token para o cliente final, causando transtornos para você quando seu usuário ainda quer transacionar contigo.

Esta mudança também trará maior agilidade e assertividade no processo, garantindo a comparação da face enviada com a realizada anteriormente em sua instância.


#### Como farei para saber se um usuário teve score negativo? Antes vocês bloqueavam, e agora?

Há algum tempo já temos a funcionalidade de Webhook implantada no Unico Check: Automaticamente conseguimos avisá-lo quando um usuário que passou pela sua instância se torna um usuário com score negativo. Sendo assim, é recomendado fortemente que você tenha o Webhook implementado. Caso você não queira implementar e queira saber da informação, confira a página de Scores Suspeitos no Portal. Para saber mais do processo de implantação, converse com seu CSM e envie a documentação técnica presente neste link para análise de sua equipe e posterior implementação. Você já pode ter acesso agora mesmo a funcionalidade!

#### Sou cliente da Unico há anos, quero utilizar o Token mas não tenho os IDs gerados do passado. Como faço?

A partir de agora passe a guardar os IDs. Fale com sua equipe técnica sobre como armazená-los. Em breve teremos uma solução que fará você resgatar o ID que já passou em sua instância. Para saber mais converse com seu CSM.

#### O Token é tão seguro quanto o Score?
Sim! O Token Biométrico utiliza o mesmo sistema do Score de Autenticação
para validação de faces, e é tão rápido e confiável quanto, utilizando todos os altos padrões de segurança e privacidade da Unico.

#### Meu usuário passará pelo Liveness com interação pelo Token Biométrico?
Sua decisão! Recomendamos fortemente que você utilize a SDK do Unico Check e utilize nossa solução de Liveness com interação com o Token. O nível de fricção é baixíssimo e é a melhor solução de mercado para o combate a fraudes.

#### Quanto custa usar o Token?
Fale com seu CSM e AE para entender dos planos disponíveis para você!

#### Sou um grande cliente e pretendo usar em muitos fluxos. O sistema vai aguentar?
Sim! Nossa solução é construída em cima das melhores soluções em nuvem do mundo para conseguir dar a escalabilidade necessária para nossas aplicações e para o seu negócio. Com certeza damos conta!

#### Posso usar o Token em mais de um fluxo na minha aplicação?
Pode contar com isso! E você também consegue controlar o uso em cada um dos fluxos, configurando variáveis que determinam os fluxos e permitem que você entenda o uso do Token de maneira eficiente.

#### Tenho dúvidas se o Token se aplica ao meu fluxo. Com quem eu falo?
Fale com seu CSM! Ele está por dentro do assunto e pode te ajudar a entender a melhor forma de aplicar o Token em seus fluxos de trabalho! Não perca a oportunidade de ter esta fantástica ferramenta de segurança em seus fluxos e fale com ele agora mesmo! Se você ainda não tem o Unico Check, fale com um de nossos vendedores para obter a solução agora mesmo!

#### Consigo ter a resposta do Token em score de semelhança?

Não, o Token retorna sempre uma resposta binária, de sim ou não. O motivo para isso é que o Unico check trabalha com uma orquestração de diferentes motores biométricos, cada um com resultados diferentes de semelhança, a inteligência por trás de aceitar ou não a autenticação necessita, assim, de ficar com o próprio Check.

## Ficou com dúvidas?

Não encontrou algo ou ainda precisa de ajuda? Disponibilizamos as seguintes opções para que você possa obter ajuda:

- Caso já seja um parceiro, você também pode entrar em contato através de nossa [Central de Ajuda](https://ajuda.unico.io/hc/pt-br/categories/360002344171);

## Próximos passos

Ótimo! Você chegou até aqui =). A seguir vamos te contar um pouco mais sobre nossa API ou sobre nossa funcionalidade de captura de documentos.
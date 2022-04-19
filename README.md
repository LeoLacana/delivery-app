# Contexto

Uma distribuidora de cervejas delivery. 🚀

- Ter acesso via login: tanto clientes como pessoas vendedoras, assim como o administrador do sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
- Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
- Funcionar em tempo real: as telas de pedidos/detalhes do pedido devem ser atualizadas em tempo real, à medida que essas interações acontecem. Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos sem que ela precise atualizar a página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido também atualizadas em tempo real, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

---

# Habilidades Utilizadas

- Manter aderência do código à especificação;
- Código organizado e a arquitetura geral da aplicação (tanto da API quando do front-end);
- Manter aderência ao padrão REST na API;
- Respeitar a estrutura do banco de dados. A implementação adiciona ou remove tabelas, campos ou relacionamentos e sua API esta preparada para aproveitar essa estrutura por completo;
- Manter aderência aos princípios SOLID;

- **Fluxo Comum** que compreende: 
  - (1) Tela de Login
  - (2) Tela de Registro

- **Fluxo do Cliente** que compreende: : 
  - (3) Tela de Produtos
  - (4) Tela de Checkout
  - (5) Tela de Pedidos
  - (6) Tela de Detalhes do Pedido

- **Fluxo da Pessoa Vendedora** que compreende: 
  - (7) Tela de Pedidos
  - (8) Tela de Detalhes/Controle do Pedido

- **Validação do Status do Pedido** que compreende: 
  - (9) Teste de status sem atualização em tempo real 
  - (10) Teste de status com atualização em tempo real

- **Fluxo da Pessoa Administradora** que compreende: 
  - (11) Tela de gerenciamento de usuários
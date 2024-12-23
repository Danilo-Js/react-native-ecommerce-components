from graphviz import Digraph
import os

# Criação do diagrama de casos de uso
use_case_diagram = Digraph('UseCaseDiagram', format='png')
use_case_diagram.attr(rankdir='LR')

# Atores
use_case_diagram.node('Cliente', shape='ellipse', label='🛒 Cliente')
use_case_diagram.node('Pagamento', shape='ellipse', label='💳 Sistema de Pagamento')
use_case_diagram.node('Entrega', shape='ellipse', label='📦 Sistema de Entrega')

# Casos de uso do Cliente
use_case_diagram.node('UC1', 'Cadastrar-se no sistema')
use_case_diagram.node('UC2', 'Pesquisar produtos')
use_case_diagram.node('UC3', 'Adicionar produtos à lista de desejos')
use_case_diagram.node('UC4', 'Adicionar produtos ao carrinho')
use_case_diagram.node('UC5', 'Aplicar cupom de desconto')
use_case_diagram.node('UC6', 'Finalizar compra')
use_case_diagram.node('UC7', 'Realizar pagamento')
use_case_diagram.node('UC8', 'Acompanhar status do pedido')
use_case_diagram.node('UC9', 'Avaliar produto')
use_case_diagram.node('UC10', 'Visualizar detalhes do produto')
use_case_diagram.node('UC11', 'Confirmar pedido')
use_case_diagram.node('UC12', 'Informar detalhes de entrega')
use_case_diagram.node('UC13', 'Listar produtos')
use_case_diagram.node('UC14', 'Pesquisar produtos por categoria')

# Casos de uso do Sistema de Pagamento
use_case_diagram.node('UC15', 'Validar informações do pagamento')
use_case_diagram.node('UC16', 'Processar pagamento')

# Casos de uso do Sistema de Entrega
use_case_diagram.node('UC17', 'Atualizar status de entrega')
use_case_diagram.node('UC18', 'Confirmar entrega ao cliente')

# Relações Cliente
use_case_diagram.edge('Cliente', 'UC1')
use_case_diagram.edge('Cliente', 'UC2')
use_case_diagram.edge('Cliente', 'UC3')
use_case_diagram.edge('Cliente', 'UC4')
use_case_diagram.edge('Cliente', 'UC5')
use_case_diagram.edge('Cliente', 'UC6')
use_case_diagram.edge('Cliente', 'UC7')
use_case_diagram.edge('Cliente', 'UC8')
use_case_diagram.edge('Cliente', 'UC9')
use_case_diagram.edge('Cliente', 'UC10')
use_case_diagram.edge('Cliente', 'UC11')
use_case_diagram.edge('Cliente', 'UC12')
use_case_diagram.edge('Cliente', 'UC13')
use_case_diagram.edge('Cliente', 'UC14')

# Relações Sistema de Pagamento
use_case_diagram.edge('Pagamento', 'UC15')
use_case_diagram.edge('Pagamento', 'UC16')

# Relações Sistema de Entrega
use_case_diagram.edge('Entrega', 'UC17')
use_case_diagram.edge('Entrega', 'UC18')

# Salvar o diagrama
# Obtém o diretório atual do script e cria o caminho dinâmico
current_directory = os.path.dirname(os.path.abspath(__file__))
use_case_diagram_path = os.path.join(current_directory, 'diagrama_casos_uso')
use_case_diagram.render(use_case_diagram_path)

# Mensagem de confirmação
print(f"Diagrama salvo em: {use_case_diagram_path}.png")

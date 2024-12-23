from graphviz import Digraph
import os

# Criação do diagrama de componentes
component_diagram = Digraph('ComponentDiagram', format='png')
component_diagram.attr(rankdir='TB')

# ==============================
# Definição dos Componentes
# ==============================

# Frontend Components
component_diagram.node('CategoryList', label='📂 CategoryList\n(Lista de Categorias)', shape='component')
component_diagram.node('CouponCodeInput', label='🎟️ CouponCodeInput\n(Entrada de Cupom)', shape='component')
component_diagram.node('NewClient', label='🧑‍💼 NewClient\n(Cadastro de Cliente)', shape='component')
component_diagram.node('OrderConfirmation', label='✅ OrderConfirmation\n(Confirmação de Pedido)', shape='component')
component_diagram.node('OrderSummary', label='📑 OrderSummary\n(Resumo do Pedido)', shape='component')
component_diagram.node('OrderTracking', label='🚚 OrderTracking\n(Rastreamento de Pedido)', shape='component')
component_diagram.node('PaymentGateway', label='💳 PaymentGateway\n(Gateway de Pagamento)', shape='component')
component_diagram.node('ProductDetail', label='📦 ProductDetail\n(Detalhes do Produto)', shape='component')
component_diagram.node('ProductList', label='🛍️ ProductList\n(Lista de Produtos)', shape='component')
component_diagram.node('ReviewAndRatings', label='⭐ ReviewAndRatings\n(Avaliações)', shape='component')
component_diagram.node('SearchBar', label='🔍 SearchBar\n(Barra de Pesquisa)', shape='component')
component_diagram.node('ShippingDetails', label='📦 ShippingDetails\n(Detalhes de Envio)', shape='component')
component_diagram.node('ShoppingCart', label='🛒 ShoppingCart\n(Carrinho de Compras)', shape='component')
component_diagram.node('WishList', label='❤️ WishList\n(Lista de Desejos)', shape='component')

# Backend Systems
component_diagram.node('PaymentSystem', label='💻 Payment System\n(Sistema de Pagamento)', shape='folder')
component_diagram.node('DeliverySystem', label='🚚 Delivery System\n(Sistema de Entrega)', shape='folder')
component_diagram.node('Database', label='🗄️ Database\n(Banco de Dados)', shape='cylinder')

# ==============================
# Definição das Relações
# ==============================

# Interações entre componentes Frontend
component_diagram.edge('CategoryList', 'ProductList', label='Exibir Produtos')
component_diagram.edge('ProductList', 'ProductDetail', label='Detalhar Produto')
component_diagram.edge('ProductDetail', 'ShoppingCart', label='Adicionar ao Carrinho')
component_diagram.edge('ShoppingCart', 'PaymentGateway', label='Iniciar Pagamento')
component_diagram.edge('PaymentGateway', 'OrderConfirmation', label='Confirmar Pedido')
component_diagram.edge('OrderConfirmation', 'OrderTracking', label='Rastrear Pedido')
component_diagram.edge('OrderTracking', 'ShippingDetails', label='Atualizar Envio')
component_diagram.edge('SearchBar', 'ProductList', label='Buscar Produto')
component_diagram.edge('ReviewAndRatings', 'ProductDetail', label='Avaliar Produto')
component_diagram.edge('WishList', 'ShoppingCart', label='Mover para Carrinho')
component_diagram.edge('NewClient', 'Database', label='Salvar Cadastro')
component_diagram.edge('CouponCodeInput', 'ShoppingCart', label='Aplicar Desconto')

# Interações com Sistemas Externos
component_diagram.edge('PaymentGateway', 'PaymentSystem', label='Validar Pagamento')
component_diagram.edge('OrderTracking', 'DeliverySystem', label='Atualizar Status')
component_diagram.edge('Database', 'OrderTracking', label='Consultar Dados')
component_diagram.edge('Database', 'ShoppingCart', label='Salvar Itens')
component_diagram.edge('Database', 'NewClient', label='Salvar Dados do Cliente')

# Salvar o diagrama
# Obtém o diretório atual do script e cria o caminho dinâmico
current_directory = os.path.dirname(os.path.abspath(__file__))
use_case_diagram_path = os.path.join(current_directory, 'diagrama_componentes')
component_diagram.render(use_case_diagram_path)

# Retornar o caminho do arquivo
component_diagram_image_path = f"{use_case_diagram_path}.png"
component_diagram_image_path

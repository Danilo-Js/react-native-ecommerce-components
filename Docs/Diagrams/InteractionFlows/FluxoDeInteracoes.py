from graphviz import Digraph
import os

# Criação do diagrama de fluxo de interação
interaction_flow = Digraph('InteractionFlowDiagram', format='png')
interaction_flow.attr(rankdir='TB', splines='ortho')

# ==============================
# Definição dos Componentes
# ==============================

# Atores principais
interaction_flow.node('Cliente', label='🛒 Cliente', shape='ellipse')

# Componentes principais
interaction_flow.node('SearchBar', label='🔍 SearchBar', shape='box')
interaction_flow.node('ProductList', label='🛍️ ProductList', shape='box')
interaction_flow.node('ProductDetail', label='📦 ProductDetail', shape='box')
interaction_flow.node('ShoppingCart', label='🛒 ShoppingCart', shape='box')
interaction_flow.node('CouponCodeInput', label='🎟️ CouponCodeInput', shape='box')
interaction_flow.node('PaymentGateway', label='💳 PaymentGateway', shape='box')
interaction_flow.node('OrderConfirmation', label='✅ OrderConfirmation', shape='box')
interaction_flow.node('OrderTracking', label='🚚 OrderTracking', shape='box')
interaction_flow.node('ReviewAndRatings', label='⭐ ReviewAndRatings', shape='box')

# Sistemas externos
interaction_flow.node('PaymentSystem', label='💻 Payment System', shape='folder')
interaction_flow.node('DeliverySystem', label='🚚 Delivery System', shape='folder')
interaction_flow.node('Database', label='🗄️ Database', shape='cylinder')

# ==============================
# Definição dos Fluxos
# ==============================

# Fluxo de Compra
interaction_flow.edge('Cliente', 'SearchBar', label='Busca produtos')
interaction_flow.edge('SearchBar', 'ProductList', label='Exibe resultados')
interaction_flow.edge('ProductList', 'ProductDetail', label='Seleciona produto')
interaction_flow.edge('ProductDetail', 'ShoppingCart', label='Adiciona ao carrinho')
interaction_flow.edge('ShoppingCart', 'CouponCodeInput', label='Aplica cupom')
interaction_flow.edge('ShoppingCart', 'PaymentGateway', label='Inicia pagamento')
interaction_flow.edge('PaymentGateway', 'PaymentSystem', label='Valida pagamento')
interaction_flow.edge('PaymentGateway', 'OrderConfirmation', label='Confirma pedido')
interaction_flow.edge('OrderConfirmation', 'OrderTracking', label='Inicia rastreamento')
interaction_flow.edge('OrderTracking', 'DeliverySystem', label='Atualiza status de entrega')

# Fluxo de Avaliação
interaction_flow.edge('Cliente', 'OrderTracking', label='Recebe pedido')
interaction_flow.edge('OrderTracking', 'ReviewAndRatings', label='Avalia produto')

# Fluxo de Persistência
interaction_flow.edge('ShoppingCart', 'Database', label='Salva itens')
interaction_flow.edge('OrderConfirmation', 'Database', label='Salva pedido')
interaction_flow.edge('ReviewAndRatings', 'Database', label='Salva avaliação')

# Fluxo de Erro
interaction_flow.edge('PaymentGateway', 'Cliente', label='Falha no pagamento')

# Salvar o diagrama
# Obtém o diretório atual do script e cria o caminho dinâmico
current_directory = os.path.dirname(os.path.abspath(__file__))
use_case_diagram_path = os.path.join(current_directory, 'fluxo_interacao')
interaction_flow.render(use_case_diagram_path)

# Retornar o caminho do arquivo
interaction_flow_image_path = f"{use_case_diagram_path}.png"
interaction_flow_image_path

from graphviz import Digraph
import os

# Criação do diagrama de sequência
sequence_diagram = Digraph('SequenceDiagram', format='png')
sequence_diagram.attr(rankdir='TB', splines='polyline')

# Definir atores e componentes
sequence_diagram.node('Cliente', '🛒 Cliente', shape='ellipse')
sequence_diagram.node('SearchBar', '🔍 SearchBar', shape='box')
sequence_diagram.node('ProductList', '🛍️ ProductList', shape='box')
sequence_diagram.node('ProductDetail', '📦 ProductDetail', shape='box')
sequence_diagram.node('ShoppingCart', '🛒 ShoppingCart', shape='box')
sequence_diagram.node('CouponCodeInput', '🎟️ CouponCodeInput', shape='box')
sequence_diagram.node('PaymentGateway', '💳 PaymentGateway', shape='box')
sequence_diagram.node('OrderConfirmation', '✅ OrderConfirmation', shape='box')
sequence_diagram.node('OrderTracking', '🚚 OrderTracking', shape='box')

# Definir fluxos de interação
sequence_diagram.edge('Cliente', 'SearchBar', label='1. Busca por produtos')
sequence_diagram.edge('SearchBar', 'ProductList', label='2. Retorna resultados')
sequence_diagram.edge('Cliente', 'ProductDetail', label='3. Visualiza detalhes do produto')
sequence_diagram.edge('Cliente', 'ShoppingCart', label='4. Adiciona produto ao carrinho')
sequence_diagram.edge('Cliente', 'CouponCodeInput', label='5. Aplica cupom de desconto')
sequence_diagram.edge('Cliente', 'PaymentGateway', label='6. Realiza pagamento')
sequence_diagram.edge('PaymentGateway', 'OrderConfirmation', label='7. Confirmação do pagamento')
sequence_diagram.edge('OrderConfirmation', 'OrderTracking', label='8. Inicia rastreamento')

# Salvar o diagrama
# Obtém o diretório atual do script e cria o caminho dinâmico
current_directory = os.path.dirname(os.path.abspath(__file__))
use_case_diagram_path = os.path.join(current_directory, 'diagrama_sequencia')
sequence_diagram.render(use_case_diagram_path)

# Retornar o caminho do arquivo
sequence_diagram_image_path = f"{use_case_diagram_path}.png"
sequence_diagram_image_path

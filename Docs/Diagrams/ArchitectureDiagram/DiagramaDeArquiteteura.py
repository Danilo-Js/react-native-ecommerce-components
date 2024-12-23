from graphviz import Digraph
import os

# Criação do diagrama de arquitetura
architecture_diagram = Digraph('ArchitectureDiagram', format='png')
architecture_diagram.attr(rankdir='TB', splines='ortho')

# Camadas principais
architecture_diagram.node('UI Layer', '🖥️ Camada de Interface do Usuário', shape='box3d')
architecture_diagram.node('Business Logic Layer', '⚙️ Camada de Lógica de Negócio', shape='box3d')
architecture_diagram.node('Data Access Layer', '🗄️ Camada de Acesso a Dados', shape='box3d')
architecture_diagram.node('External Services', '🌐 Serviços Externos', shape='folder')

# Componentes da Interface do Usuário
architecture_diagram.node('SearchBar', '🔍 SearchBar', shape='box')
architecture_diagram.node('ProductList', '🛍️ ProductList', shape='box')
architecture_diagram.node('ProductDetail', '📦 ProductDetail', shape='box')
architecture_diagram.node('ShoppingCart', '🛒 ShoppingCart', shape='box')
architecture_diagram.node('CouponCodeInput', '🎟️ CouponCodeInput', shape='box')
architecture_diagram.node('OrderConfirmation', '✅ OrderConfirmation', shape='box')
architecture_diagram.node('OrderTracking', '🚚 OrderTracking', shape='box')

# Conexões entre camadas
architecture_diagram.edge('UI Layer', 'SearchBar')
architecture_diagram.edge('UI Layer', 'ProductList')
architecture_diagram.edge('UI Layer', 'ProductDetail')
architecture_diagram.edge('UI Layer', 'ShoppingCart')
architecture_diagram.edge('UI Layer', 'CouponCodeInput')
architecture_diagram.edge('UI Layer', 'OrderConfirmation')
architecture_diagram.edge('UI Layer', 'OrderTracking')

architecture_diagram.edge('SearchBar', 'Business Logic Layer')
architecture_diagram.edge('ProductList', 'Business Logic Layer')
architecture_diagram.edge('ShoppingCart', 'Business Logic Layer')
architecture_diagram.edge('OrderTracking', 'Business Logic Layer')

architecture_diagram.edge('Business Logic Layer', 'Data Access Layer')
architecture_diagram.edge('Business Logic Layer', 'External Services')

architecture_diagram.edge('External Services', 'PaymentGateway', label='💳 Sistema de Pagamento')
architecture_diagram.edge('External Services', 'DeliverySystem', label='🚚 Sistema de Entrega')

# Salvar o diagrama
# Obtém o diretório atual do script e cria o caminho dinâmico
current_directory = os.path.dirname(os.path.abspath(__file__))
use_case_diagram_path = os.path.join(current_directory, 'diagrama_arquitetura')
architecture_diagram.render(use_case_diagram_path)

# Retornar o caminho do arquivo
architecture_diagram_image_path = f"{use_case_diagram_path}.png"
architecture_diagram_image_path

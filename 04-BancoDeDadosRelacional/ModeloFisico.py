from sqlalchemy import create_engine,Column, Integer, String, Float, DateTime, ForeignKey, Table
from sqlalchemy.orm import relationship, sessionmaker, declarative_base
from datetime import datetime

Base = declarative_base()

# Tabela associativa para relacionamento N:N entre Pedido e Produto
pedido_produto = Table('pedido_produto', Base.metadata,
    Column('pedido_id', Integer, ForeignKey('pedidos.id'), primary_key=True),
    Column('produto_id', Integer, ForeignKey('produtos.id'), primary_key=True),
    Column('quantidade', Integer, default=1)
)

class Cliente(Base):
    __tablename__ = 'clientes'
    id = Column(Integer, primary_key=True)
    nome = Column(String(50), nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    pedidos = relationship('Pedido', back_populates='cliente')

    def __repr__(self):
        return f'<Cliente(nome={self.nome}, email={self.email})>'
    
class Pedido(Base):
    __tablename__ = 'pedidos'
    id = Column(Integer, primary_key=True)
    data = Column(DateTime, default=datetime.now)
    cliente_id = Column(Integer, ForeignKey('clientes.id'), nullable=False)
    cliente = relationship('Cliente', back_populates='pedidos')
    produtos = relationship('Produto', secondary=pedido_produto, back_populates='pedidos')

    def __repr__(self):
        return f'<Pedido(id={self.id}, data={self.data})>'

class Produto(Base):
    __tablename__ = 'produtos'
    id = Column(Integer, primary_key=True)
    nome = Column(String(50), nullable=False)
    preco = Column(Float, nullable=False)
    pedidos = relationship('Pedido', secondary=pedido_produto, back_populates='produtos')

    def __repr__(self):
        return f'<Produto(nome={self.nome}, preco={self.preco})>'
    
# Criação do banco de dados
engine = create_engine('sqlite:///:memory:', echo=True)
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Inserção de dados
cliente1 = Cliente(nome='Cliente 1', email='cliente1@email.com')
cliente2 = Cliente(nome='Cliente 2', email='cliente2@email.com')

produto1 = Produto(nome='Produto 1', preco=10)
produto2 = Produto(nome='Produto 2', preco=20)
produto3 = Produto(nome='Produto 3', preco=30)

pedido1 = Pedido(cliente=cliente1)
pedido2 = Pedido(cliente=cliente2)

pedido1.produtos.append(produto1)
pedido1.produtos.append(produto2)
pedido2.produtos.append(produto3)

session.add(cliente1)

session.add(produto1)
session.add(produto2)
session.add(produto3)

session.add(pedido1)
session.add(pedido2)

session.commit()

# Consulta de dados

# Consulta de todos os clientes
clientes = session.query(Cliente).all()
print("Clientes: ", clientes)

# Consulta de todos os pedidos de um cliente
pedidos = session.query(Pedido).filter(Pedido.cliente == cliente1).all()
print("Pedidos de cliente 1: ", pedidos)

# Consulta de todos os produtos de um pedido
produtos_pedido = pedido1.produtos
print("Produtos de pedido 1: ", produtos_pedido)

# Consulta de todos os pedidos de um produto
pedidos_produto = produto1.pedidos
print("Pedidos de produto 1: ", pedidos_produto)

session.close()
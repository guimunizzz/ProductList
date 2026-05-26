import { useState } from 'react';
import './App.css';

import type { Produto } from './interface/products';

import { ProductCard } from './components/productCard/productCard';


export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [nomeProduto, setNomeProduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');




  const handleRemoverProduto = (id: number) => {
    setProdutos(prev => prev.filter(p => p.id !== id));
  };

  const handleSalvarProduto = () => {
    if (nomeProduto.trim() && valor.trim() && quantidade.trim()) {
      const novoProduto: Produto = {
        id: produtos.length + 1,
        nomeProduto: nomeProduto.trim(),
        valorAVista: Number.parseFloat(valor),
        quantidade: Number.parseInt(quantidade)
      };
      setProdutos(prev => [...prev, novoProduto]);
      setNomeProduto('');
      setValor('');
      setQuantidade('');
      setModalVisible(false);
    }
  };



  return (
    <div className="container">
      <h1>Produtos</h1>
      <div className="modalAddProduto">
        <button onClick={() => setModalVisible(true)}>Adicionar Produto</button>
        {modalVisible && (
          <div className="modalContent">
            <h2>Adicionar Produto</h2>
            <input
              type="text"
              placeholder="Nome do Produto"
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
            />
            <input
              type="number"
              placeholder="Valor à Vista"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <input
              type="number"
              placeholder="Quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />
            <div className="actions">
              <button className="saveButton" onClick={handleSalvarProduto}>Salvar</button>
              <button className="cancelButton" onClick={() => setModalVisible(false)}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
      <div className="produtosContainer">
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            onRemover={handleRemoverProduto}
          />
        ))}
      </div>
    </div>
  )
}
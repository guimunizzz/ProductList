import styles from "./produtCard.module.css";

import type { Produto } from "../../interface/products";

interface ProductCardProps {
  produto: Produto;
  onRemover: (id: number) => void;
}

export function ProductCard({ produto, onRemover }: Readonly<ProductCardProps>) {
  return (
    <div className={styles.productCard}>
      <h3>{produto.nomeProduto}</h3>
      <p>Valor à Vista: R$ {produto.valorAVista.toFixed(2)}</p>
      <p>Quantidade: {produto.quantidade}</p>
      <button className={styles.removeButton} onClick={() => onRemover(produto.id)}>Remover</button>
    </div>
  );
}
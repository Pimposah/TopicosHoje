import mongoose, { Schema } from 'mongoose';

export interface ProdutoInteface {
  nome: String,
  descricao: String,
  quantidadeEstoque: Number,
  preco: Number,
  precoPromocional:Number,
  precoPromoAtivado: Boolean,
  tipo:String;
}

const ProdutoSchema = new Schema(
    {
        nome: String,
        descricao: String,
        quantidadeEstoque: Number,
        preco: Number,
        precoPromocional:Number,
        precoPromoAtivado: Boolean,
        tipo:String,
    },
    {
        timestamps: true,
    }
);
export const Produto = mongoose.model('Produto', ProdutoSchema, 'produtos');
{
}


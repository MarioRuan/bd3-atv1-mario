const database = 'Categoria_produto';

use(database)

db['Categoria_produto'].find()

db['Categoria_produto'].find({"cpf":"00000000000"}, {"cod_aluno":0})

db['Categoria_produto'].find({"cpf":"00000000000"}, {"cod_aluno":0,"_id":0})
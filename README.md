# CSV Generator using Node.js Streams

Este projeto demonstra como usar **Streams do Node.js** para gerar e salvar dados em formato CSV de forma eficiente, mesmo com grandes volumes de dados.

## 🚀 Visão Geral

O script cria um grande volume de objetos JSON simulando pessoas, transforma esses objetos em linhas CSV e salva em um arquivo `my.csv`. Tudo é feito com `Readable`, `Transform` e `Writable Streams`, garantindo alta performance e baixo uso de memória.

## 📂 Estrutura

- **Readable Stream**: Gera dados fictícios de pessoas.
- **Transform Stream (`writableMapToCsv`)**: Converte cada objeto JSON em uma linha de CSV.
- **Transform Stream (`setHeader`)**: Adiciona o cabeçalho ao arquivo CSV.
- **Writable Stream**: Salva os dados transformados em um arquivo `my.csv`.

## 🧱 Tecnologias

- Node.js (v14+)
- Módulo nativo `stream`
- Módulo nativo `fs`

## 📦 Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Executar:
  use o comando:
```bash
node index.js
```bash


4. O arquivo my.csv será criado na raiz do projeto.

📝 Exemplo de saída (CSV)

id, name, address, city
1716574354890, JHON DUE ~ 0, St.Lucius, New York
1716574354891, JHON DUE ~ 1, St.Lucius, New York
...

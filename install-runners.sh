# Criar a pasta e navegar até ela
$ mkdir actions-runner && cd actions-runner

# Baixar o pacote mais recente do runner
$ curl -o actions-runner-linux-x64-2.323.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.323.0/actions-runner-linux-x64-2.323.0.tar.gz

# Opcional: Validar o hash do arquivo baixado
$ echo "0dbc9bf5a58620fc52cb6cc0448abcca964a8d74b5f39773b7afcad9ab691e19  actions-runner-linux-x64-2.323.0.tar.gz" | shasum -a 256 -c



# Extrair o pacote
$ tar xzf ./actions-runner-linux-x64-2.323.0.tar.gz
# Verifique o conteúdo extraído
$ ls

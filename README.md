# Delivery do Daisuke

Desenvolvido com intuito de aprender sobre a biblioteca shadcn. O projeto é um cardápio online de um restaurante onde possui algumas opções de escolha e ao finalizar, é encaminhado para o WhatsApp com as informações inseridas do pedido.

## Instalando

Abra o terminal na pasta onde desejar clonar o repositório e insira o código abaixo:

```
git clone git@github.com:Mekusiad/shadcn-loja2.git
```

Após clonar a pasta:

```
cd shadcn-loja2
```

e instale as dependências:

```
npm install
```

O programa roda com o código:

```
npm run dev
```

O projeto possui uma variável de ambiente chamada VITE_ZAP onde será necessário inserir o número do contato na qual irá enviar os dados por WhatsApp. Então antes de testar o código, crie um arquivo .env e informe o contato.

## Tecnologias utilizadas

- React: Uma biblioteca JavaScript popular para construir interfaces de usuário interativas.
- Zod: Uma biblioteca de declaração e validação de dados ou "schema validation", em TypeScript.
- Vite: Um framework para construção de projetos font-end.
- shadcn/ui: Uma biblioteca de componentes de IU reutilizáveis e estilizáveis.
- Tailwind CSS: Um framework CSS que oferece várias classes para utilização já pré-estilizadas.

#  Box model

- Fundamental para fazer layouts para a web
- Maior facilidade para aplicar o css

# box-sizing

- content-box | border-box

```css
div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 10%;
  padding: 0 20px;
}
```

width é o tamanho do conteudo, não da caixa, para fazer a caixa verdadeiramente 100px, adicione

```css
.item {
  box-sizing: border-box
}
```

# display | block vs inline

|-----------------------------------|--------------------------------|
| **BLOCK**                         | **Inline**                     |
|-----------------------------------|--------------------------------|
| Ocupa toda a linha, colocando o   | Elemento ao lado do outro      |
| próximo elemento abaixo desse     |                                |
|-----------------------------------|--------------------------------|
| width e height são respeitados    |  width e height não funcionam  |
|-----------------------------------|--------------------------------|
| padding, margin, border irão      | Somente valores horizontais de |
| funcionar normalmente             | margin, padding e border       |
|-----------------------------------|--------------------------------|

exemplos:

block: `<p> <div> <section>`, headings
inline: `<a> <strong> <span> <em>`

## margin

Espaços entre os elementos

* Cuidado com margin collapsing (top se ajunta ao bottom)

## padding

Preenchimento interno da caixa

* Padding poderá causar diferença na largura de um elemento
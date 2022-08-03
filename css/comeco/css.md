###                                        CSS


# Anatomia 

```css

    h1 {
      color: blue;
      font-size: 60px;
      background: gray;
    }

```

  * Selector - h1, css acha todos os H1s to html e aplique as propiedades
  * Decalration
  * Properties - color, font-size, background
  * Property Value - valor da propiedade(e.g. 60px)


# Selector

  * Global selector '*'
  * Element/Type selector 'h1, h2, p, div'
  * ID selector '#box, #container'
  * Attribute selector, Pseudo-class, Pseudo-element e outros
  
# Caixas
  
  * Voce irá perceber que (quase) tudo sao caixas do CSS
  * Posicionamentos, tamanhos, espacamentos, bordas, cores
  * Caixa pode ficar ao lado uma da outra, ou acima
  * Elementos HTML sao caixas

# Origem do estilo

  inline > tag style > tag link


# Especificidade(0 menos forca, 1000 mais forca)
# 0. Universal selector, combinators e negation pseudo*class
# 1. Elment type selector, e pseudo*elements
# 10. Classes e attribute selectors
# 100. ID selector
# 1000. Inline

  Vocé pode fazer isso:
  h1.title#my-title(Isso da a forca de 101)
  #my-title strong

# A regra !important

  cuidado, EVITE O USO
  
  nao é considerado uma boa pratica
  quebra o fluxo natural da cascata

  At/@ rules
  esta relacuonado com o signal de

# Exemplos comuns

* @import        /* incluir um CSS externo */

* @media         /* regras condicionais para dispositivos */

* @font*face     /* fontes externas */

* @Keyframes     /* animation */


```css

@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

@media (min*width: 500px) {
  /* rules here */
}

@font-face {
  /* rules here */
}

@keyframes nameofanimation {
  /* rules here */
}

```

# Shorthand

* juncao de propiedades
* resumindo
* legível

# Exwmplos

```CSS

{
  /* background properties */
  background-color: #000;
  background-image: url(image.jpg);
  background-repeat: no-repeat;
  background-position: left top;

  /* background shorthand */
  background: #000 url(image.jpg) no-repeat left top;

}

```

* não irá considerar propiedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmante, a ordem descrita não importa, mas, se houver muitas propiedades com valores semelhantes, poderemons encontrar problemas

# Funcoes

* nome seguido de abre e fecha parentesis
* recebe argumentos

# Exemplos

```CSS
@import url("http://urlaqui.com/styles.css")

{
  color: rgb(255, 0, 100);
  width: calc(100% - 10px);
}

```


# Vendor Prefixex

PErmite que adicione `features` a fim de colocar em uso alguma novidade que vemos no CSS

# Exemplo

```css
p {
  -webkit-background-clip: text;

}
  
```

#  O CSS tem:

*  -Webkit-      Chrome, safari, iOS e Android
*  -moz-         Mozilla(Firefox)
*  -ms-          Internet Explorer
*  -o-           Opera


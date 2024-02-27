
class Elems{
    constructor(el){
        this.el = el
    }
    on(event, fn){
        this.el.addEventListener(event, fn)
    }
    setColor(color){
        this.el.style.color = this.color
    }
    lsp(size){
        this.el.style.letterSpacing = size
    }
    set yozuvRazmeri(razmer){
        this.el.style.fontSize = razmer
    }
}
function $(el) {
    return new Elems(document.querySelector(el))
}
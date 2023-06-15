class SVG{ 
    constructor(){
        this.characterText = ""
        this.shapes2 = ""

    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shapes2} ${this.characterText}</svg>`
    }
    setText(text, color){
        this.characterText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`

    }
    setShape(shapeInput) {
        this.shapes2 = shapeInput.render();
      }
    
}

module.exports = SVG
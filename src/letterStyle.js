class LetterStyle {
  constructor(color = 'black', fontSize = '16px', fontFamily = 'Arial', textDecoration = 'none') {
    this.color = color;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.textDecoration = textDecoration;
  }
  setColor(color) {
    this.color = color;
  }

  setFontSize(fontSize) {
    this.fontSize = fontSize;
  }

  setFontFamily(fontFamily) {
    this.fontFamily = fontFamily;
  }

  setTextDecoration(textDecoration) {
    this.textDecoration = textDecoration;
  }
}

export default LetterStyle;
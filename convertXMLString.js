function convertXMLString(input, outputFormat){
  if(typeof input === 'string'){
    if(outputFormat === 'xml'){
      return input.replace(/(&)/g, '&amp;').replace(/(<)/g, '&lt;').replace(/(>)/g, '&gt;').replace(/(')/g, '&apos;')
    } else if(outputFormat === 'string'){
      return input.replace(/(&lt;)/g, '<').replace(/(&gt;)/g, '>').replace(/(&apos;)/g, "'").replace(/(&amp;)/g, '&')
    } else {
      // invalid outputFormat
      return input
    }
  } else {
    // not a string
    return input
  }
}

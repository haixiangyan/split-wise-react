
export const parseOutput = (prevOutput = '0', text: string): string => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      return prevOutput === '0' ? text : prevOutput + text
    case '.':
      return prevOutput.includes('.') ? prevOutput : prevOutput + '.'
    case '删除':
      return prevOutput.length === 1 ? '' : prevOutput.slice(0, -1)
    case '清空':
      return ''
    default:
      return prevOutput
  }
}

export function emitDownload(data: string, name?: string) {
  // const CSVData = 'data:text/csv;charset=utf-8,\ufeff' + data
  const jsonData = new Blob(['\uFEFF' + data], {
    type: 'application/json'
  })
  const csvUrl = URL.createObjectURL(jsonData)
  // window.open('data:text/csv;charset=utf-8,\ufeff' + data)
  var link = document.createElement('a')
  link.setAttribute('href', csvUrl)
  link.setAttribute('download', name || 'subject.json')
  document.body.appendChild(link)
  link.click()
}

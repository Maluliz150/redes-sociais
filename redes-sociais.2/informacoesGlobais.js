const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function viralizarInformacoesGlobais(params) {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = documento.createElement('p')
    paragrafo.classList.add('grafiocs-container__texto')
    paragrafo.innerHTML = 'você sabia que o mundo tem ${dados.total-pessoas-mundo} de pessoas e que aproximadamente ${total-pessoas-conectadas} estão conectadas em algumas redes sociais'

vizualizarInformacoesGlabois()
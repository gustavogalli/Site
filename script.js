function changeColors(){
    let currentPage = document.querySelector('title').innerText

    switch(currentPage){
        case 'GG - Quem sou eu?':
            document.body.style.setProperty('--cor-padrao','var(--vermelho')
            document.body.style.setProperty('--cor-padrao-escura','var(--vermelho-escuro')
            break
        case 'GG - Conhecimentos':
            document.body.style.setProperty('--cor-padrao','var(--laranja')
            document.body.style.setProperty('--cor-padrao-escura','var(--laranja-escuro')
            break
        case 'GG - Carreira':
            document.body.style.setProperty('--cor-padrao','var(--verde')
            document.body.style.setProperty('--cor-padrao-escura','var(--verde-escuro')
            break
        case 'GG - Pessoal':
            document.body.style.setProperty('--cor-padrao','var(--azul')
            document.body.style.setProperty('--cor-padrao-escura','var(--azul-escuro')
            break
    }
}

changeColors()
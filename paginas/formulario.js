function enviar() {
    var respon = document.getElementById('responsavel')
    var empre = document.getElementById('empresa')
    var area = document.getElementById('area-empresa')
    var servico = document.getElementById('servico-empresa')
    var imagina = document.getElementById('como-imagina')
    var slogan = document.getElementById('slogan')


    // VERIFICA SE A EMPRESA TEM PRESSA NA CRIAÇÃO DO PROJETO
    var velocidade = ''
    var dozeSim = document.getElementById('velocidade-sim')
    var dozeNao = document.getElementById('velocidade-nao')
    if(dozeSim.checked) {
        velocidade = 'Sim'
    }else if (dozeNao.checked) {
        velocidade = 'Não, tempo normal'
    }

    // VERIFICA SE A EMPRESA TEM OS TEXTOS QUE SERÃO ULTILIZADOS
    var textos = ''
    var onzeSim = document.getElementById('textos-sim')
    var onzeNao = document.getElementById('textos-nao')
    if(onzeSim.checked) {
        textos = 'Sim'
    }else if (onzeNao.checked) {
        textos = 'Não, mas vou providenciar'
    }

    // VERIFICA SE A EMPRESA TEM IMAGENS
    var imagens = ''
    var noveSim = document.getElementById('imagens-sim')
    var noveNao = document.getElementById('imagens-nao')
    if(noveSim.checked) {
        imagens = 'Sim'
    }else if (noveNao.checked) {
        imagens = 'Vamos precisar tirar algumas'
    }

    // VERIFICA SE A EMPRESA TEM FONTES DE TEXTO PADRÃO
    var fonteTexto = ''
    var oitoSim = document.getElementById('fonte-sim')
    var oitoNao = document.getElementById('fonte-nao')
    if(oitoSim.checked) {
        fonteTexto = 'Sim'
    }else if (oitoNao.checked) {
        fonteTexto = 'Vamos precisar escolher'
    }

    // VERIFICA SE A EMPRESA TEM PALETA DE CORES
    var paleta = ''
    var seteSim = document.getElementById('paleta-sim')
    var seteNao = document.getElementById('paleta-nao')
    if(seteSim.checked) {
        paleta = 'Sim'
    }else if (seteNao.checked) {
        paleta = 'Vou precisar criar'
    }

    // VERIFICA SE A EMPRESA TEM LOGO
    var logo = ''
    var seisSim = document.getElementById('logo-sim')
    var seisNao = document.getElementById('logo-nao')
    if(seisSim.checked) {
        logo = 'Sim'
    }else if (seisNao.checked) {
        logo = 'Vou precisar criar'
    }

    

    // VERIFICA SE ALGUM CAMPO ESTÁ VAZIO
    var exibirAlert = false
    const temRequired = document.querySelectorAll('.tem-required')
    temRequired.forEach(temRequired => {
        if(temRequired.value.length == 0) {
            exibirAlert = true
        }
    })

    // SE AVER, RETORNA TRUE E EXIBI O ALERT SE NÃO É ENVIADO AO WHATSAPP
    if(exibirAlert) {
        alert('Por favor preencha todos os campos!')
    }else {
        // ENVIAR MENSAGEM PARA WHATSAPP
        const messageItem = `Olá, meu nome é "${respon.value}!"Represento a empresa (${empre.value}), desejo criar meu website com seus serviços. Vamos marcar uma reunião, os conteúdos para o projeto são esses:
        1- ${respon.value}
        2- ${empre.value}
        3- ${area.value}
        4- ${servico.value}
        5- ${imagina.value}
        6- ${logo}
        7- ${paleta}
        8- ${fonteTexto}
        9- ${imagens}
        10- ${slogan.value}
        11- ${textos}
        12- ${velocidade}
        `
        const message = encodeURIComponent(messageItem)
        const phone = "8186154739"

        window.open(`https://wa.me/${phone}?text=${message} `, "_blank")
    }
}
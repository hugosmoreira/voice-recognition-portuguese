(function () {
    const speakBtn = document.querySelector('#speakbt');
    const resultSpeaker = document.querySelector('#resultSpeak');

    //const greetings = ['Estou muito bem Obrigado', 'Va tomar no cu me deixe sozinha', 'Tudo otimo neste lindo dia']
    //const weather = ['O tempo esta otimo, saia de casa e va caminhar', 'O tempo esta otimo para sentar a bunda e estudar', 'O tempo esta tipo inferno de 40 graus']


    if(window.SpeechRecognition || window.webkitSpeechRecognition) {
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

        //const greetings = ['Estou muito bem Obrigado', 'Va tomar no cu me deixe sozinha', 'Tudo otimo neste lindo dia']
        //const weather = ['O tempo esta otimo, saia de casa e va caminhar', 'O tempo esta otimo para sentar a bunda e estudar', 'O tempo esta tipo inferno de 40 graus']

        const myRecognition = new SpeechRecognition();

        myRecognition.lang = 'pt-BR';

        speakBtn.addEventListener('click', function(){

            try{
                myRecognition.start();

                resultSpeaker.innerHTML = "Estou te Ouvindo Agora";
            }catch(erro){
                alert('Erro' + erro.message)
            }


        }, false);

        myRecognition.addEventListener('result',function(evt){
            var resultSpeak = evt.results[0][0].transcript;
            console.log(resultSpeak);
            
            resultSpeaker.innerHTML = resultSpeak;

            readOutLoud(resultSpeak);

            switch (resultSpeak.toLowerCase()) {
                case 'clarear':
                    document.body.style.backgroundColor = '#33cc99';
                break;
                case 'escurecer':
                    document.body.style.backgroundColor = '#555';
            }
            
            function readOutLoud(message){

                const greetings = ['Estou muito bem Obrigado', 'Va tomar no cu me deixe sozinha', 'Tudo otimo neste lindo dia']
                const weather = ['O tempo esta otimo, saia de casa e va caminhar', 'O tempo esta otimo para sentar a bunda e estudar', 'O tempo esta tipo inferno de 40 graus']
                const programar = ['Entao senta a bunda na cadeira, liga o computador e comece Ja', 'Voce ja tem alguma experiencia?', 'Qual linguagem voce gostaria de Aprender?']
                const comecar = ['Experimente estudar algumas disciplinas comuns do curso de graduação, como Raciocínio Lógico e Linguagem de Programação. Há uma grande diversidade de linguagens por aí, sendo que o nível de dificuldade varia de uma para outra.'];
                const nadaxp = ['Voce deveria entao comecar por HTML, CSS, e javaScript se quiser ser focado em Front-End'];
                const speech = new SpeechSynthesisUtterance();
            
                speech.text = 'Nao entendi Por favor repita'
            
                if(message.includes('Olá tudo bem')) {
                    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
                    speech.text = finalText;
                }
            
                if(message.includes('Como está o tempo hoje')) {
                    const finalWeather = weather[Math.floor(Math.random() * weather.length)];
                    speech.text = finalWeather
                }

                if(message.includes('quero aprender a programar')) {
                    const finalProgramar = programar[Math.floor(Math.random() * programar.length)];
                    speech.text = finalProgramar

                }
                
                if(message.includes('por onde começar')) {
                    const finalComecar = comecar[Math.floor(Math.random() * comecar.length)];
                    speech.text = finalComecar

                }

                if(message.includes('nenhuma experiência')) {
                    const finalnadaxp = nadaxp[Math.floor(Math.random() * nadaxp.length)];
                    speech.text = finalnadaxp

                }

                if(message.includes('não tenho experiência')) {
                    const finalnadaxp = nadaxp[Math.floor(Math.random() * nadaxp.length)];
                    speech.text = finalnadaxp

                }
                
                
                speech.lang = 'pt-BR'
            
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;
            
                window.speechSynthesis.speak(speech);
            
            }
            



        },false);

        myRecognition.addEventListener('error', function(evt){
            resultSpeaker.innerHTML = 'Se voce falou algo eu nao ouvi'
        },false);

    }else {
        resultSpeaker.innerHTML = 'Seu navegador eh fudido voce precisa fazer um update';
    }
})();

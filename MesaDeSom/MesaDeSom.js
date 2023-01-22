const Sons = ['aplauso', 'vaia', 'surpresa', 'vitória', 'erro']

Sons.forEach(Sons => {
    const btn = document.createElement('botoes')
    btn.classList.add('btn')

    btn.innerText = Sons

    btn.addEventListener('click', () => {
        stopSons()

        document.getElementById(Sons).play()
    })

    document.getElementById('botoes').appendChild(btn)
})

function stopSons() {
    Sons.forEach(Sons => {
        const Sons = document.getElementById(Sons)

        Sons.pause()
        Sons.currentTime = 0;
    })
}
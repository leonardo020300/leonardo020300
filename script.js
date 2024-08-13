document.getElementById('generateQR').addEventListener('click', function () {
    const poema = "En el cielo claro, la luna brilla,\n" +
                  "Los sueños vagan, la noche es tranquila.\n" +
                  "Cada estrella un deseo, cada suspiro una canción,\n" +
                  "Bajo el manto estrellado, florece el corazón.\n\n" +
                  "Las olas del mar, susurran en calma,\n" +
                  "El viento acaricia, nutriendo el alma.\n" +
                  "En la serenidad, el tiempo se detiene,\n" +
                  "El amor eterno, en el silencio se mantiene.";

    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: poema,
        dotsOptions: {
            color: "#000",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#f4f4f4"
        }
    });

    document.getElementById('qrCode').innerHTML = "";
    qrCode.append(document.getElementById('qrCode'));
});

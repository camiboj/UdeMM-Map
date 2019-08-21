function update(element, carrera, materiasFromLoad){
    $("#grafo").text("")
    $("#grafo").append("<div class='loader'></div>")
    let filename, titulo, orientaciones, plan
    carreraActual = carrera
    switch(carrera){
        case 'informatica':
            orientaciones = true
            filename = 'data/informatica-1986.csv'
            titulo = 'Ingeniería en Informática'
            tituloshort = 'Informática'
            plan = 'Plan 1986 v2016'
            break
        case 'sistemas':
            orientaciones = false
            filename = 'data/sistemas-1986.csv'
            titulo = 'Licenciatura en Análisis de Sistemas'
            tituloshort = 'Sistemas'
            plan = 'Plan 1986 v2016'
            break
        case 'electronica':
            orientaciones = true
            filename = 'data/electronica-2009.csv'
            titulo = 'Ingeniería Electrónica'
            tituloshort = 'Electrónica'
            plan = 'Plan 2009 v2019'
            break
        case 'quimica':
            orientaciones = false
            filename = 'data/quimica-1986.csv'
            titulo = 'Ingeniería Química'
            tituloshort = 'Química'
            plan = 'Plan 1986 v2016'
            break
        case 'civil':
            orientaciones = false
            filename = 'data/civil-2009.csv'
            titulo = 'Ingeniería Civil'
            tituloshort = 'Civil'
            plan = 'Plan 2009 v2016'
            break
        case 'alimentos':
            orientaciones = false
            filename = 'data/alimentos-2000.csv'
            titulo = 'Ingeniería de Alimentos'
            tituloshort = 'Alimentos'
            plan = 'Plan 2000 v2016'
            break
        case 'electricista':
            orientaciones = false
            filename = 'data/electricista-2009.csv'
            titulo = 'Ingeniería Electricista'
            tituloshort = 'Electricista'
            plan = 'Plan 2009 v2016'
            break
        case 'naval':
            orientaciones = false
            filename = 'data/naval-1986.csv'
            titulo = 'Ingeniería Naval y Mecánica'
            tituloshort = 'Naval'
            plan = 'Plan 1986 v2016'
            break
        case 'mecanica':
            orientaciones = true
            filename = 'data/mecanica-1986.csv'
            titulo = 'Ingeniería Mecánica'
            tituloshort = 'Mecánica'
            plan = 'Plan 1986 v2016'
            break
        case 'petroleo':
            orientaciones = false
            filename = 'data/petroleo-2015.csv'
            titulo = 'Ingeniería en Petróleo'
            tituloshort = 'Petróleo'
            plan = 'Plan 2015 v2016'
            break
        case 'agrimensura':
            orientaciones = false
            filename = 'data/agrimensura-2006.csv'
            titulo = 'Ingeniería en Argimensura'
            tituloshort = 'Agrimensura'
            plan = 'Plan 2006 v2016'
            break
        case 'industrial':
            orientaciones = false
            filename = 'data/industrial-2011.csv'
            titulo = 'Ingeniería Industrial'
            tituloshort = 'Industrial'
            plan = 'Plan 2011 v2019'
            break
    }

    $('#creditos-var').text(0)
    fiubamap(filename, materiasFromLoad)
    $("#carrera-actual-long").text(titulo + ' | ' + plan);
    $("#carrera-actual-short").text(tituloshort);
    $("#carreras .active").removeClass('active')
    $(element).addClass('active')
    displayOrientaciones(orientaciones)
}

function displayOrientaciones(show){
    $("#orientaciones a").remove()
    if (show) {$("#orientaciones-hidden").show()}
    else {$("#orientaciones-hidden").hide()}
}

function fiubamap(file, materiasFromLoad){
    $.ajax({
        url: file,
        dataType: 'text',
        success: function(data, jqXHR, textStatus) {graphFromCSV(data, materiasFromLoad)}
    })
}

$(".dropdown").on("mouseover", function () {
    $(this).children('.dropdown-content').show()
});

$(".dropdown").on("mouseout", function () {
    $(this).children('.dropdown-content').hide()
});

$(".dropdown-content").on("click", function () {
    $('.dropdown-content').hide()
});

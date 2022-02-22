import pagina from './pageObjectModel';

fixture('Pruebas de UI usando testcafe para practicas de Nodejs')
    .page('https://devexpress.github.io/testcafe/example/');

test('Prueba1: Abrir una página de pruebas', async t => {
    await t
        .wait (100);
});

test('Prueba2: Escribir un texto', async t => {
    await t.typeText(pagina.nameImput,'Tester')
        //Assertions
        .expect(pagina.nameImput.value).eql('Tester');
});

test('Prueba3: Escribir numeros', async t =>{
    await t
        .typeText(pagina.nameImput, '7687687')

        .expect(pagina.nameImput.value).eql('7687687')
        .expect(pagina.nameImput.value).notEql('Tester')
});

test('Prueba4: Escribir signos', async t =>{
    await t
        .typeText(pagina.nameImput, '¿?=)(/&%$·!')

        .expect(pagina.nameImput.value).eql('¿?=)(/&%$·!')
        .expect(pagina.nameImput.value).notEql('73482739')
});

test('Prueba5: Usar una variable y un if dentro de mi prueba', async t =>{
    let variable = '76876';
    //console.log('typeOf: ', typeof(variable))

    await t
        .click(pagina.nameImput)
        if(typeof(variable) == 'number'){
            console.log('Este objeto no permite numeros')
            await t
            .expect(pagina.nameImput.value).eql('')
        } else {
            await t 
                .typeText(pagina.nameImput, '76876')
                .expect(pagina.nameImput.value).eql(variable)
        }
});

test('Prueba6: Escribir un texto y borrar y remplazar una sola letra', async t =>{
    await t
        .expect(pagina.nameImput.value).eql('')
        .typeText(pagina.nameImput,'QA')
        .typeText(pagina.nameImput,'Teter', { replace: true})
        .typeText(pagina.nameImput,'s', {caretPos: 2})

        //Assertions
        .expect(pagina.nameImput.value).notEql('Texter')
        .expect(pagina.nameImput.value).notEql('QA')
        .expect(pagina.nameImput.value).contains('Test')
        .expect(pagina.nameImput.value).eql('Tester')
});

test('Prueba7: Escribir un texto, seleccionarlo y borrarlo y volver a escribir', async t => {
    await t
        .expect(pagina.nameImput.value).eql('')
        .typeText(pagina.nameImput,'Texter')
        .pressKey('ctrl+a delete')
        .typeText(pagina.nameImput,'Tester')

        //Assertions
        .expect(pagina.nameImput.value).notEql('Texter')
        .expect(pagina.nameImput.value).notEql('QA')
        .expect(pagina.nameImput.value).contains('Test')
        .expect(pagina.nameImput.value).eql('Tester')
});

test('Prueba8: Probar un click a un checkbox', async t =>{
    await t
        .expect(pagina.checkbox1.checked).notOk()
        .click(pagina.checkbox1)
        .expect(pagina.checkbox1.checked).ok()

        //opcional: hacer una prueba con un if validando antes si esta seleccionado o no el checkbox
});

test('Prueba9: Probar cada uno de los checkboxes en la página', async t =>{
    for (const feature of pagina.featureList){
        await t
            .click(feature.label)
            .wait(500)
            .expect(feature.checkbox.checked).ok();
    }
});

test('Prueba10: Probar dar click en el radio button windows', async t =>{
    await t
        .expect(pagina.radio_windows.checked).notOk()
        .click(pagina.radio_windows)
        .expect(pagina.radio_windows.checked).ok()
});

test('Prueba11: Probar dar click en el radio button linux', async t => {
    await t
        .expect(pagina.radioButtonLinux.checked).notOk()
        .click(pagina.radioButtonLinux)
        .expect(pagina.radioButtonLinux.checked).ok()
});

test('Prueba12: Probar dar click en el radio button Windows 2', async t => {
    await t
        .expect(pagina.radioButtonWindows.checked).notOk()
        .click(pagina.radioButtonWindows)
        .expect(pagina.radioButtonWindows.checked).ok()
});

test('Prueba13: Probar seleccionar un elemento de un menu', async t =>{
    await t
        .click(pagina.menu)
        .click(pagina.javascript)

        .expect(pagina.javascript.exists).ok()
        .expect(pagina.menu.selectedIndex).eql(1);
});

test('Prueba14: Dar click en un checkbox para activar un area de texto', async t =>{
    await t
        .click(pagina.triedCheckbox)
        .typeText(pagina.textArea,'Primera linea')
        .typeText(pagina.textArea, '\nSegunda linea')
        .typeText(pagina.textArea, '\nTercera linea')
        .wait(300)
        .selectTextAreaContent(pagina.textArea,0,5)
        .wait(300)
        .pressKey('delete')
        .wait(600)
        .typeText(pagina.textArea, 'Remplaza todo por esto',{replace:true})
        .expect(pagina.textArea.value).eql('Remplaza todo por esto')
        .expect(pagina.textArea.value).notContains('linea')
});

test('Prueba 15: manejar un slider bar', async t =>{
    await t
        .click(pagina.triedCheckbox)
        .dragToElement(pagina.slider.handle,pagina.slider.tick.withText('9'))
});
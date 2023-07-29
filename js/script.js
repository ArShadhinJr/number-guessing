let heading = document.querySelector( '.heading' );
let input = document.querySelector( '.input' );
let btn = document.querySelector( '.btn' );
let error = document.querySelector( '.error' );

let inputOne = document.querySelector( '.input-one' );
let btnOne = document.querySelector( '.btn-one' );
let errorOne = document.querySelector( '.error-one' );

let innerBox = document.querySelector('.inner-class' );

let inputTwo = document.querySelector( '.input-two' );
let btnTwo = document.querySelector( '.btn-two' );
let errorTwo = document.querySelector( '.error-two' );

let refresh = document.querySelector( '.refreshButton' )

window.addEventListener('load', function() {
    input.value = ''; 
});

btn.addEventListener( 'click', function () {
    if ( input.value == '' ) {
        error.style.display = 'block'
    } else if ( isNaN(input.value) ) {
        console.log('akhane achi');
        heading.innerHTML = ( input.value );
        heading.style.color = ( '#7041d3' );
        error.style.display = 'none';
        input.style.display = 'none';
        btn.style.display = 'none';

        inputOne.style.display = 'block';
        btnOne.style.display = 'inline-block';
        inputOne.classList.remove( 'none' );
        btnOne.classList.remove( 'none' );

        inputOne.value = ''; 
    } else {
        
        error.style.display = 'block';
    }
} )

btnOne.addEventListener( 'click', function () {

    if ( inputOne.value == '' ) {
        errorOne.style.display = 'block';
        errorOne.innerHTML = ( 'Please give a number' );
        inputOne.value = '';
    } else if ( inputOne.value == 0 ) {
        errorOne.style.display = 'block';
        errorOne.innerHTML = ( 'Please give 1-10' );
        inputOne.value = '';
    } else if ( isNaN( inputOne.value ) ) {
        errorOne.style.display = 'block';
        errorOne.innerHTML = ( 'Please give a number' );
        inputOne.value = '';
    } else if (inputOne.value <= 10 && inputOne.value >= 0) {
        errorOne.style.display = 'none';
        inputOne.style.display = 'none';
        btnOne.style.display = 'none';

        heading.innerHTML = ( 'You are player 2' );
        heading.style.color = ( '#70faff' );

        inputTwo.style.display = 'block';
        btnTwo.style.display = 'inline-block';
     } else {
        errorOne.style.display = 'block';
        errorOne.innerHTML = ( 'Please give a number 1 to 10' );
        inputOne.value = '';
    }

    
} )




let count = 5;
    
btnTwo.addEventListener( 'click', function () {
    if ( inputTwo.value == '' ) {
        errorTwo.style.display = 'block';
        errorTwo.innerHTML = ( 'Please give a number' );
    } else if( inputTwo.value == 0 ) {
        errorTwo.style.display = 'block';
        errorTwo.innerHTML = ( 'Please give 1-10' );
    } else if ( inputOne.value == inputTwo.value) {
        heading.innerHTML = ( 'Player 2 Win' );
        heading.style.color = '#FF0000';
        errorTwo.style.display = 'none';
        inputTwo.style.display = 'none';
        btnTwo.style.display = 'none';
        refresh.addEventListener( 'click', function() {
                    location.reload();
                })
            refresh.classList.remove('none');
    } else if ( inputOne.value !== inputTwo.value ) {
        

        if ( count > 0 ) {
            
            errorTwo.style.display = 'block';
            count--;
            errorTwo.innerHTML = ( 'You have ' + count + ' left' );
            if ( count == 0 ) {
                heading.innerHTML = (  input.value + '. You are Win');
                heading.style.color = '#198754';
                errorTwo.style.display = 'none';
                inputTwo.style.display = 'none';
                btnTwo.style.display = 'none';
                
                refresh.addEventListener( 'click', function() {
                    location.reload();
                })
            refresh.classList.remove('none');

            }
            
        } 
    } else {
            errorTwo.innerHTML = ( 'Game Over' );
    }
}  )
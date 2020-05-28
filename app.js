 //NUMBER COUNT
$(".num").counterUp({ delay: 10, time: 1000 });


//HEADING AUTOTYPE

{
    const heading = 'Meet Our Team';
    let i = 0;

    const typing = () => {
        if (i < heading.length) {
            document.querySelector('.heading').innerHTML += heading.charAt(i);
            i++;
            setTimeout(typing, 150);
        }
    };

    typing();
}
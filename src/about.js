function about(){
    const content = document.getElementById('content')
    const heading = document.createElement('h1')
    heading.innerHTML ='About Us'
    content.appendChild(heading)
    const abt = document.createElement('p')
    abt.innerHTML = 'Our restaurant has been serving amazing, fresh and warm food since 2013. It was funded by the great Chef Chefocious! We are not a themed restaurant but instead strive to provide our customers with foods from all over the world! Originally funded in Chef City, we have now expanded our network to almost the whole country! You can find us on all of the big cities!'
    content.appendChild(abt)
    const ad = document.createElement('h4')
    ad.innerHTML= 'Address'
    content.appendChild(ad)
    const ad1 = document.createElement('p')
    ad1.innerHTML = '3/32, Middle Street, Thenpothai, Tenkasi'
    content.appendChild(ad1)
    const phone = document.createElement('h4')
    phone.innerHTML ='9080249484'
    content.appendChild(phone)
    const email = document.createElement('h4')
    email.innerHTML ='vinothkumarr8987@gmail.com'
    content.appendChild(email)
    
}

export{about} 
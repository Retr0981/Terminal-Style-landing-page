const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutMe = document.querySelector('#about-me');
const contactMe = document.querySelector('#contact-me');


about.addEventListener('click' , () => {
	const abouBox = new winBox({
		title: 'About Me',
		width: '400px' ,
		height: '400px',
		top: 50;
		right: 50;
		bottom: 50;
		mount: aboutMe,
		onfocus: function () {
			this.setBackground('#00aa00')
		},
		onblur: function (){
			this.setBackground('#777')
		},
	})
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactMe,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
